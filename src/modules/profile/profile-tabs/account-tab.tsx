import { TabsContent } from '@/shared/components/ui/tabs.tsx';
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/components/ui/card.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/components/ui/popover.tsx';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import { useNavigate } from 'react-router-dom';
import { FindSubscriptionResp } from '@/swagger/subscription';
import { useEffect, useState } from 'react';
import { ConnectionDto } from '@/swagger/transform/models/connection-dto';
import profileService from '@/modules/profile/profile-service.ts';
import { useHandleError } from '@/core/hooks/useHandleError.ts';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/components/ui/dialog.tsx';
import { Input } from '@/shared/components/ui/input.tsx';
import { z } from 'zod';
import { hasNumbers, hasSpecialCharacters, hasUppercaseCharacters } from '@/core/util/zod-util.ts';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/components/ui/form.tsx';
import { useLoading } from '@/core/hooks/useLoading.tsx';
import { LoadingButton } from '@/shared/components/util/loading-button.tsx';

export function AccountTab({ subscription }: Readonly<{ subscription: FindSubscriptionResp | null }>) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const [connections, setConnections] = useState<ConnectionDto[]>([]);
  const handleError = useHandleError();
  const { t } = useTranslation();

  useEffect(() => {
    if (user?.email) {
      profileService.findConnectionsByMovesongEmail(user.email).then((resp) => {
        if (resp.connections) {
          setConnections(resp.connections);
        }
      }).catch((error) => handleError(error));
    }
  }, [user?.email]);

  const handleLogout = () => {
    logout();
    toast({
      title: t('profile.accountTab.logoutSuccessToast.title'),
      description: t('profile.accountTab.logoutSuccessToast.description'),
      variant: 'success',
    });
    navigate('/movesong-frontend');
  };

  const handleNewConnection = () => {
    navigate('/movesong-frontend/profile/new-connection');
  };

  return (
    <TabsContent value="account">
      <Card>
        <CardHeader>
          {subscription ? <PremiumHeader subscription={subscription} /> : <FreeHeader />}
        </CardHeader>
        <CardContent className="space-y-2">
          <div className={`grid w-full grid-cols-2`}>
            <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:text-l`}>
              {t('profile.accountTab.connections')}
            </span>
            <div className={`flex w-auto justify-end`}>
              <Button disabled={connections.length === 2} className={`primaryButton`} onClick={handleNewConnection}>
                {t('profile.accountTab.newConnection')}
              </Button>
            </div>
          </div>
          {connections.length === 0 ? (
            <div className={`flex justify-center items-center`}>
              <span className={`text-xl text-muted-foreground font-bold`}>
                {t('profile.accountTab.noConnections')}
              </span>
            </div>
          ) : (
            <Connections connections={connections} />
          )}
        </CardContent>
        <CardFooter>
          <div className={`flex flex-col gap-3`}>
            <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:textl`}>
              {t('profile.accountTab.account')}
            </span>
            <div className={`grid w-full grid-cols-2`} style={{ gridTemplateColumns: '2.3fr 2fr' }}>
              <span className={`w scroll-m-20 text-s font-light tracking-tight lg:text-s`}>
                {t('profile.accountTab.email')}
              </span>
              <span className={`w scroll-m-20 text-s font-bold tracking-tight lg:text-s`}>
                {user?.email}
              </span>
            </div>
            <div className={`flex-col`}>
              <ChangePasswordDialog />
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={`ghost`}>{t('profile.accountTab.logout')}</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className={`flex flex-col gap-3`}>
                    <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:textl`}>
                      {t('profile.accountTab.logOutPopover.text')}
                    </span>
                    <div className={`flex justify-end gap-3`}>
                      <Button variant={`outline`} onClick={handleLogout}>
                        {t('profile.accountTab.logOutPopover.buttonText')}
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={`ghost`} className={`text-red-500`}>
                    {t('profile.accountTab.deleteAccountButtonText')}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className={`flex flex-col gap-3`}>
                    <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:textl`}>
                      {t('profile.accountTab.deleteAccountPopover.header')}
                    </span>
                    <span className={`w scroll-m-20 text-s font-light tracking-tight lg:text-s`}>
                      {t('profile.accountTab.deleteAccountPopover.text')}
                    </span>
                    <div className={`flex justify-end gap-3`}>
                      <Button variant={`destructive`}>
                        {t('profile.accountTab.deleteAccountPopover.buttonText')}
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}

