import './App.css';
import { ThemeProvider } from '@/core/theme/theme-provider.tsx';
import Landing from '@/modules/landing/landing.tsx';

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Landing />
        </ThemeProvider>
    );
}

export default App;
