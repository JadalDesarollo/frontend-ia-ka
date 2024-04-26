import React, { useEffect } from 'react'
import { Button, Label, Row } from 'reactstrap';
import * as Switcherdata2 from "../../datas/Switcherdata/Switcherdata2";
import SimpleBar from 'simplebar-react';


const Custompagesswitcher = () => {
    useEffect(() => {
        Switcherdata2.localStorageBackUp();
        setFocusAfterClose(true)
    });
    function changePrimaryColor(value:string) {
        
        var userColor:string = value
        localStorage.setItem("dashticPrimaryColor", userColor);
        // to store value as opacity 0.95 we use 95
        localStorage.setItem("dashticprimaryHoverColor", userColor + 95);
        localStorage.setItem("dashticprimaryBorderColor", userColor);
        localStorage.setItem("dashticprimaryTransparent", userColor + 20);
        let html = document.querySelector("html")?.style;
        html?.setProperty(
            "--primary-bg-color",
            userColor
          );
          html?.setProperty(
            "--primary-bg-hover",
            userColor + 95
          );
          html?.setProperty(
            "--primary-bg-border",
            userColor
          );
    }
    function BgBackground(res:string) {
        var userColor:string = res
        document.querySelector("body")?.classList.add("dark-mode");
        document.querySelector("body")?.classList.remove("light-mode");
        localStorage.setItem("DashticcustomBGcolor", userColor);

        const dynamicBackgroundColor = document.querySelectorAll(
            "input.background-primary-light"
        );

        Switcherdata2.dynamicBgTransparentBackground(
            dynamicBackgroundColor,
            userColor
        );

        localStorage.removeItem("dashticlighttheme");
        localStorage.setItem("dashticdark", 'true');
    }

 
    return (
        <div>
            <div className="switcher-wrapper">
            <div className="demo_changer">
                <div className="form_holder sidebar-right1">
                    <SimpleBar style={{ height: '100%' }}>
                        <Row>
                            <div className="predefined_styles">
                                <div className="swichermainleft text-center">
                                    <div className="p-3 d-grid gap-2">
                                        <a href="https://react.spruko.com/dashtic-ts/" className="btn ripple btn-primary mt-0">View Demo</a>
                                        <a href="https://themeforest.net/item/dashtic-typescript-react-admin-dashboard-template/44937129" className="btn ripple btn-info">Buy Now</a>
                                        <a href="https://themeforest.net/user/spruko/portfolio" className="btn ripple btn-danger">Our Portfolio</a>
                                    </div>
                                </div>
                                <div className="swichermainleft text-center">
                                    <h4>LTR AND RTL VERSIONS</h4>
                                    <div className="skin-body">
                                        <div className="switch_section">
                                            <div className="switch-toggle d-flex mt-2">
                                                <span className="me-auto">LTR</span>
                                                <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch25" id="myonoffswitch54" className="onoffswitch2-checkbox" defaultChecked />
                                                    <Label htmlFor="myonoffswitch54" onClick={() => Switcherdata2.RtltoLtr()} className="onoffswitch2-label"></Label>
                                                </p>
                                            </div>
                                            <div className="switch-toggle d-flex mt-2">
                                                <span className="me-auto">RTL</span>
                                                <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch25" id="myonoffswitch55" className="onoffswitch2-checkbox" />
                                                    <Label htmlFor="myonoffswitch55" onClick={() => Switcherdata2.LtrtoRtl()} className="onoffswitch2-label"></Label>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swichermainleft">
                                    <h4>Theme Style</h4>
                                    <div className="skin-body">
                                        <div className="switch_section">
                                            <div className="switch-toggle d-flex">
                                                <span className="me-auto">Light Theme</span>
                                                <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch1" id="myonoffswitch1" className="onoffswitch2-checkbox" defaultChecked />
                                                    <Label htmlFor="myonoffswitch1" onClick={() => Switcherdata2.LightTheme()} className="onoffswitch2-label"></Label>
                                                </p>
                                            </div>
                                            <div className="switch-toggle d-flex mt-2">
                                                <span className="me-auto">Dark Theme</span>
                                                <p className="onoffswitch2 my-0"><input type="radio" name="onoffswitch1" id="myonoffswitch2" className="onoffswitch2-checkbox" />
                                                    <Label htmlFor="myonoffswitch2" onClick={() => Switcherdata2.dark()} className="onoffswitch2-label"></Label>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swichermainleft">
                                    <h4>Theme Primary Color</h4>
                                    <div className="skin-body">
                                        <div className="switch_section">
                                            <div className="switch-toggle d-flex">
                                                <span className="me-auto">Primary Color</span>
                                                <div className="">
                                                    <input className="input-color-picker color-primary-light"
                                                        defaultValue="#4454c3" id="colorID"
                                                        onChange={(e) => changePrimaryColor(e.target.value)}
                                                        type="color"
                                                        data-id="bg-color" data-id1="bg-hover" data-id2="bg-border" name="lightPrimary" />
                                                </div>
                                            </div>
                                            <div className="switch-toggle d-flex mt-2">
                                                <span className="me-auto">Background Color</span>
                                                <div className="">
                                                    <input className="input-bg-picker background-primary-light"
                                                        defaultValue="#373c56" id="bgID"
                                                        onChange={(res=>{BgBackground(res.target.value)})}
                                                        type="color" data-id3="body" data-id4="theme" name="BackgroundPrimary" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swichermainleft">
                                    <h4>Reset All Styles</h4>
                                    <div className="skin-body">
                                        <div className="switch_section my-4">
                                            <Button color="" className="btn btn-danger btn-block"
                                                onClick={() => {
                                                    localStorage.clear();
                                                    let htmm: any = document.querySelector('html')
                                                    htmm.style = '';
                                                    Switcherdata2.resetData()
                                                }}
                                                type="button">Reset All
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </SimpleBar>
                </div>
            </div>
        </div></div>
    )
}

export default Custompagesswitcher;

function setFocusAfterClose(arg0: boolean) {
  
}
