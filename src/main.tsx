import React from "react";
import ReactDOM from "react-dom/client";
import ListViewPage from "./pages/ListViewPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom-style.css";
import { Footer, Header } from "./components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <ListViewPage />
    <Footer />
  </React.StrictMode>
);
