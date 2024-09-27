import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { Label } from '@/shared/components/ui/label.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/components/ui/select.tsx';
import { Input } from '@/shared/components/ui/input.tsx';
import { Textarea } from '@/shared/components/ui/textarea.tsx';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';
import { useState } from 'react';
import { useLoading } from '@/shared/hooks/useLoading.tsx';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import { LoadingButton } from '@/shared/components/util/loading-button.tsx';

export function ContactPanel() {
  const [loading, setLoading] = useState(false);
  const progress = useLoading(loading);
  const { toast } = useToast();

  const handleContact = () => {
    toast({
      title: 'Thank you!',
      description: 'Your message has been sent.',
      variant: 'success',
    });
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
          <form>
            <div className={`grid w-full items-center gap-3`}>
              <div className={`flex flex-col space-y-1.5`}>
                <Label htmlFor={`subject`}>Subject</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Suggestion</SelectItem>
                    <SelectItem value="2">Feedback</SelectItem>
                    <SelectItem value="3">Problem</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className={`flex flex-col space-y-1.5`}>
                <Label htmlFor={`name`}>Your Name</Label>
                <Input id={`name`} />
              </div>
              <div className={`flex flex-col space-y-1.5`}>
                <Label htmlFor={`email`}>Your Email</Label>
                <Input id={`email`} />
              </div>
              <div className={`flex flex-col space-y-1.5`}>
                <Label htmlFor={`message`}>Message</Label>
                <Textarea id={`message`} placeholder="Type your message here." />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className={`flex justify-center items-center w-full`}>
          <LoadingButton
            className={`primaryButton rounded-xl w-1/5`}
            loading={loading}
            progress={progress}
            onClick={handleContact}
            buttonText={`Send`}
          />
        </CardFooter>
      </Card>
    </PanelContainer>
  );
}
