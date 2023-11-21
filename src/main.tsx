import React from "react";
import ReactDOM from "react-dom/client";
import "@/assets/styles/main.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { fetchAllSectors } from "./services/api.ts";

store.dispatch(fetchAllSectors());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
