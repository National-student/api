import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PostProvider } from "./components/Context/PostContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PostProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PostProvider>
);
