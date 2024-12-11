import { useTranslation } from 'react-i18next';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import { useHandleError } from '@/core/hooks/useHandleError.ts';
import { useState } from 'react';
import { useLoading } from '@/core/hooks/useLoading.tsx';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import profileService from '@/modules/profile/profile-service.ts';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/components/ui/form.tsx';
import { Input } from '@/shared/components/ui/input.tsx';
import { LoadingButton } from '@/shared/components/util/loading-button.tsx';
import { hasNumbers, hasSpecialCharacters, hasUppercaseCharacters } from '@/core/util/zod-util.ts';

export const ChangePasswordSchema = z
  .object({
    oldPassword: z.string(),
    newPassword: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .refine(hasSpecialCharacters, { message: 'Password must contain at least one special character' })
      .refine(hasUppercaseCharacters, { message: 'Password must contain at least one uppercase letter' })
      .refine(hasNumbers, { message: 'Password must contain at least one number' }),
    confirmNewPassword: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .refine(hasSpecialCharacters, { message: 'Password must contain at least one special character' })
      .refine(hasUppercaseCharacters, { message: 'Password must contain at least one uppercase letter' })
      .refine(hasNumbers, { message: 'Password must contain at least one number' }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'Passwords do not match',
    path: ['confirmNewPassword'],
  });

export function ChangePasswordDialog() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { toast } = useToast();
  const handleError = useHandleError();
  const [loading, setLoading] = useState(false);
  const progress = useLoading(loading);

  const form = useForm<z.infer<typeof ChangePasswordSchema>>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  async function onSubmit(values: z.infer<typeof ChangePasswordSchema>) {
    setLoading(true);
    if (user?.email) {
      profileService
        .updatePassword(user?.email, values.oldPassword, values.newPassword)
        .then(() => {
          toast({
            title: t('profile.accountTab.changePasswordDialog.successToast.title'),
            description: t('profile.accountTab.changePasswordDialog.successToast.description'),
            variant: 'success',
          });
          setLoading(false);
        })
        .catch((error) => handleError(error))
        .finally(() => setLoading(false));
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={`outline`} className={`w-full md:w-40 lg:w-40 mr-2`}>
          {t('profile.accountTab.changePassword')}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{t('profile.accountTab.changePasswordDialog.header')}</DialogTitle>
          <DialogDescription>{t('profile.accountTab.changePasswordDialog.text')}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-0 py-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
              <FormField
                control={form.control}
                name="oldPassword"
                render={({ field }) => (
                  <FormItem className={`grid grid-cols-4 items-center gap-x-4`}>
                    <FormLabel className="text-right">
                      {t('profile.accountTab.changePasswordDialog.oldPassword')}
                    </FormLabel>
                    <FormControl className={``}>
                      <Input type={`password`} id="oldPassword" className={`col-span-3`} {...field} />
                    </FormControl>
                    <FormMessage className={`col-start-2 col-span-3 mt-0 pt-0`} />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem className={`grid grid-cols-4 items-center gap-x-4`}>
                    <FormLabel className="text-right">
                      {t('profile.accountTab.changePasswordDialog.newPassword')}
                    </FormLabel>
                    <FormControl>
                      <Input type={`password`} id="newPassword" className={`col-span-3`} {...field} />
                    </FormControl>
                    <FormMessage className={`col-start-2 col-span-3 mt-0 pt-0`} />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmNewPassword"
                render={({ field }) => (
                  <FormItem className={`grid grid-cols-4 items-center gap-x-4`}>
                    <FormLabel className="text-right">
                      {t('profile.accountTab.changePasswordDialog.confirmNewPassword')}
                    </FormLabel>
                    <FormControl>
                      <Input type={`password`} id="confirmNewPassword" className={`col-span-3`} {...field} />
                    </FormControl>
                    <FormMessage className={`col-start-2 col-span-3 mt-0 pt-0`} />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <div className={`flex flex-row gap-2 mt-5`}>
                  <LoadingButton
                    onClick={form.handleSubmit(onSubmit)}
                    loading={loading}
                    progress={progress}
                    buttonText={t('profile.accountTab.changePasswordDialog.saveButtonText')}
                    className="primaryButton"
                  />
                  <DialogClose asChild>
                    <Button variant={`outline`}>{t('profile.accountTab.changePasswordDialog.closeButtonText')}</Button>
                  </DialogClose>
                </div>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
