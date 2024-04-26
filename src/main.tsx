import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./Shared/Router/Router";

const container: HTMLElement | null = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.Fragment>
    <BrowserRouter >
      <Routing/>
    </BrowserRouter>
  </React.Fragment>
);
