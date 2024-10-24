import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { useButtonTheme } from '@/core/theme/hooks/useButtonTheme.ts';
import { useLocation, useNavigate } from 'react-router-dom';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import { useLoading } from '@/core/hooks/useLoading.tsx';
import { useState } from 'react';
import { LoadingButton } from '@/shared/components/util/loading-button.tsx';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/shared/components/ui/form.tsx';
import EmailIcon from '@/shared/icons/email-icon.tsx';
import { PasswordInput } from '@/shared/components/ui/password-input.tsx';
import { hasNumbers, hasSpecialCharacters, hasUppercaseCharacters } from '@/core/util/zod-util.ts';

const PasswordSchema = z.object({
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .refine(hasSpecialCharacters, { message: 'Password must contain at least one special character' })
    .refine(hasUppercaseCharacters, { message: 'Password must contain at least one uppercase letter' })
    .refine(hasNumbers, { message: 'Password must contain at least one number' })
});

export function LoginPasswordPanel() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const progress = useLoading(loading);
  const usernameOrEmail = location?.state?.usernameOrEmail;

  const form = useForm<z.infer<typeof PasswordSchema>>({
    resolver: zodResolver(PasswordSchema),
    defaultValues: {
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof PasswordSchema>) {
    setLoading(true);
    login(usernameOrEmail, values.password).then(() => {
      setLoading(false);
      navigate('/movesong-frontend/');
    });
  }

  const handleReturnClick = () => {
    navigate('/movesong-frontend/login');
  };


  const handleForgotPasswordClick = () => {
    navigate('/movesong-frontend/forgot-password');
  };

  return (
    <PanelContainer>
      <Card className={`w-[350px]`}>
        <CardHeader>
          <CardTitle className={`flex justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>Log in to Movesong</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <PasswordInput placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <LoadingButton
                onClick={form.handleSubmit(onSubmit)}
                loading={loading}
                progress={progress}
                buttonText="Log in"
                className="w-full primaryButton"
                icon={<EmailIcon />}
              />
            </form>
          </Form>
          <Button className={`w-full ${useButtonTheme()} transition-transform hover:scale-105 mt-2`} onClick={handleReturnClick}>Log in with different account</Button>
        </CardContent>
        <CardFooter className={`flex-col grid gap-2 items-start`}>
          <div className={`flex`}>
            <CardDescription>Forgot your password?
              <Button onClick={handleForgotPasswordClick} className={`p-0 ml-1`} variant={`link`}>
                <p className={`sm:text-s`}>Click here</p>
              </Button>
            </CardDescription>
          </div>
        </CardFooter>
      </Card>
    </PanelContainer>
  );
}
