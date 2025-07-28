import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "~/Components/Layout/component/Header/Header";
import GlobalStyle from "~/Components/GlobalStyle/GlobalStyle";
import DefaultLayout from "./Components/Layout/DefaultLayout/DefaultLayout";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <GlobalStyle>
      <DefaultLayout>
        <App />
      </DefaultLayout>
    </GlobalStyle>
  </StrictMode>
);
