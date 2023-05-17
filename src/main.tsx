/*
 * @Descripttion:
 * @version:
 * @Author: CYZ
 * @Date: 2023-05-17 16:16:13
 * @LastEditors: CYZ
 * @LastEditTime: 2023-05-17 20:20:25
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
