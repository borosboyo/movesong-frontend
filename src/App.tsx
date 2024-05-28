import './App.css';
import { ThemeProvider } from '@/core/theme/theme-provider.tsx';
import Landing from '@/modules/landing/landing.tsx';
import { Toaster } from '@/shared/components/ui/toaster.tsx';

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Landing />
          <Toaster />
        </ThemeProvider>
    );
}

export default App;
