import React from "react";
import { Outlet } from "react-router-dom";
import Custompagesswitcher from "../Components/Switcher/Custompagesswitcher";

export default function Custompages() {
 
  return (
    <React.Fragment>
            <Custompagesswitcher />
            <Outlet />
    </React.Fragment>
  );
}
