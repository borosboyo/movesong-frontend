import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { Input } from '@/shared/components/ui/input.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';
import { useButtonTheme } from '@/core/theme/hooks/useButtonTheme.ts';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLoading } from '@/core/hooks/useLoading.tsx';
import { LoadingButton } from '@/shared/components/util/loading-button.tsx';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/shared/components/ui/form.tsx';
import { PasswordInput } from '@/shared/components/ui/password-input.tsx';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import { hasNumbers, hasSpecialCharacters, hasUppercaseCharacters } from '@/core/util/zod-util.ts';

const RegisterSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters long." }),
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long.", }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long.", }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .refine(hasSpecialCharacters, { message: 'Password must contain at least one special character' })
    .refine(hasUppercaseCharacters, { message: 'Password must contain at least one uppercase letter' })
    .refine(hasNumbers, { message: 'Password must contain at least one number' }),
  confirmPassword: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .refine(hasSpecialCharacters, { message: 'Password must contain at least one special character' })
    .refine(hasUppercaseCharacters, { message: 'Password must contain at least one uppercase letter' })
    .refine(hasNumbers, { message: 'Password must contain at least one number' })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export function RegisterPasswordPanel() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const progress = useLoading(loading);
  const { register } = useAuth();
  const email = location?.state?.email;

  const registerForm = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    setLoading(true);
    register(email, values.username, values.password, values.firstName, values.lastName).then(() => {
      setLoading(false);
      navigate('/movesong-frontend/register/confirm');
    });
  }

  const handleReturnClick = () => {
    navigate('/movesong-frontend/register');
  }

  const handleLoginClick = () => {
    navigate('/movesong-frontend/login');
  }

  return (
    <PanelContainer>
      <Card className={`w-[350px]`}>
        <CardHeader>
          <CardTitle className={`flex justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>Create Your Account</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...registerForm}>
            <form onSubmit={registerForm.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={registerForm.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={registerForm.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="First name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={registerForm.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={registerForm.control}
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
              <FormField
                control={registerForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <PasswordInput placeholder="Confirm password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <LoadingButton
                onClick={registerForm.handleSubmit(onSubmit)}
                loading={loading}
                progress={progress}
                buttonText="Register"
                className="w-full primaryButton"
              />
            </form>
          </Form>
          <Button className={`w-full ${useButtonTheme()} transition-transform hover:scale-105 mt-2`} onClick={handleReturnClick}>Register with different email</Button>
        </CardContent>
        <CardFooter className={`flex-col grid gap-2 items-start`}>
          <div className={`flex`}>
            <CardDescription>
              Already have an account?
              <Button onClick={handleLoginClick} className={`p-0 ml-1`} variant={`link`}>
                <p className={`sm:text-s`}>Log in</p>
              </Button>
            </CardDescription>
          </div>
        </CardFooter>
      </Card>
    </PanelContainer>
  );
}
