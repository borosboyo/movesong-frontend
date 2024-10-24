import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { Input } from '@/shared/components/ui/input.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import EmailIcon from '@/shared/icons/email-icon.tsx';
import { useNavigate } from 'react-router-dom';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/shared/components/ui/form.tsx';

const RegisterEmailSchema = z.object({
  email: z
    .string()
    .min(2, { message: "Email must be a valid email.", })
    .email(),
})

export function RegisterEmailPanel() {
  const navigate = useNavigate();

  const registerForm = useForm<z.infer<typeof RegisterEmailSchema>>({
    resolver: zodResolver(RegisterEmailSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof RegisterEmailSchema>) {
    navigate('/movesong-frontend/register/password', { state: { email: values.email } });
  }

  const handleLoginClick = () => {
     navigate('/movesong-frontend/login');
  };

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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className={`primaryButton flex-row w-full gap-2 mt-2`} type={`submit`}><EmailIcon /> Register with email</Button>
            </form>
          </Form>
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
