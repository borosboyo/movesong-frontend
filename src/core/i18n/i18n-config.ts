import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./en/en.ts";
import { hu } from "./hu/hu.ts";

i18n
    .use(initReactI18next)
    .init({
        lng: localStorage.getItem("lng") || "en",
        fallbackLng: "en",
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en,
            hu
        },
    });

export default i18n;
