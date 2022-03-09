import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import "./index.css";

//By wrapping App with PersistGate, it will allow PersistGate to always receive the state provided by Provider and

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <PersistGate persistor={persistor}>
            <App />
         </PersistGate>
      </BrowserRouter>
   </Provider>,

   document.getElementById("root")
);
