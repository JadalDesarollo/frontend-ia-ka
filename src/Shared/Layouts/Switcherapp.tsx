import React from "react";
import { Provider } from "react-redux";
//import Switcher from "../../components/Pages/Switcher/Switcher";
import { Footer } from "../Components/Footer/Footer";
import { Header2 } from "../Components/Header/Header2";
import Sidebar from "../Components/Sidebar/Sidebar";
import TabToTop from "../Components/TabToTap/TabToTap";
import store from './../../Redux/Store/store';

export default function Switcherapp() {
 
 
  document.querySelector("body")?.classList.remove("page-style1", "error-page")
  document.querySelector("body")?.classList.add("main-body", "app","sidebar-mini", "light-mode", "ltr");
  
  const headersearch =()=>{
    if( document.querySelector(".search-result")){
    document.querySelector(".search-result")?.classList.add("d-none")
    }
  }
  return (
    <React.Fragment>
        <div className="horizontalMenucontainer">
    
    <div className="page">
      <div className="page-main open">
      <Header2 />
      <div className="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
      <Sidebar />
      <div className="app-content main-content" >
        <div className="side-app">
          <div className="container-fluid main-container" onClick={()=>headersearch()}>
          {/* <Provider store={store}>
          <Switcher />
          </Provider> */}
          </div>
        </div>
      </div>
      </div>
    <Footer />
    </div>
    <TabToTop/>
  </div>
    </React.Fragment>
  );
}
