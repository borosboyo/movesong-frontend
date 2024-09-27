import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { Input } from '@/shared/components/ui/input.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import EmailIcon from '@/shared/icons/email-icon.tsx';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';
import { useNavigate } from 'react-router-dom';
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/components/ui/form.tsx";

const LoginSchema = z.object({
  usernameOrEmail: z
    .string()
    .min(2, { message: "Username or email invalid", })
})

export function LoginEmailPanel() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      usernameOrEmail: "",
    },
  })

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    console.log(values)
    navigate('/movesong-frontend/login/password' , { state: { usernameOrEmail: values.usernameOrEmail } });
  }

  const handleRegisterClick = () => {
    navigate('/movesong-frontend/register');
  }

  return (
    <PanelContainer>
      <Card className={`w-[350px]`}>
        <CardHeader>
          <CardTitle className={`flex justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>Log in to Movesong</CardTitle>
        </CardHeader>
        <CardContent className={`mb-0`}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="usernameOrEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Username or email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className={`primaryButton flex-row w-full gap-2 `} type={`submit`}><EmailIcon /> Log in</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className={`flex-col grid gap-2 items-start`}>
          <div className={`flex`}>
            <CardDescription>
              Don&apos;t have an account?
              <Button onClick={handleRegisterClick} className={`p-0 ml-1`} variant={`link`}>
                <p className={`sm:text-s`}>Register now</p>
              </Button>
            </CardDescription>
          </div>
        </CardFooter>
      </Card>
    </PanelContainer>
  );
}