export function PremiumHeader({ subscription }: Readonly<{ subscription: FindSubscriptionResp }>) {
  const { t } = useTranslation();

  return (
    <>
      <div className={`grid w-full grid-cols-2`}>
        <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:text-l`}>
          {t('profile.accountTab.premium')}
        </span>
      </div>
      <div className={`grid w-full grid-cols-4`} style={{ gridTemplateColumns: '1.25fr 1.75fr 1fr 2fr' }}>
        <span className={`w scroll-m-20 text-s font-light tracking-tight lg:text-s`}>
          {t('profile.accountTab.premiumBundle')}
        </span>
        <span className={`w scroll-m-20 text-s font-bold tracking-tight lg:text-s`}>
          ${subscription.price} - {subscription.interval}
        </span>
      </div>
      <div className={`grid w-full grid-cols-4`} style={{ gridTemplateColumns: '1.25fr 1.75fr 1fr 2fr' }}>
        <span className={`w scroll-m-20 text-s font-light tracking-tight lg:text-s`}>
          {t('profile.accountTab.nextPayment')}
        </span>
        <span className={`w scroll-m-20 text-s font-bold tracking-tight lg:text-s`}>
          {new Date(subscription.currentPeriodEnd! * 1000).toUTCString()}
        </span>
      </div>
      <div className={`grid w-full grid-cols-2`} style={{ gridTemplateColumns: '1.3fr 5fr' }}>
        <span className={`w scroll-m-20 text-s font-light tracking-tight lg:text-s`}>
          {t('profile.accountTab.paymentMethod')}
        </span>
        <span className={`w scroll-m-20 text-s font-bold tracking-tight lg:text-s`}>
          {t('profile.accountTab.card')}
        </span>
      </div>
    </>
  );
}

export function FreeHeader() {
  const { t } = useTranslation();

  return (
    <div className={`flex justify-center items-center`}>
      <span className={`text-xl text-muted-foreground font-bold`}>
        {t('profile.accountTab.notPremium')}
      </span>
    </div>
  );
}

export function Connections({ connections }: Readonly<{ connections: ConnectionDto[] }>) {
  return (
    <div className={`grid grid-cols-1 gap-4`}>
      {connections.map((connection) => (
        <div key={connection.platformType} className={`flex items-center gap-4`}>
          {connection.platformType === 'YOUTUBE' && (
            <div className={`flex gap-2 items-center`}>
              <img className={`w-10 h-10 object-cover`} src={`/src/assets/youtube-music/youtube-music-icon.webp`} alt={`youtube-music`} />
              <span className={`text-md font-normal`}>Youtube</span>
            </div>
          )}
          {connection.platformType === 'SPOTIFY' && (
            <div className={`flex gap-2 items-center`}>
              <img className={`w-10 h-10 object-cover`} src={`/src/assets/spotify/spotify-icon.webp`} alt={`spotify`} />
              <span className={`text-md font-normal`}>Spotify</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const ChangePasswordSchema = z.object({
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
}).refine((data) => data.newPassword === data.confirmNewPassword, {
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
      profileService.updatePassword(user?.email, values.oldPassword, values.newPassword).then(() => {
        toast({
          title: t('profile.accountTab.changePasswordDialog.successToast.title'),
          description: t('profile.accountTab.changePasswordDialog.successToast.description'),
          variant: 'success',
        });
        setLoading(false);
      }).catch(error => handleError(error)).finally(() => setLoading(false));
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={`ghost`}>{t('profile.accountTab.changePassword')}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{t('profile.accountTab.changePasswordDialog.header')}</DialogTitle>
          <DialogDescription>
            {t('profile.accountTab.changePasswordDialog.text')}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-0 py-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
              <FormField
                control={form.control}
                name="oldPassword"
                render={({ field }) => (
                  <FormItem className={`grid grid-cols-4 items-center gap-x-4`}>
                    <FormLabel className="text-right">{t('profile.accountTab.changePasswordDialog.oldPassword')}</FormLabel>
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
                  <FormItem  className={`grid grid-cols-4 items-center gap-x-4`}>
                    <FormLabel className="text-right">{t('profile.accountTab.changePasswordDialog.newPassword')}</FormLabel>
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
                      <FormLabel className="text-right">{t('profile.accountTab.changePasswordDialog.confirmNewPassword')}</FormLabel>
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
