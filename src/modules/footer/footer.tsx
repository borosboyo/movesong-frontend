import { Button } from "@/shared/components/ui/button";

export function Footer () {
    return (
        <footer className={`mt-5 grid grid-cols-1 gap-5 py-6 w-full content-center`}>
            <div className={`flex justify-center`}>
                <h1 className={`scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl`}>We are always happy to help!</h1>
            </div>
            <div className={`flex justify-center`}>
                <h3 className={`scroll-m-20 text-md tracking-tight lg:text-md`}>Feel free to ask any questions.</h3>
            </div>
            <div className={`flex mt-2 gap-5 justify-center`}>
                <Button className={`w-64 py-5 rounded-xl`}>
                    <div className={`text-lg font-bold`}>FAQ</div>
                </Button>
                <Button className={`w-64 py-5 rounded-xl`}>
                    <div className={`text-lg font-bold`}>Contact us</div>
                </Button>
            </div>
            <div className={`grid grid-cols-3 justify-items-center mt-20 max-w-screen-md mx-auto`}>
                <div className={`flex-col`}>
                    <p className={`font-bold`}>Movesong</p>
                    <p className={`mt-3`}>Főoldal</p>
                    <p className={`mt-3`}>Bejelentkezés</p>
                    <p className={`mt-3`}>Beállításaim</p>
                    <p className={`mt-3`}>Szinkronizált lejátszási listáim</p>
                </div>
                <div className={`flex-col`}>
                    <p className={`font-bold`}>Súgó</p>
                    <p className={`mt-3`}>GYIK</p>
                    <p className={`mt-3`}>Kapcsolat</p>
                </div>
                <div className={`flex-col`}>
                    <p className={`font-bold`}>Jogi nyilatkozatok</p>
                    <p className={`mt-3`}>Felhasználási feltételek</p>
                    <p className={`mt-3`}>Adatvédelmi irányelvek</p>
                </div>
            </div>
        </footer>
    );
}
