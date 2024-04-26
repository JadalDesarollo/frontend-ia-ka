import React from "react";
import { checkHoriMenu, switcherArrowFn } from "./Switcherdata";

// Direction
export const LtrtoRtl = () => {
    document.querySelector("body")?.classList.add("rtl");
    document.querySelector("html[lang=en]")?.setAttribute("dir", "rtl");
    document.querySelector("body")?.classList.remove("ltr");
  
    localStorage.setItem("dashticrtl", 'true');
    localStorage.removeItem("dashticltr");
  };
  export const RtltoLtr = () => {
    document.querySelector("body")?.classList.add("ltr");
    document.querySelector("html[lang=en]")?.setAttribute("dir", "ltr");
    document.querySelector("body")?.classList.remove("rtl");
  
    localStorage.setItem("dashticltr", 'true');
    localStorage.removeItem("dashticrtl");
  };
  // Header

  export const LightTheme = () => {
    interface HTMLElement extends Element {
      style: any;
      offsetWidth: number;
    }
    document.querySelector("body")?.classList.add("light-mode");
    document.querySelector("body")?.classList.remove("dark-mode");
    let Html = document.querySelector("html") as HTMLElement
    Html.style = "";
    localStorage.removeItem("dashticdark");
    localStorage.setItem("dashticlighttheme", 'true');
    localStorage.removeItem("")
  
  };
  export const dark = () => {
    interface HTMLElement extends Element {
      style: any;
      offsetWidth: number;
    }
    document.querySelector("body")?.classList.add("dark-mode");
    document.querySelector("body")?.classList.remove("light-mode");
    let htmmm = document.querySelector("html")  as HTMLElement
    htmmm.style = "";
    localStorage.removeItem("dashticlighttheme");
    localStorage.setItem("dashticdark", 'true');
  
  };

  export function localStorageBackUp() {
    let html = document.querySelector("html")?.style;
    let body = document.querySelector("body");
  
    if (localStorage.getItem("dashticPrimaryColor") !== null) {
      body?.classList.add("light-mode");
      let mySwitch5 = document.getElementById("myonoffswitch1") as HTMLInputElement
      mySwitch5.checked = true;
      html?.setProperty(
        "--primary-bg-color",
        localStorage.getItem("dashticPrimaryColor")
      );
      html?.setProperty(
        "--primary-bg-hover",
        localStorage.getItem("dashticprimaryHoverColor")
      );
      html?.setProperty(
        "--primary-bg-border",
        localStorage.getItem("dashticprimaryBorderColor")
      );
    }
    if (localStorage.getItem("dashticdarkPrimaryColor") !== null) {
      body?.classList.add("dark-mode");
     let mySwitch6 = document.getElementById("myonoffswitch2") as HTMLInputElement
     mySwitch6.checked = true;

      html?.setProperty(
        "--primary-bg-color",
        localStorage.getItem("dashticdarkPrimaryColor")
      );
      html?.setProperty(
        "--primary-bg-hover",
        localStorage.getItem("dashticdarkPrimaryColor")
      );
      html?.setProperty(
        "--primary-bg-border",
        localStorage.getItem("dashticdarkPrimaryColor")
      );
    }
   
    if (localStorage.dashticrtl) {
      document.querySelector("body")?.classList.add("rtl");
      document.querySelector("html[lang=en]")?.setAttribute("dir", "rtl");
      let steel = document.getElementById("style") as HTMLLinkElement
      if(steel){
        steel.setAttribute("href", "" )
      }
      document.querySelector("body")?.classList.remove("ltr");
      let mySwitch7 = document.querySelector("#myonoffswitch55") as HTMLInputElement
      mySwitch7.checked = true;  
    }
  
    if (localStorage.dashtichorizontal) {
      document.querySelector(".app-header")?.classList.add("hor-header");
      document.querySelector("body")?.classList.remove("sidebar-mini");
      document.querySelector(".app-header")?.classList.remove("side-header");
      document.querySelector(".main-content")?.classList.remove("app-content");
      document.querySelector(".main-container")?.classList.remove("container-fluid");
      document.querySelector("body")?.classList.remove("sidenav-toggled");
      document.querySelector("body")?.classList.remove("horizontal-hover");
      document.querySelector("body")?.classList.add("horizontal");
      document.querySelector(".main-container")?.classList.add("container");
      document.querySelector(".main-sidemenu")?.classList.add("container");
      document.querySelector(".main-content")?.classList.add("horizontal-content");
      document.querySelector(".app-sidebar")?.classList.add("horizontal-main");
      document.querySelector(".side-app")?.classList.add("container");
      let hori = document.querySelector(".horizontal .side-menu") as HTMLElement
      hori.style.flexWrap = "nowrap";
      let mySwitch8 = document.querySelector("#myonoffswitch35")  as HTMLInputElement
      mySwitch8.checked = true;  
      checkHoriMenu();
      switcherArrowFn();
  
    }
  
    if (localStorage.dashtichorizontalHover) {
      document.querySelector("body")?.classList.add("horizontal-hover");
      document.querySelector("body")?.classList.add("horizontal");
      document.querySelector(".main-content")?.classList.add("horizontal-content");
      document.querySelector(".main-container")?.classList.add("container");
      document.querySelector(".app-header")?.classList.add("hor-header");
      document.querySelector(".app-sidebar")?.classList.add("horizontal-main");
      document.querySelector(".main-sidemenu")?.classList.add("container");
      document.querySelector(".side-app")?.classList.add("container");
  
      document.querySelector("#slide-left")?.classList.remove("d-none");
      document.querySelector("#slide-right")?.classList.remove("d-none");
      document.querySelector(".main-content")?.classList.remove("app-content");
      document.querySelector(".main-container")?.classList.remove("container-fluid");
      document.querySelector("body")?.classList.remove("sidebar-mini");
      document.querySelector("body")?.classList.remove("sidenav-toggled");
      let muSwitch9 = document.querySelector("#myonoffswitch111") as HTMLInputElement
      muSwitch9.checked = true;
      document.querySelector(".horizontal-hover .side-menu")?.classList.add("flex-nowrap");
      let li = document.querySelectorAll(".side-menu li");
li.forEach((e: Element, i: number) => {
  if (e.classList.contains("is-expaned")) {
    let ele = [...e.children];
    ele.forEach((el: any, i: number) => {
      el.classList.remove("active");
      if (el.classList.contains("slide-menu")) {
        el.setAttribute("style", "");
        el.style.display = "none";
      }
    });
    e.classList.remove("is-expaned");
  }
});
      checkHoriMenu();
      switcherArrowFn();
    }
    if (localStorage.dashticdark) {
      let mySwitch9 = document.querySelector("#myonoffswitch2") as HTMLInputElement
      mySwitch9.checked=true
      dark()
    }
    if (localStorage.dashticlighttheme) {
      let mySwitch10 = document.querySelector("#myonoffswitch1") as HTMLInputElement
      mySwitch10.checked = true
      LightTheme()
    }
    if(localStorage.DashticcustomBGcolor){
      const dynamicBackgroundColor : NodeListOf<Element> = document.querySelectorAll(
        "input.background-primary-light"
    );

    dynamicBgTransparentBackground(
        dynamicBackgroundColor,
        localStorage.DashticcustomBGcolor
    );
    }
  }
  export function handleThemeUpdate(cssVars:any) {
    interface HTMLElement extends Element {
      style: any;
    }
    const root = document.querySelector(":root") as HTMLElement;
    const keys = Object.keys(cssVars);
  
    keys.forEach((key) => {
      root.style.setProperty(key, cssVars[key]);
    });
  }
  const hex2rgb = (hex:string) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return [ r, g, b ]
}
  // convertion of hex code to rgba code
 
  
  export function dynamicLightPrimaryColor(primaryColor:[], color:string) {
    primaryColor.forEach(() => {
      const cssPropName = `--primary-color-rgb`;
      const cssPropName1 = `--primary--bg-color`;
      const cssPropName2 = `--primary--bg-hover`;
      const cssPropName3 = `--primary--bg-hover`;
      handleThemeUpdate({
        [cssPropName]: hex2rgb(color),
        [cssPropName1]: hex2rgb(color),
        [cssPropName2]: color,

      });
    });
  }
  export function dynamicBgTransparentBackground(primaryColor: Element[] | NodeListOf<Element>, color:string) {

    primaryColor.forEach((item:Element) => {
      const cssPropName1 = `--dark-${item.getAttribute("data-id3")}`;
      const cssPropName2 = `--dark-${item.getAttribute("data-id4")}`;
      handleThemeUpdate({
        [cssPropName1]: color,
        [cssPropName2]: color,
      });
    });
   
  }
  // --primary-bg
 
  export function resetData() {
    let data1 = document.querySelector("#myonoffswitch1") as HTMLInputElement
    data1.checked = true;   //lighttheme

    let data2 = document.querySelector("#myonoffswitch11") as HTMLInputElement
    if(data2){
      data2.checked = true;   //fixed
    }
    let data3 = document.querySelector("#myonoffswitch3") as HTMLInputElement
    if(data3){
      data3.checked = true;    //lightmenu
    }
    let data4 = document.querySelector("#myonoffswitch6") as HTMLInputElement
    if(data4){
      data4.checked = true;    //lightheader
    }
    let data5 = document.querySelector("#myonoffswitch9") as HTMLInputElement
    if(data5){
      data5.checked = true;    //fullwidth
    }
    let data6 = document.querySelector("#myonoffswitch54") as HTMLInputElement
    if(data6){
      data6.checked = true;  //Ltr
    }
    let data7 = document.querySelector("#myonoffswitch34") as HTMLInputElement
    if(data7){
      data7.checked = true;  //Vertail
    }
    let data8 = document.querySelector("#myonoffswitch111") as HTMLInputElement
    if(data8){
      data8.checked = false;
    }
    document.querySelector("body")?.classList.remove("dark-mode");
    document.querySelector("body")?.classList.remove("dark-menu");
    document.querySelector("body")?.classList.remove("color-menu");
    document.querySelector("body")?.classList.remove("gradient-menu");
    document.querySelector("body")?.classList.remove("dark-header");
    document.querySelector("body")?.classList.remove("color-header");
    document.querySelector("body")?.classList.remove("gradient-header");
    document.querySelector("body")?.classList.remove("layout-boxed");
    document.querySelector("body")?.classList.remove("scrollable-layout");
    document.querySelector("body")?.classList.add("sidebar-mini");
    document.querySelector(".app-header")?.classList.add("side-header");
    document.querySelector(".main-content")?.classList.add("app-content");
    document.querySelector(".main-container")?.classList.add("container-fluid");
  
    document.querySelector("body")?.classList.remove("horizontal");
    document.querySelector("body")?.classList.remove("horizontal-hover");
    document.querySelector(".app-sidebar")?.classList.remove("horizontal-main");
    document.querySelector(".app-header")?.classList.remove("hor-header");
    document.querySelector(".main-sidemenu")?.classList.remove("container");
    document.querySelector(".main-container")?.classList.remove("container");
    document.querySelector(".side-app")?.classList.remove("container");
    document.querySelector(".main-content")?.classList.remove("horizontal-content");
      
      
  
    document.querySelector("body")?.classList.add("ltr");
    document.querySelector("html[lang=en]")?.setAttribute("dir", "ltr");
    document.querySelector("body")?.classList.remove("rtl");
  }