import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { PanelContainer } from '@/shared/components/util/panel-container.tsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/components/ui/form.tsx';
import { Input } from '@/shared/components/ui/input.tsx';
import { Textarea } from '@/shared/components/ui/textarea.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/components/ui/select.tsx';
import { LoadingButton } from '@/shared/components/util/loading-button.tsx';
import { useLoading } from '@/core/hooks/useLoading.tsx';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import contactService from '@/modules/contact/contact-service.ts';

const ContactSchema = z.object({
  subject: z.string().min(1),
  name: z.string().min(1),
  email: z.string().email().min(1),
  message: z.string().min(1),
});

export function ContactPanel() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [isSendDisabled, setIsSendDisabled] = useState(false);
  const progress = useLoading(loading);
  const { toast } = useToast();

  const contactForm = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      subject: '',
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof ContactSchema>) {
    setLoading(true);
    try {
      const resp = await contactService.contact(values.subject, values.name, values.email, values.message);
      if (resp.success) {
        toast({
          title: t('contact.successToast.title'),
          description: t('contact.successToast.description'),
          variant: 'success',
        });
      } else {
        toast({
          title: t('contact.errorToast.title'),
          description: t('contact.errorToast.description'),
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: t('contact.errorToast.title'),
        description: t('contact.errorToast.description'),
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
      setIsSendDisabled(true);
    }
  }

  return (
    <PanelContainer>
      <Card className={`w-4/5 md:w-3/5`}>
        <CardHeader>
          <CardTitle
            className={`flex scroll-m-20 text-xl lg:text-5xl font-extrabold tracking-tight text-center lg:text-left`}
          >
            {t('contact.header')}
          </CardTitle>
          <CardDescription className={`text-md lg:text-xl`}>{t('contact.text')}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...contactForm}>
            <form onSubmit={contactForm.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={contactForm.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.subjectPlaceholder')}</FormLabel>
                    <FormControl>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder={t('contact.subjectPlaceholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">{t('contact.subjectItems.suggestion')}</SelectItem>
                          <SelectItem value="2">{t('contact.subjectItems.feedback')}</SelectItem>
                          <SelectItem value="3">{t('contact.subjectItems.problem')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={contactForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.nameLabelText')}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={contactForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.emailLabelText')}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={contactForm.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('contact.messageLabelText')}</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <LoadingButton
                disabled={isSendDisabled}
                className={`primaryButton rounded-xl w-full lg:w-1/3 mt-2`}
                loading={loading}
                progress={progress}
                onClick={contactForm.handleSubmit(onSubmit)}
                buttonText={t('contact.buttonText')}
              />
            </form>
          </Form>
        </CardContent>
      </Card>
    </PanelContainer>
  );
}
