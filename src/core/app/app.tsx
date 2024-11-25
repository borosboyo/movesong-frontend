import { ThemeProvider } from '../theme/theme-provider.tsx';
import { AuthProvider } from '@/core/auth/auth-provider.tsx';
import { Toaster } from '@/shared/components/ui/toaster.tsx';
import { CustomerIdProvider } from '@/modules/premium/customer-context.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Router } from './router.tsx';

const App = () => {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <GoogleOAuthProvider clientId={`521481276614-tu63avvj00gj4bu318t8sue1bc1dm5g4.apps.googleusercontent.com`}>
          <CustomerIdProvider>
              <Router />
            <Toaster />
          </CustomerIdProvider>
        </GoogleOAuthProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
export default App;
