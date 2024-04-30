import React, { useState } from "react";
import { Col, Form, FormGroup, InputGroup, Input, Row, Button, Label, FormText } from "reactstrap";
import { useFormContext } from "../context/FormContext";
function Age({ nextStep, handleFormData, values, prevStep }: any) {
    const { valueForm, onChange } = useFormContext()
    const submitFormData = (e: { preventDefault: () => void; }) => {
        nextStep();
    };
    return (
        <div >
            <Form onSubmit={submitFormData} className="row">
                <h4 className='mg-b-20'>Escriba su edad</h4>
                <div className="custom-controls-stacked">
                    <Input className="form-control" type="number" name="edad_cardiovascular"
                    onChange={onChange}
                    />
                </div>

                <div className="d-flex justify-content-between  align-content-center mt-6 ">
                    <Button color="" className="btn btn-primary" onClick={prevStep}>
                        Anterior
                    </Button>
                    <Button color="" type="submit" className="btn  btn-primary d-flex">
                        Siguiente
                    </Button>
                </div>

            </Form>
        </div>
    );
}
export default Age