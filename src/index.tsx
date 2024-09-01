import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, router } from "./router";
import { Provider } from "react-redux";
import {store} from './store';

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
     <Provider store={store}>
       <RouterProvider router={router} />
     </Provider>
    
  </React.StrictMode>
);
