import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/components/ui/select.tsx';
import { Input } from '@/shared/components/ui/input.tsx';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';
import { useState } from 'react';
import { useLoading } from '@/core/hooks/useLoading.tsx';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import { LoadingButton } from '@/shared/components/util/loading-button.tsx';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/components/ui/form.tsx';
import contactService from '@/modules/contact/contact-service.ts';
import { Textarea } from '@/shared/components/ui/textarea.tsx';

const ContactSchema = z.object({
  subject: z
    .string(),
  name: z
    .string(),
  email: z
    .string(),
  message: z
    .string(),
});

export function ContactPanel() {
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
      if(resp.success) {
        toast({
          title: 'Message sent',
          description: 'Your message has been sent successfully',
          variant: 'success',
        });
      } else {
        toast({
          title: 'Failed to send message',
          description: 'An error occurred while sending your message. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      setLoading(false);
      toast({
        title: 'Error',
        description: 'An error occurred while sending your message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
      setIsSendDisabled(true)
    }
  }


  return (
    <PanelContainer>
      <Card className={`w-2/5`}>
        <CardHeader>
          <CardTitle className={`flex scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl`}>Contact us</CardTitle>
          <CardDescription className={`text-xl`}>Nullam sed ipsum in odio euismod mollis at in orci. Cras eu molestie turpis. Integer ultrices urna vitae tellus ultrices, egestas tristique nisl volutpat.
            Nulla facilisi. </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...contactForm}>
            <form onSubmit={contactForm.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={contactForm.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange} // Handle the change
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Suggestion</SelectItem>
                          <SelectItem value="2">Feedback</SelectItem>
                          <SelectItem value="3">Problem</SelectItem>
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
                    <FormLabel>Your Name</FormLabel>
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
                    <FormLabel>Your Email</FormLabel>
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <LoadingButton
                disabled={isSendDisabled}
                className={`primaryButton rounded-xl w-1/5 mt-2`}
                loading={loading}
                progress={progress}
                onClick={contactForm.handleSubmit(onSubmit)}
                buttonText={`Send`}
              />
            </form>
          </Form>
        </CardContent>
      </Card>
    </PanelContainer>
  );
}
