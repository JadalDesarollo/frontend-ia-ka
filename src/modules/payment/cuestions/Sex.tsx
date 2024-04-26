import React, { useState } from "react";
import { Col, Form, FormGroup, InputGroup, Input, Row, Button, Label, FormText } from "reactstrap";
function Sex({ nextStep, handleFormData, values }: any) {
    const submitFormData = (e: { preventDefault: () => void; }) => {
        nextStep();
    };
    return (
        <div >
            <Form onSubmit={submitFormData} className="row">
                <h3 className='mg-b-20'>¿Cuál es su sexo?</h3>
                <div className="custom-controls-stacked">
                    <Label className="custom-control custom-radio custom-control-lg">
                        <Input
                            type="radio"
                            className="custom-control-input"
                            name="example-radios2"
                            value="option1"
                            defaultChecked
                        />
                        <span className="custom-control-label custom-control-label-lg">
                            Hombre
                        </span>
                    </Label>
                    <Label className="custom-control custom-radio custom-control-lg">
                        <Input
                            type="radio"
                            className="custom-control-input"
                            name="example-radios2"
                            value="option2"
                        />
                        <span className="custom-control-label custom-control-label-lg">
                            Mujer
                        </span>
                    </Label>
                </div>
                <div className="">
                    <Button color="" type="submit" className="btn mt-3 btn-primary d-flex ms-auto ">
                        Siguiente
                    </Button>
                </div>
            </Form>
        </div>
    );
}
export default Sex