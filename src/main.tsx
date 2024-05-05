import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./Shared/Router/Router";
import { AuthProvider } from "./Auth/context/authContext";

const container: HTMLElement | null = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <AuthProvider>

    <React.Fragment>
      <BrowserRouter >
        <Routing />
      </BrowserRouter>
    </React.Fragment>
  </AuthProvider>
);
