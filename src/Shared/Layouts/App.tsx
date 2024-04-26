import React, { DispatchWithoutAction, useReducer } from 'react'
import { Switcher } from '../Components/Switcher/Switcher';
import { Header } from '../Components/Header/Header';
import Sidebar from '../Components/Sidebar/Sidebar';
import { Footer } from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import TabToTop from '../Components/TabToTap/TabToTap';
import { Provider } from 'react-redux'
import store from '../../Redux/Store/store';



interface MyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  clickhandler: DispatchWithoutAction;
}

function App() {
  document.querySelector("body")?.classList.remove("page-style1", "bg-style", "error-page");
  document.querySelector("body")?.classList.add("main-body", "app", "sidebar-mini", "light-mode", "ltr");
  const headersearch = () => {
    //Header search
    document.querySelector("body")?.classList.remove("search-show");
    if (document.querySelector(".search-result")) {
      document.querySelector(".search-result")?.classList.add("d-none")
    }
    //Header search
    //Switcher 
    document.querySelector(".demo_changer")?.classList.remove("active");
    let demo_changer = document.querySelector(".demo_changer") as HTMLElement
    demo_changer.style.right = "-270px";
    //Switcher
  }
  return (
    <div className="horizontalMenucontainer">
      <Switcher />
      <div className="page">
        <div className="page-main open">
          <Header />
          <Sidebar />
          <div className="app-content main-content" onClick={() => headersearch()}
          >
            <div className="side-app">
              <div className="container-fluid main-container" >
                <Provider store={store}>
                  <Outlet />
                </Provider>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <TabToTop />
    </div>
  )
}

export default App
