import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { Input } from '@/shared/components/ui/input.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import EmailIcon from '@/shared/icons/email-icon.tsx';
import { PanelContainer } from '@/shared/components/util/panel-container.tsx';
import { useNavigate } from 'react-router-dom';
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/shared/components/ui/form.tsx";
import { useTranslation } from 'react-i18next';

const LoginSchema = z.object({
  usernameOrEmail: z
    .string()
    .min(2, { message: "Username or email invalid", })
})

export function LoginEmailPanel() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const loginForm = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      usernameOrEmail: "",
    },
  })

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    navigate('/movesong-frontend/login/password' , { state: { usernameOrEmail: values.usernameOrEmail } });
  }

  const handleRegisterClick = () => {
    navigate('/movesong-frontend/register');
  }

  return (
    <PanelContainer>
      <Card className={`w-[350px]`}>
        <CardHeader>
          <CardTitle className={`flex justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>
            {t('auth.login.emailPanel.header')}
          </CardTitle>
        </CardHeader>
        <CardContent className={`mb-0`}>
          <Form {...loginForm}>
            <form onSubmit={loginForm.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={loginForm.control}
                name="usernameOrEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder={t('auth.login.emailPanel.userNameOrEmailInputPlaceholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className={`primaryButton flex-row w-full gap-2 `} type={`submit`}>
                <EmailIcon />{t('auth.login.emailPanel.buttonText')}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className={`flex-col grid gap-2 items-start`}>
          <div className={`flex`}>
            <CardDescription>
              {t('auth.login.emailPanel.registerText')}
              <Button onClick={handleRegisterClick} className={`p-0 ml-1`} variant={`link`}>
                <p className={`sm:text-s`}>{t('auth.login.emailPanel.registerButtonText')}</p>
              </Button>
            </CardDescription>
          </div>
        </CardFooter>
      </Card>
    </PanelContainer>
  );
}
