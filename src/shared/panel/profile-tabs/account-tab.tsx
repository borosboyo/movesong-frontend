import { TabsContent } from '@/shared/components/ui/tabs.tsx';
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/components/ui/card.tsx';
import { Button } from '@/shared/components/ui/button.tsx';

export function AccountTab() {
  return <TabsContent value="account">
    <Card>
      <CardHeader>
        <div className={`grid w-full grid-cols-2`}>
          <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:text-l`}>Premium account</span>
          <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:text-l`}>Past payments</span>
        </div>
        <div className={`grid w-full grid-cols-4`} style={{ gridTemplateColumns: '1.25fr 1.75fr 1fr 2fr' }}>
          <span className={`w scroll-m-20 text-s font-light tracking-tight lg:text-s`}>Premium bundle:</span>
          <span className={`w scroll-m-20 text-s font-bold tracking-tight lg:text-s`}>Monthly - $0.00</span>
          <span className={`w scroll-m-20 text-s font-light tracking-tight lg:text-s`}>2024. 03. 02.</span>
          <span className={`w scroll-m-20 text-s font-bold tracking-tight lg:text-s`}>$0.00</span>
        </div>
        <div className={`grid w-full grid-cols-4`} style={{ gridTemplateColumns: '1.25fr 1.75fr 1fr 2fr' }}>
          <span className={`w scroll-m-20 text-s font-light tracking-tight lg:text-s`}>Next payment:</span>
          <span className={`w scroll-m-20 text-s font-bold tracking-tight lg:text-s`}>2024. 04. 02.</span>
          <span className={`w scroll-m-20 text-s font-light tracking-tight lg:text-s`}>2024. 02. 02.</span>
          <span className={`w scroll-m-20 text-s font-bold tracking-tight lg:text-s`}>$0.00</span>
        </div>
        <div className={`grid w-full grid-cols-2 `} style={{ gridTemplateColumns: '1.3fr 5fr' }}>
          <span className={`w scroll-m-20 text-s font-light tracking-tight lg:text-s`}>Payment method:</span>
          <span className={`w scroll-m-20 text-s font-bold tracking-tight lg:text-s`}>Card</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className={`grid w-full grid-cols-2`}>
          <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:text-l`}>Connections</span>
          <div className={`flex w-auto justify-end`}>
            <Button>New connection</Button>
          </div>
        </div>
        <div className={`flex justify-center items-center`}>
          <span className={`text-xl text-muted-foreground font-bold`}>You have no connections yet.</span>
        </div>
      </CardContent>
      <CardFooter>
        <div className={`flex flex-col gap-3`}>
          <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:textl`}>Account</span>
          <div className={`grid w-full grid-cols-2`} style={{ gridTemplateColumns: '2.3fr 2fr' }}>
            <span className={`w scroll-m-20 text-s font-light tracking-tight lg:text-s`}>Email:</span>
            <span className={`w scroll-m-20 text-s font-bold tracking-tight lg:text-s`}>test@test.com</span>
          </div>
          <div className={`flex-col`}>
            <Button variant={`ghost`}>Change password</Button>
            <Button variant={`ghost`}>Logout</Button>
            <Button variant={`ghost`} className={`text-red-500`}>Delete account</Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  </TabsContent>
    ;
}
