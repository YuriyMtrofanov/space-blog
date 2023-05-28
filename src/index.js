import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom"; // react-router-dom -v 5.3.0
import App from "./app/App";
import { Router } from "react-router-dom";
import { createStore } from "./app/store/createStore";
import { Provider } from "react-redux";
import customHistory from "./app/utils/history";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const store = createStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store = { store }>
        <Router history = { customHistory }>
            <App />
        </Router>
    </Provider>
);

reportWebVitals();
