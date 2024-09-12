import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { Label } from '@/shared/components/ui/label.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/components/ui/select.tsx';
import { Input } from '@/shared/components/ui/input.tsx';
import { Textarea } from '@/shared/components/ui/textarea.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';

export function ContactPanel() {
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
          <Button className={`primaryButton rounded-xl max-w-[30%]  flex-row w-full gap-2`}>Send</Button>
        </CardFooter>
      </Card>
    </PanelContainer>
  );
}
