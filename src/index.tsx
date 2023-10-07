import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "ar"],
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    fallbackLng: "en",
    detection: {
      order: ["path", "localStorage", "htmlTag", "cookie", "subdomain"],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "assets/locals/{{lng}}/transitions.json",
    },
    // react: { useSuspense: false },
  });

const loading = (
  <div className="load text-center py-4">
    <h2>Loading....</h2>
  </div>
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Suspense fallback={loading}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
