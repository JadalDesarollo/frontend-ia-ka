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
   export const Defaultbody = () =>{
document.querySelector("body")?.classList.add("body-default")
document.querySelector("body")?.classList.remove("body-style1")
   }
   export const Bodystyle = () =>{
    document.querySelector("body")?.classList.add("body-style1")
    document.querySelector("body")?.classList.remove("body-default")
       }
  // Header
  export const Lightheader = () => {
    document.querySelector("body")?.classList.remove("color-header");
    document.querySelector("body")?.classList.remove("gradient-header");
    document.querySelector("body")?.classList.remove("dark-header");
    document.querySelector("body")?.classList.add("light-header");
  };
  export const Colorheader = () => {
    document.querySelector("body")?.classList.remove("gradient-header");
    document.querySelector("body")?.classList.remove("dark-header");
    document.querySelector("body")?.classList.remove("light-header");
    document.querySelector("body")?.classList.add("color-header");
  };
  export const gradientheader = () => {
    document.querySelector("body")?.classList.remove("color-header");
    document.querySelector("body")?.classList.remove("dark-header");
    document.querySelector("body")?.classList.remove("light-header");
    document.querySelector("body")?.classList.add("gradient-header");
  };
  export const Darkheader = () => {
    document.querySelector("body")?.classList.remove("color-header");
    document.querySelector("body")?.classList.remove("gradient-header");
    document.querySelector("body")?.classList.remove("light-header");
    document.querySelector("body")?.classList.add("dark-header");
  };
  // menu
  export const LightMenu = () => {
    document.querySelector("body")?.classList.remove("color-menu");
    document.querySelector("body")?.classList.remove("dark-menu");
    document.querySelector("body")?.classList.remove("gradient-menu");
    document.querySelector("body")?.classList.add("light-menu");
  };
  export const ColorMenu = () => {
    document.querySelector("body")?.classList.remove("light-menu");
    document.querySelector("body")?.classList.remove("dark-menu");
    document.querySelector("body")?.classList.remove("gradient-menu");
    document.querySelector("body")?.classList.add("color-menu");
  };
  export const DarkMenu = () => {
    document.querySelector("body")?.classList.remove("light-menu");
    document.querySelector("body")?.classList.remove("color-menu");
    document.querySelector("body")?.classList.remove("gradient-menu");
    document.querySelector("body")?.classList.add("dark-menu");
  };
  export const GradientMenu = () => {
    document.querySelector("body")?.classList.remove("light-menu");
    document.querySelector("body")?.classList.remove("color-menu");
    document.querySelector("body")?.classList.remove("dark-menu");
    document.querySelector("body")?.classList.add("gradient-menu");
  };
  //
  export const FullWidth = () => {
    document.querySelector("body")?.classList.remove("layout-boxed");
    document.querySelector("body")?.classList.add("layout-fullwidth");
  };
  export const Boxed = () => {
    document.querySelector("body")?.classList.remove("layout-fullwidth");
    document.querySelector("body")?.classList.add("layout-boxed");
  };
  export const Fixed = () => {
    document.querySelector("body")?.classList.remove("scrollable-layout");
    document.querySelector("body")?.classList.add("fixed-layout");
  };
  export const Scrollable = () => {
    document.querySelector("body")?.classList.remove("fixed-layout");
    document.querySelector("body")?.classList.add("scrollable-layout");
  };
  export const LightTheme = () => {
    document.querySelector("body")?.classList.add("light-mode");
    let mySwitch3 = document.querySelector("#myonoffswitch3") as HTMLInputElement
    mySwitch3.checked = true;
    let mySwitch4 =  document.querySelector("#myonoffswitch6") as HTMLInputElement
    mySwitch4.checked = true;
  
    document.querySelector("body")?.classList.remove("dark-mode");
    document.querySelector("body")?.classList.remove("dark-header");
    document.querySelector("body")?.classList.remove("color-header");
    document.querySelector("body")?.classList.remove("gradient-header");
    document.querySelector("body")?.classList.remove("dark-menu");
    document.querySelector("body")?.classList.remove("color-menu");
    document.querySelector("body")?.classList.remove("gradient-menu");
    interface HTMLElement extends Element {
      style: any;
    }
    let htmm = document.querySelector("html")  as HTMLElement
    htmm.style = "";
  
    localStorage.removeItem("dashticdark");
    localStorage.setItem("dashticlighttheme", 'true');
    localStorage.removeItem("")
  
  };
  export const dark = () => {
    document.querySelector("body")?.classList.add("dark-mode");
    let mySwitch  = document.querySelector("#myonoffswitch8") as HTMLInputElement
    mySwitch.checked = true;
    let mySwitch1 = document.querySelector("#myonoffswitch5") as HTMLInputElement
    mySwitch1.checked = true;
  
    document.querySelector("body")?.classList.remove("light-mode");
    document.querySelector("body")?.classList.remove("light-header");
    document.querySelector("body")?.classList.remove("color-header");
    document.querySelector("body")?.classList.remove("gradient-header");
    document.querySelector("body")?.classList.remove("light-menu");
    document.querySelector("body")?.classList.remove("color-menu");
    document.querySelector("body")?.classList.remove("gradient-menu");
    interface HTMLElement extends Element {
      style: any;
    }
    let htm = document.querySelector("html") as HTMLElement
    htm.style = "";
    localStorage.removeItem("dashticlighttheme");
    localStorage.setItem("dashticdark", 'true');
  
  };
  // layout
  export const VerticalMenu = () => {
    document.querySelector("body")?.classList.add("sidebar-mini");
    document.querySelector(".app-header")?.classList.add("side-header");
    document.querySelector(".main-content")?.classList.add("app-content");
    document.querySelector(".main-container")?.classList.add("container-fluid");
    document.querySelector(".side-app")?.classList.remove("container");
    document.querySelector("body")?.classList.remove("horizontal");
  
    document.querySelector("body")?.classList.remove("horizontal-hover");
    document.querySelector(".app-sidebar")?.classList.remove("horizontal-main");
    document.querySelector(".app-header")?.classList.remove("hor-header");
    document.querySelector(".main-sidemenu")?.classList.remove("container");
    document.querySelector(".main-container")?.classList.remove("container");
    document.querySelector(".main-content")?.classList.remove("horizontal-content");
    localStorage.setItem("dashticvertical", 'true');
    localStorage.removeItem("dashtichorizontal");
    localStorage.removeItem("dashtichorizontalHover");
  
  };
  export const horizontal = () => {
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
    let horizontal = document.querySelector(".horizontal .side-menu")  as HTMLInputElement
    horizontal.style.flexWrap = "nowrap";
    checkHoriMenu();
    // Horizontalmenudefultclose();
    switcherArrowFn();
  
    localStorage.removeItem("dashticvertical");
    localStorage.setItem("dashtichorizontal", 'true');
    localStorage.removeItem("dashtichorizontalHover");
  }
  // };
  export const HorizontalHoverMenu = () => {
  
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
  
    document.querySelector(".horizontal-hover .side-menu")?.classList.add("flex-nowrap");
    interface HTMLElement extends HTMLInputElement {
      style: any;
    }
    let li = document.querySelectorAll(".side-menu li");
    li.forEach((e, i) => {
      
      if (e.classList.contains("is-expaned")) {
        let ele = [...e.children];
        ele.forEach((el:any) => {
          el.classList.remove("active");
          if (el.classList.contains("slide-menu")) {
            
            el.style = "";
            el.style.display = "none";
          }
        });
        e.classList.remove("is-expaned");
      }
    });
    checkHoriMenu();
    // Horizontalmenudefultclose();
    switcherArrowFn();
  
    localStorage.removeItem("dashticvertical");
    localStorage.setItem("dashtichorizontalHover", 'true');
    localStorage.removeItem("dashtichorizontal");
  };
  export function checkHoriMenu() {
    interface HTMLElement extends HTMLInputElement {
      style: any;
    }
    let menuWidth = document.querySelector(".horizontal-main") as HTMLElement;
    let menuItems = document.querySelector(".side-menu") as HTMLElement;
    let mainSidemenuWidth = document.querySelector(".main-sidemenu") as HTMLElement;
    let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0]));
    let marginRightValue = Math.ceil(
      Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])
    );
    let check =
      menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;
  
    if (document.querySelector("body")?.classList.contains("ltr")) {
      menuItems.style.marginRight = 0;
    } else {
      menuItems.style.marginLeft = 0;
    }
  
    if (menuItems.scrollWidth - 2 < menuWidth?.offsetWidth - menuContainerWidth) {
      document.querySelector(".slide-left")?.classList.add("d-none");
      document.querySelector(".slide-right")?.classList.add("d-none");
      document.querySelector(".slide-leftRTL")?.classList.add("d-none");
      document.querySelector(".slide-rightRTL")?.classList.add("d-none");
    } else if (marginLeftValue !== 0 || marginRightValue !== 0) {
      document.querySelector(".slide-right")?.classList.remove("d-none");
      document.querySelector(".slide-rightRTL")?.classList.remove("d-none");
    } else if (marginLeftValue !== -check || marginRightValue !== -check) {
      document.querySelector(".slide-left")?.classList.remove("d-none");
      document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
    }
    if (menuItems.scrollWidth - 2 > menuWidth?.offsetWidth - menuContainerWidth) {
      document.querySelector(".slide-left")?.classList.remove("d-none");
      document.querySelector(".slide-right")?.classList.remove("d-none");
      document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
      document.querySelector(".slide-rightRTL")?.classList.remove("d-none");
    }
    if (marginLeftValue === 0 || marginRightValue === 0) {
      document.querySelector(".slide-left")?.classList.add("d-none");
      document.querySelector(".slide-leftRTL")?.classList.add("d-none");
    }
    if (marginLeftValue !== 0 || marginRightValue !== 0) {
      document.querySelector(".slide-left")?.classList.remove("d-none");
      document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
    }
  }
  export function switcherArrowFn() {
    let slideLeft = document.querySelector(".slide-left") as HTMLInputElement;
    let slideRight = document.querySelector(".slide-right") as HTMLInputElement;
    // used to remove is-expanded class and remove class on clicking arrow buttons
    function slideClick() {
      let slide = document.querySelectorAll(".slide");
      let sideMenuitem = document.querySelectorAll(".slide-menu__item");
      let slideMenu = document.querySelectorAll(".slide-menu");
      slide.forEach((element, _index) => {
        if (element.classList.contains("is-expanded") === true) {
          element.classList.remove("is-expanded");
        }
      });
      sideMenuitem.forEach((element, _index) => {
        if (element.classList.contains("active") === true) {
          element.classList.remove("active");
        }
      });
      slideMenu.forEach((element:any, _index) => {
        if (element) {
          element.style.display = "none";
        }
      });
    }
    // horizontal arrows
    window.addEventListener("resize", () => {
      
      interface HTMLElement extends Element {
        style: any;
        offsetWidth: number;
      }

      let menuWidth = document.querySelector(".horizontal-main") as HTMLElement;
      let menuItems = document.querySelector(".side-menu") as HTMLElement;
      let mainSidemenuWidth = document.querySelector(".main-sidemenu") as HTMLElement;
      let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
      let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0]));
      let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0]));
      let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;
  
      if (menuWidth?.offsetWidth - menuContainerWidth > menuItems.scrollWidth) {
        document.querySelector(".slide-left")?.classList.add("d-none");
        document.querySelector(".slide-right")?.classList.add("d-none");
        menuItems.style.marginRight = 0;
        menuItems.style.marginLeft = 0;
  
      }
      else {
        document.querySelector(".slide-right")?.classList.remove("d-none");
      }
  
      if (document.querySelector("html")?.getAttribute("dir") === "rtl") {
        if ((Math.abs(marginRightValue) < Math.abs(check)) === false && (menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth)
        ) {
          menuItems.style.marginRight = -check + 'px';
          document.querySelector(".slide-left")?.classList.remove("d-none");
        } else {
          menuItems.style.marginRight = 0;
        }
      } else {
        if (
          (Math.abs(marginLeftValue) < Math.abs(check)) === false &&
          (menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth)
        ) {
          menuItems.style.marginLeft = -check + 'px';
          document.querySelector(".slide-right")?.classList.add("d-none");
        } else {
          menuItems.style.marginLeft = 0;
        }
      }
    });
  
    if (
      !document.querySelector("body")?.classList.contains("login-img") &&
      !document.querySelector("body")?.classList.contains("error-bg")
    ) {
      checkHoriMenu();
    }
  
    slideLeft.addEventListener("click", () => {
      slideClick();
      interface HTMLElement extends Element {
        style: any;
        offsetWidth: number;
      }
      let menuWidth = document.querySelector(".horizontal-main") as HTMLElement;
      let menuItems = document.querySelector(".side-menu") as HTMLElement;
      let mainSidemenuWidth = document.querySelector(".main-sidemenu") as HTMLElement;
      let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
      let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])) + 100;
      let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])) + 100;
  
      if (document.querySelector('html')?.getAttribute('dir') === "rtl") {
        if (marginRightValue < 0) {
          menuItems.style.marginLeft = "0px";
          menuItems.style.marginRight = Number(menuItems.style.marginRight.split("px")[0]) + 100 + "px";
          document.querySelector(".slide-right")?.classList.remove("d-none");
          document.querySelector(".slide-left")?.classList.remove("d-none");
        } else {
          document.querySelector(".slide-left")?.classList.add("d-none");
        }
  
        if (marginRightValue >= 0) {
          menuItems.style.marginLeft = "0px";
          menuItems.style.marginRight = "0px";
        }
        // to remove dropdown when clicking arrows in horizontal menu
        let subNavSub = document.querySelectorAll(".sub-nav-sub") ;
        subNavSub.forEach((e:any) => {
          e.style.display = "";
        });
        let subNav = document.querySelectorAll(".nav-sub");
        subNav.forEach((e:any) => {
          e.style.display = "";
        });
      }
      else {
        if (marginLeftValue < 0) {
          menuItems.style.marginLeft = Number(menuItems.style.marginLeft.split("px")[0]) + 100 + "px";
          if (menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth) {
            document.querySelector(".slide-left")?.classList.remove("d-none");
            document.querySelector(".slide-right")?.classList.remove("d-none");
          }
        }
        else {
          document.querySelector(".slide-left")?.classList.add("d-none");
        }
  
        if (marginLeftValue >= 0) {
          menuItems.style.marginLeft = "0px";
          if (menuWidth?.offsetWidth < menuItems.scrollWidth) {
            document.querySelector(".slide-left")?.classList.add("d-none");
          }
        }
  
        // to remove dropdown when clicking arrows in horizontal menu
        let subNavSub = document.querySelectorAll(".sub-nav-sub");
        subNavSub.forEach((e:any) => {
          e.style.display = "";
        });
        let subNav = document.querySelectorAll(".nav-sub");
        subNav.forEach((e:any) => {
          e.style.display = "";
        });
      }
    });
    slideRight.addEventListener("click", () => {
      slideClick();
      interface HTMLElement extends Element {
        style: any;
        offsetWidth: number;
      }
      let menuWidth = document.querySelector(".horizontal-main") as HTMLElement;
      let menuItems = document.querySelector(".side-menu") as HTMLElement;
      let mainSidemenuWidth = document.querySelector(".main-sidemenu") as HTMLElement;
      let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
      let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])) - 100;
      let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])) - 100;
      let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;
  
      if (document.querySelector('html')?.getAttribute('dir') === "rtl") {
        if (marginRightValue > -check) {
          menuItems.style.marginLeft = "0px";
          menuItems.style.marginRight =
            Number(menuItems.style.marginRight.split("px")[0]) - 100 + "px";
        } else {
          menuItems.style.marginLeft = "0px";
          menuItems.style.marginRight = -check + "px";
          document.querySelector(".slide-right")?.classList.add("d-none");
          document.querySelector(".slide-left")?.classList.remove("d-none");
        }
  
        if (marginRightValue !== 0) {
          document.querySelector(".slide-left")?.classList.remove("d-none");
        }
        // to remove dropdown when clicking arrows in horizontal menu
        let subNavSub = document.querySelectorAll(".sub-nav-sub");
        subNavSub.forEach((e:any) => {
          e.style.display = "";
        });
        let subNav = document.querySelectorAll(".nav-sub");
        subNav.forEach((e:any) => {
          e.style.display = "";
        });
      }
      else {
        if (marginLeftValue > -check) {
          // menuItems.style.marginRight = 0;
          menuItems.style.marginLeft =
            Number(menuItems.style.marginLeft.split("px")[0]) - 100 + "px";
        } else {
          // menuItems.style.marginRight = 0;
          menuItems.style.marginLeft = -check + "px";
          document.querySelector(".slide-right")?.classList.add("d-none");
        }
        if (marginLeftValue !== 0) {
          document.querySelector(".slide-left")?.classList.remove("d-none");
        }
        // to remove dropdown when clicking arrows in horizontal menu
        let subNavSub = document.querySelectorAll(".sub-nav-sub");
        subNavSub.forEach((e:any) => {
          e.style.display = "";
        });
        let subNav = document.querySelectorAll(".nav-sub");
        subNav.forEach((e:any) => {
          e.style.display = "";
        });
        //
      }
    });
  }
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
      let steel = document.getElementById("style") as Element;
      if(steel){
        steel.setAttribute("href","")
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
      let hori = document.querySelector(".horizontal .side-menu") as HTMLInputElement
      hori.style.flexWrap = "nowrap";
      let mySwitch8 = document.querySelector("#myonoffswitch35") as HTMLInputElement
      mySwitch8.checked = true;  
      checkHoriMenu();
    //   Horizontalmenudefultclose();
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
      li.forEach((e, i) => {
        if (e.classList.contains("is-expaned")) {
          let ele = [...e.children];
          ele.forEach((el:any) => {
            el.classList.remove("active");
            if (el.classList.contains("slide-menu")) {
              el.style = "";
              el.style.display = "none";
            }
          });
          e.classList.remove("is-expaned");
        }
      });
      checkHoriMenu();
    //   Horizontalmenudefultclose();
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
    if(localStorage.DashticBGswitcher){
      const dynamicBackgroundColor : NodeListOf<Element> = document.querySelectorAll(
        "input.background-primary-light"
    );

    dynamicBgTransparentBackground(
        dynamicBackgroundColor,
        localStorage.DashticBGswitcher
    );
    }
    if(localStorage.dashticPrimaryColor){
          const dynamicPrimaryLight = document.querySelectorAll(
            "input.color-primary-light"
        );
          dynamicLightPrimaryColor(dynamicPrimaryLight, localStorage.dashticprimaryBorderColor)
    }
  }
 
  export function handleThemeUpdate(cssVars: any) {
    interface HTMLElement extends Element {
      style: any;
    }
    const root = document.querySelector(":root") as HTMLElement;
    const keys = Object.keys(cssVars);
  
    keys.forEach((key) => {
      root.style.setProperty(key, cssVars[key]);
    });
  }

  const hex2rgb = (hex:String) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return [ r, g, b ]
}
  
  export function dynamicLightPrimaryColor(primaryColor:NodeListOf<Element>, color:string) {

    primaryColor.forEach((item:Element) => {
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
      const cssPropName1  = `--dark-${item.getAttribute("data-id3")}`;
      const cssPropName2  = `--dark-${item.getAttribute("data-id4")}`;
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

    let data2 = document.querySelector("#myonoffswitch11")  as HTMLInputElement
    data2.checked = true;   //fixed
    let data3 = document.querySelector("#myonoffswitch3")  as HTMLInputElement
    data3.checked = true;    //lightmenu
    let data4 = document.querySelector("#myonoffswitch6")  as HTMLInputElement
    data4.checked = true;    //lightheader
    let data5 = document.querySelector("#myonoffswitch9")  as HTMLInputElement
    data5.checked = true;    //fullwidth
    let data6 = document.querySelector("#myonoffswitch54")  as HTMLInputElement
    data6.checked = true;  //Ltr
    let data7 = document.querySelector("#myonoffswitch34")  as HTMLInputElement
    data7.checked = true;  //Vertail
    let data8 = document.querySelector("#myonoffswitch111")  as HTMLInputElement
    data8.checked = false;
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

  export const Sidenavtoggled =()=>{
document.querySelector("body")?.classList.add("sidenav-toggled");
  }

  export const sidenavtoggledClosed =()=>{
    document.querySelector("body")?.classList.remove("sidenav-toggled");
      }
  export const horizontalmenusticky = () => {
    if (document.querySelector(".hor-header")) {
      if (window.scrollY > 30) {
        document.querySelector(".hor-header")?.classList.add("fixed-header", "visible-title");
          
          
        let Scolls = document.querySelectorAll(".sticky");
        Scolls.forEach((e) => {
          e.classList.add("sticky-pin");
        });
      } else {
        document.querySelector(".hor-header")?.classList.remove("fixed-header", "visible-title");
        let Scolls = document.querySelectorAll(".sticky");
        Scolls.forEach((e) => {
          e.classList.remove("sticky-pin");
        });
      }
    }
  };
  
  window.addEventListener("scroll", horizontalmenusticky);