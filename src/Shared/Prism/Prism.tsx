import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Breadcrumb, BreadcrumbItem, Input, Modal, Button, ModalHeader, Label, ModalBody, Form, Row, Col, ModalFooter, Dropdown, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle } from "reactstrap";
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import { useAuthContext } from '../../Auth/context/authContext';

export const PageHeader = (props: any) => {
  const { auth, checkToken, logout, loginSucess } = useAuthContext();
  const [dropdownOpen, setDropdownOpen] = useState<any>(false);

  const selectopen = () => setDropdownOpen((prevState: any) => !prevState);
  const [state, setState] = useState<any>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);
  return (
    <div className="page-header">
      <div className="page-leftheader">
        <h4 className="page-title">{props.title}</h4>
      </div>
      <div className="page-rightheader ms-auto d-lg-flex d-none">
        <div className="ms-5 mb-0">
          <span className="btn btn-white date-range-btn" id="daterange-btn">
            <svg className="header-icon2 me-3" x="1008" y="1248" viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
              <path d="M5 8h14V6H5z" opacity=".3" /><path d="M7 11h2v2H7zm12-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-4 3h2v2h-2zm-4 0h2v2h-2z" />
            </svg>
            <Dropdown tag="span" isOpen={dropdownOpen} toggle={selectopen}>
              <DropdownToggle tag="span" caret>{props.date}{' '}</DropdownToggle>
              <DropdownMenu className='mt-3'>
              <DateRangePicker
                    className="dashboard-select"
                    onChange={item => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    months={1}
                    ranges={state}
                    direction="horizontal"
                  />
              </DropdownMenu>
            </Dropdown>
          </span>
        </div>
      </div>
    </div>
  );
}
export const PageHeaders = (props: any) => {
  return (
    <div className="page-header">
      <div className="page-leftheader">
        <h4 className="page-title">{props.title}</h4>
      </div>
      <div className="page-rightheader ms-auto d-lg-flex d-none">
        <Breadcrumb>
          <BreadcrumbItem className="d-flex">
            <a href="#">
              <svg
                className="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z" />
                <path d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z" opacity=".3" />
              </svg>
              <span className="breadcrumb-icon">{props.home}</span>
            </a>
          </BreadcrumbItem>
          <BreadcrumbItem ><a href="#">{props.name}</a>
          </BreadcrumbItem>
          <BreadcrumbItem active aria-current="page">
            {props.fonticonsname}
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  )
}
export const PageHeaderstyle = (props: any) => {
  return (
    <div className="page-header" >
      <div className="page-leftheader"
      style={{
        margin:"auto",
        maxWidth:"50rem",
    
      }}
      >
        <h4 className="page-title "
        style={
          {
           
            fontSize:"1.4rem",
           
          }
        }>{props.title}</h4>
      </div>
      {/* <div className="page-rightheader ms-auto d-lg-flex d-none">
        <Breadcrumb tag="ol" className="">
          <BreadcrumbItem tag="li" className=""><a href="#" className="d-flex"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z" /><path d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z" opacity=".3" /></svg><span className="breadcrumb-icon"> {props.home}</span></a></BreadcrumbItem>
          <BreadcrumbItem tag="li" className=""><a href="#">{props.Pages}</a></BreadcrumbItem>
          <BreadcrumbItem tag="li" className=""><a href="#">{props.elements}</a></BreadcrumbItem>
          <BreadcrumbItem tag="li" className=" " active aria-current="page">{props.name}</BreadcrumbItem>
        </Breadcrumb>
      </div> */}
    </div>
  )
}
export function Modaluser(args: any) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        <i className="fe fe-plus"></i> Add New User
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args} size="lg">
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <div className="py-1">
            <Form className="form" noValidate>
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label>Full Name</Label>
                        <Input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="John Smith"
                          defaultValue="John Smith"
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="mb-3">
                        <Label>Username</Label>
                        <Input
                          className="form-control"
                          type="text"
                          name="username"
                          placeholder="johnny.s"
                          defaultValue="johnny.s"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label>Email</Label>
                        <Input
                          className="form-control"
                          type="text"
                          placeholder="user@example.com"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mb-3">
                      <div className="mb-3">
                        <Label>About</Label>
                        <textarea
                          className="form-control"
                          rows={5}
                          placeholder="My Bio"
                        ></textarea>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col sm={6} className="col-12  mb-3">
                  <div className="mb-2">
                    <b>Change Password</b>
                  </div>
                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label>Current Password</Label>
                        <Input
                          className="form-control"
                          type="password"
                          placeholder="••••••"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label>New Password</Label>
                        <Input
                          className="form-control"
                          type="password"
                          placeholder="••••••"
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="mb-3">
                        <Label>
                          Confirm{" "}
                          <span className="d-none d-xl-inline">Password</span>
                        </Label>
                        <Input
                          className="form-control"
                          type="password"
                          placeholder="••••••"
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col sm={5} className="col-12 offset-sm-1 mb-3">
                  <div className="mb-2">
                    <b>Keeping in Touch</b>
                  </div>
                  <Row>
                    <Col>
                      <Label>Email Notifications</Label>
                      <div className="custom-controls-stacked px-2">
                        <div className="custom-control custom-checkbox">
                          <Input
                            type="checkbox"
                            className="custom-control-input"
                            id="notifications-blog"
                            defaultChecked
                          />
                          <Label
                            className="custom-control-label"
                            htmlFor="notifications-blog"
                          >
                            Blog posts
                          </Label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <Input
                            type="checkbox"
                            className="custom-control-input"
                            id="notifications-news"
                            defaultChecked
                          />
                          <Label
                            className="custom-control-label"
                            htmlFor="notifications-news"
                          >
                            Newsletter
                          </Label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <Input
                            type="checkbox"
                            className="custom-control-input"
                            id="notifications-offers"
                            defaultChecked
                          />
                          <Label
                            className="custom-control-label"
                            htmlFor="notifications-offers"
                          >
                            Personal Offers
                          </Label>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Row>
            <Col className="d-flex justify-content-end">
              <Button color="" className="btn btn-primary" onClick={toggle}>
                Save Changes
              </Button>
            </Col>
          </Row>
        </ModalFooter>
      </Modal>
    </div>
  );
}