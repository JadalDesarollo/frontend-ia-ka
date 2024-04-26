import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'

export const Footer = () => {
    return (
        <Fragment>
            <footer className="footer">
                <div className="container">
                    <Row className="align-items-center flex-row-reverse">
                        <Col md="12"sm="12" className=" mt-3 mt-lg-0 text-center">
                            Copyright © 2023 <Link to="#" className="text-primary">Dashtic</Link>. Designed with <span className="fa fa-heart text-danger"></span> by <Link to="#"> Spruko </Link> All rights reserved.
                        </Col>
                    </Row>
                </div>
            </footer>
        </Fragment>
    )
}
