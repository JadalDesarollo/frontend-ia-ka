import React, { useState } from "react";
import {  Form, Input,Button, Label, FormText } from "reactstrap";
import { useFormContext } from "../context/FormContext";
function Colesterol({ nextStep, handleFormData, values, prevStep }: any) {
    const { valueForm, onChange } = useFormContext()
    const submitFormData = (e: { preventDefault: () => void; }) => {
        nextStep();
    };
    return (
        <div >
            <Form onSubmit={submitFormData} className="row">
                <h3 className='mg-b-20'>Seleccione el nivel de colesterol</h3>
                <div className="custom-controls-stacked">
                    <Label className="custom-control custom-radio custom-control-lg">
                        <Input
                            type="radio"
                            className="custom-control-input"
                            name="example-radios2"
                            value="0"
                            //onChange={onChange}
                            defaultChecked
                        />
                        <span className="custom-control-label custom-control-label-lg">
                            Deseable
                        </span>
                    </Label>
                    <Label className="custom-control custom-radio custom-control-lg">
                        <Input
                            type="radio"
                            className="custom-control-input"
                            name="example-radios2"
                            //onChange={onChange}
                            value="1"
                        />
                        <span className="custom-control-label custom-control-label-lg">
                            Limite superior del rango normal
                        </span>
                    </Label>

                    <Label className="custom-control custom-radio custom-control-lg">
                        <Input
                            type="radio"
                            className="custom-control-input"
                            name="example-radios2"
                            //onChange={onChange}
                            value="2"
                        />
                        <span className="custom-control-label custom-control-label-lg">
                            Alto
                        </span>
                    </Label>
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
export default Colesterol