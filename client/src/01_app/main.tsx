import { createRoot } from "react-dom/client";
import "./scss/index.scss";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { ModalProvider } from "@shared/modal";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ModalProvider>
      <App />
    </ModalProvider>
  </Provider>
);
