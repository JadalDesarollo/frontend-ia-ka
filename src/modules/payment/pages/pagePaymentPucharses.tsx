import React, { useEffect, useState } from "react";
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Label, Input, Button, Alert } from "reactstrap";
import { PageHeaderstyle } from "../../../Shared/Prism/Prism";
import { WizardForm } from "./validation";


const PagePaymentControl = () => {

    return (
        <div>
            <PageHeaderstyle title="Hola, soy tu asistente que te ayudará con evaluar el nivel de riesgo que puede tener tu corazon en sufrir alguna enfermedad. Ayudame respondiendo esta serie de preguntas..." home="titulo" Pages="predicción" />
            <div>
                <Row>
                    <Col lg="12" xl="12" md="12" sm="12">
                        <Card style={{
                            maxWidth: "50rem",
                            display:"flex",
                            margin:"auto"
                        }}>
                            {/* <CardHeader>
                                <CardTitle tag="h4">test</CardTitle>
                            </CardHeader> */}
                            <CardBody>
                                <WizardForm />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
PagePaymentControl.propTypes = {};
PagePaymentControl.defaultProps = {};

export default PagePaymentControl;
