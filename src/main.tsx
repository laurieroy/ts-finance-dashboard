import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Provider } from "react-redux";

import App from "./App.tsx";
import "./index.css";
import { api } from "./state/api.ts";

export const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getDefault)=> getDefault().concat(api.middleware),

})
setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
