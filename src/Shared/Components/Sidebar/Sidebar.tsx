
import React, { Fragment, useState, useEffect } from "react";
import { menu, MENUITEMS } from "./SideMenu";
1
import SimpleBar from 'simplebar-react';
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import image from "../../../assets/images/brand/favicon1.png"
import images from "../../../assets/images/brand/favicon.png"
import logo from "../../../assets/images/brand/logo1.png"
import logos from "../../../assets/images/brand/logo.png"
import user from "../../../assets/images/users/16.jpg"
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown, DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import ProfileService from "../../Prism/profile";
import EditProfileService from "../../Prism/editprofile";


let history: string[] = [];
const Sidebar = () => {
  let location = useLocation();
  const [menuitems, setMenuitems] = useState(MENUITEMS);
  const [outPut, setoutPut] = useState(EditProfileService.returnId());
  // initial loading
  useEffect(() => {

    history.push(location.pathname);  // add  history to history  stack for current location.pathname to prevent multiple history calls innerWidth  and innerWidth  calls from  multiple users. This is important because the history stack is not always empty when the user clicks  the history       
    if (history.length > 2) {
      history.shift();
    }
    if (history[0] !== history[1]) {
      setSidemenu();
    }
    let mainContent = document.querySelector('.main-content') as HTMLElement

    //when we click on the body to remove
    mainContent.addEventListener('click', mainContentClickFn);
    return () => {
      mainContent.removeEventListener('click', mainContentClickFn);
    }
  }, [location.pathname])

  // location
  useEffect(() => {
    if (document.body.classList.contains('horizontal') && window.innerWidth >= 992) {
      clearMenuActive();
    }
  }, []);

  //  In Horizontal When we click the body it should we Closed using in useEfffect Refer line No:16
  function mainContentClickFn() {
    if (document.body.classList.contains('horizontal') && window.innerWidth >= 992) {
      clearMenuActive();
    }
  }
  //<-------End---->
  function setSidemenu() {
    if (menuitems) {
      menuitems.filter((mainlevel) => {
        if (mainlevel.Items) {
          mainlevel.Items.filter((items) => {
            items.active = false;
            items.selected = false;
            if (location.pathname === '/dashtic/preview' || location.pathname === '/dashtic/preview/') {
              location.pathname = '/dashboard/dashboard01/';
            }
            if (location.pathname === items.path + '/') {
              items.active = true;
              items.selected = true;
            }
            if (items.children) {
              items.children.filter((submenu) => {
                submenu.active = false;
                submenu.selected = false;
                if (location.pathname === submenu.path + '/') {
                  items.active = true;
                  items.selected = true;
                  submenu.active = true;
                  submenu.selected = true;
                }
                if (submenu.children) {
                  submenu.children.filter((submenu1) => {
                    submenu1.active = false;
                    submenu1.selected = false;
                    if (location.pathname === submenu1.path + '/') {
                      items.active = true;
                      items.selected = true;
                      submenu.active = true;
                      submenu.selected = true;
                      submenu1.active = true;
                      submenu1.selected = true;
                    }
                    return submenu1;
                  })
                }
                return submenu;
              })
            }
            return items;
          })
        }
        setMenuitems((arr) => [...arr]);
        return mainlevel;
      })
    }
  }


  function toggleSidemenu(item: any) {

    if (
      !document.body.classList.contains("horizontalmenu-hover") ||
      window.innerWidth < 992
    ) {
      // To show/hide the menu
      if (!item.active) {
        menuitems.filter((mainlevel) => {
          if (mainlevel.Items) {
            mainlevel.Items.filter((sublevel) => {
              sublevel.active = false;
              if (item === sublevel) {
                sublevel.active = true;
              }
              if (sublevel.children) {
                sublevel.children.filter((sublevel1) => {
                  sublevel1.active = false;
                  if (item === sublevel1) {
                    sublevel.active = true;
                    sublevel1.active = true;
                  }
                  if (sublevel1.children) {
                    sublevel1.children.filter((sublevel2) => {
                      sublevel2.active = false;
                      if (item === sublevel2) {
                        sublevel.active = true;
                        sublevel1.active = true;
                        sublevel2.active = true;
                      }
                      if (sublevel2.children) {
                        sublevel2.children.filter((sublevel3) => {
                          sublevel3.active = false;
                          if (item === sublevel3) {
                            sublevel.active = true;
                            sublevel1.active = true;
                            sublevel2.active = true;
                            sublevel3.active = true;
                          }
                          return sublevel2;
                        })
                      }
                      return sublevel2;
                    })
                  }
                  return sublevel1;
                })
              }
              return sublevel;
            })
          }
          return mainlevel;
        })
      }
      else {
        item.active = !item.active;
      }
    }

    setMenuitems((arr) => [...arr]);
  }
  function clearMenuActive() {

    MENUITEMS.filter((mainlevel) => {
      if (mainlevel.Items) {
        mainlevel.Items.filter((sublevel) => {
          sublevel.active = false;
          if (sublevel.children) {
            sublevel.children.filter((sublevel1) => {
              sublevel1.active = false;
              if (sublevel1.children) {
                sublevel1.children.filter((sublevel2) => {
                  sublevel2.active = false;
                  if (sublevel2.children) {
                    sublevel2.children.filter((sublevel3) => {
                      sublevel3.active = false;
                      return sublevel3;
                    })
                  }
                  return sublevel2;
                })
              }
              return sublevel1;
            })
          }
          return sublevel;
        })
      }
      return mainlevel;
    })
    setMenuitems((arr) => [...arr]);
  }
  //Hover effect
  function Onhover() {
    if (document.querySelector(".app")) {
      if (document.querySelector(".app")?.classList.contains("sidenav-toggled"))
        document.querySelector(".app")?.classList.add("sidenav-toggled-open");
    }
  }
  function Outhover() {
    if (document.querySelector(".app")) {
      document.querySelector(".app")?.classList.remove("sidenav-toggled-open");
    }
  }
  const [faces6, setfaces6] = useState(user);

  useEffect(() => {
    if (ProfileService.returnImage() != undefined) {
      setfaces6(ProfileService.returnImage())
    }
    setoutPut(EditProfileService.returnId());
  }, [location])

  return (
    <div className="sticky">
      <aside className="app-sidebar sidebar-scroll" onMouseOver={() => Onhover()}
        onMouseOut={() => Outhover()}>

        <div className="main-sidebar-header active">
          <Link className="desktop-logo logo-light active" to={`${import.meta.env.BASE_URL}dashboard/dashboard01`}>
            {/*  <img src={logos} className="main-logo" alt="logo" /> */}
            <div className="d-flex justify-content-center align-items-center user-info text-center">
             {/*  <h4 className="page-title">JADAL XYZ</h4> */}
            </div>
          </Link>
          <Link className="desktop-logo logo-dark active" to={`${import.meta.env.BASE_URL}dashboard/dashboard01`}>
            {/*   <img src={logo} className="main-logo" alt="logo" /> */}
            <div className="d-flex justify-content-center align-items-center user-info text-center">
             {/*  <h4 className="page-title">JADAL XYZ</h4> */}
            </div>
          </Link>
          <Link className="logo-icon mobile-logo icon-light active" to={`${import.meta.env.BASE_URL}dashboard/dashboard01`}>
            <img src={images} alt="logo" />
          </Link>
          <Link className="logo-icon mobile-logo icon-dark active" to={`${import.meta.env.BASE_URL}dashboard/dashboard01`}>
            <img src={image} alt="logo" />
          </Link>
        </div>
        <SimpleBar className="sidebar-menuscroll">
          <div className="main-sidemenu is-expanded">
            <div className="app-sidebar__user">
              <div className="dropdown user-pro-body text-center">
                <div className="user-pic">
                  <img alt="user-img" className="avatar avatar-xl brround mb-1" src={faces6} />
                </div>
                <div className="user-info text-center">
                  <h5 className=" mb-1 font-weight-bold">{outPut.firstName == undefined ? "Usuario" : outPut.firstName} {outPut.lastName == undefined ? "Test" : outPut.lastName}</h5>
                  <span className="text-muted app-sidebar__user-name text-sm">{outPut.role == undefined ? "ADMIN" : outPut.role}</span>
                </div>
              </div>
            </div>
            <div className="slide-left disabled" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" /></svg></div>

            <ul className="side-menu open">
              {menuitems.map((Item, itemi) => (
                <Fragment key={itemi + Math.random() * 100}>
                  {Item.Items?.map((menuItem, i) => (
                    <li className={`slide ${menuItem.selected ? "is-expanded" : ""}  ${menuItem.active ? "is-expanded" : ""}`} key={i}>
                      {menuItem.type === "link" ? (
                        <NavLink to={menuItem.path + "/"} className={`side-menu__item ${menuItem.selected ? " active" : ""}`}
                        >
                          {menuItem.icon}
                          <span className="side-menu__label">
                            {menuItem.title}
                          </span>
                          {menuItem.badge ? (
                            <label className={menuItem.badge}>
                              {menuItem.badgetxt}
                            </label>
                          ) : (
                            ""
                          )}
                        </NavLink>
                      ) : (
                        ""
                      )}
                      {menuItem.type === "sub" ? (
                        <a href="javascript" onClick={(event) => {
                          event.preventDefault();
                          toggleSidemenu(menuItem);
                        }} className={`side-menu__item ${menuItem.selected ? "active is-expanded" : ""}`}>
                          {menuItem.icon}
                          <span className="side-menu__label">{menuItem.title}{menuItem.active}</span>
                          <i className="angle fe fe-chevron-right"></i>
                        </a>
                      ) : (
                        ""
                      )}

                      {menuItem.children ? (
                        <ul className={`slide-menu ${menuItem.active ? "open" : ""}`}
                          style={
                            menuItem.active
                              ? { display: "block" }
                              : { display: "none" }
                          }>
                          {menuItem.children.map((childrenItem, index) => {
                            return (
                              <li key={index} className={`sub-slide ${childrenItem.selected ? "is-expanded" : ""} ${childrenItem.active ? "is-expanded" : ""}`}>
                                {childrenItem.type === "sub" ? (
                                  <a href="javascript"
                                    className={`slide-item ${childrenItem.selected ? "active is-expanded" : ""}`}
                                    onClick={(event) => { event.preventDefault(); toggleSidemenu(childrenItem); }}
                                  >
                                    {childrenItem.title}{childrenItem.active}

                                    <i className="sub-angle fe fe-chevron-right"></i>
                                  </a>
                                ) : (
                                  ""
                                )}
                                {childrenItem.type === "link" ? (

                                  <NavLink
                                    to={childrenItem.path + "/"}
                                    className="slide-item"
                                  >
                                    {childrenItem.title}{childrenItem.active}
                                  </NavLink>

                                ) : (
                                  ""
                                )}
                                {childrenItem.children ? (
                                  <ul className={`sub-slide-menu ${childrenItem.selected ? "open" : ""}`}
                                    style={
                                      childrenItem.active
                                        ? { display: "block" }
                                        : { display: "none" }
                                    }>
                                    {childrenItem.children.map(
                                      (childrenSubItem, key) => (
                                        <li key={key}>
                                          {childrenSubItem.type === "link" ? (
                                            <NavLink
                                              to={childrenSubItem.path + "/"}
                                              className="sub-slide-item"
                                            >
                                              {childrenSubItem.title}{childrenSubItem.active}
                                            </NavLink>
                                          ) : (
                                            ""
                                          )}
                                          {childrenSubItem.type === "sub" ? (
                                            <li className={`sub-slide2 ${childrenSubItem.selected ? "is-expanded" : ""} ${childrenSubItem.active ? "is-expanded" : ""}`}>
                                              <NavLink
                                                to="#"
                                                className="sub-slide-item"
                                                onClick={(event) => {
                                                  event.preventDefault();
                                                  toggleSidemenu(childrenSubItem)
                                                }}
                                              >

                                                {childrenSubItem.title}{childrenSubItem.active}

                                                <i className="sub-angle2 fe fe-chevron-down"></i>
                                              </NavLink>
                                              {childrenItem.children?.map(
                                                (childrenSubItemsub, key) => (
                                                  <ul key={key} className={`sub-slide-menu1 ${childrenSubItemsub.selected ? "open" : ""}`}
                                                    style={
                                                      childrenSubItemsub.active
                                                        ? { display: "block" }
                                                        : { display: "none" }
                                                    }
                                                  >
                                                    {childrenItem.children?.map(
                                                      (childrenSubItemsubs, key) => (
                                                        <li key={key}>
                                                          <NavLink className="sub-slide-item2" to="#">{childrenSubItemsubs.title}{childrenSubItemsubs.active}</NavLink>
                                                        </li>
                                                      )
                                                    )}
                                                  </ul>
                                                )
                                              )}
                                            </li>
                                          ) : (
                                            ""
                                          )}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                ) : (
                                  ""
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                  ))}
                </Fragment>
              ))}
            </ul>
            <div className="app-sidebar-help">
              <UncontrolledDropdown className="dropdown text-center">
                <div className="help d-flex">
                  <DropdownToggle color="" className="nav-link p-0 help-dropdown" tag="a" data-bs-toggle="dropdown">
                    <span className="font-weight-bold">Soporte</span> <i className="fa fa-angle-down ms-2"></i>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-end dropdown-menu-arrow p-4">
                    <div className="sidebar-dropdown-divider pb-3">
                      <h4 className="font-weight-bold">Help</h4>
                      <DropdownItem className="d-block" href="#">Knowledge base</DropdownItem>
                      <DropdownItem className="d-block" href="#">Contact@info.com</DropdownItem>
                      <DropdownItem className="d-block" href="#">88 8888 8888</DropdownItem>
                    </div>
                    <div className="sidebar-dropdown-divider pb-3 pt-3 mb-3">
                      <p className="mb-1">Your Fax Number</p>
                      <DropdownItem className="font-weight-bold" href="#">88 8888 8888</DropdownItem>
                    </div>
                    <Link to={`${import.meta.env.BASE_URL}account/login/login01`}>Logout</Link>
                  </DropdownMenu>
                  <div className="ms-auto">
                    <a className="nav-link icon p-0" href="#">
                     {/*  <svg className="header-icon" x="1008" y="1248" viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false"><path opacity=".3" d="M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5z"></path><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-2 6H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 013.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 013.54 6.42z"></path></svg>
                      <span className="pulse "></span> */}
                    </a>
                  </div>
                </div>
              </UncontrolledDropdown>
            </div>
            <div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" /></svg></div>

          </div>
        </SimpleBar>
      </aside>
    </div>
  );
}

Sidebar.propTypes = {};

Sidebar.defaultProps = {};
export default Sidebar;




