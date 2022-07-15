import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ToastContainer } from "react-toastify";
import store from "./redux/store";
import "./global.css";
import "react-toastify/dist/ReactToastify.css";

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <App />
          <ToastContainer
            position="bottom-center"
            autoClose={2000}
            hideProgressBar={true}
            closeButton={false}
            theme="colored"
            icon={false}
          />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
