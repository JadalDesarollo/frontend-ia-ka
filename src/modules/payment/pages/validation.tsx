import React, { useState } from "react";
import { Col, Form, FormGroup, InputGroup, Input, Row, Button, Label, FormText } from "reactstrap";
import validator from "validator";
import Sex from "../cuestions/Sex";
import Age from "../cuestions/Age";
import Colesterol from "../cuestions/Colesterol";
import MoreCuestions from "../cuestions/MoreCuestions";
import MoreCuestions2 from "../cuestions/MoreCuestions2";
import Result from "../cuestions/Result";


export function WizardForm() {
    const [step, setstep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })
    const nextStep = () => {
        setstep(step + 1);
    };
    const prevStep = () => {
        setstep(step - 1);
    };
    const handleInputData = (input: any) => (e: any) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [input]: value
        }));
    }
    switch (step) {
        case 1:
            return (
                <div className="custom-margin">
                    <Sex nextStep={nextStep} handleFormData={handleInputData} values={formData} />
                </div>
            );
        case 2:
            return (
                <div className="custom-margin">
                    <Age nextStep={nextStep} handleFormData={handleInputData} prevStep={prevStep} values={formData} />
                </div>
            );

        case 3:
            return (
                <div className="">
                    <div className="custom-margin">
                        <Colesterol nextStep={nextStep} handleFormData={handleInputData} prevStep={prevStep} values={formData} />
                    </div>
                </div>
            );

        case 4:
            return (
                <div className="">
                    <div className="custom-margin">
                        <MoreCuestions nextStep={nextStep} handleFormData={handleInputData} prevStep={prevStep} values={formData} />
                    </div>
                </div>
            );
        case 5:
            return (
                <div className="">
                    <div className="custom-margin">
                        <MoreCuestions2 nextStep={nextStep} handleFormData={handleInputData} prevStep={prevStep} values={formData} />
                    </div>
                </div>
            );

        case 6:
            return (
                <div className="">
                    <div className="custom-margin">
                        <Result nextStep={nextStep} handleFormData={handleInputData} prevStep={prevStep} values={formData} />
                    </div>
                </div>
            );
        default:
            return (
                <div className="">
                    <div className="custom-margin">
                        <MoreCuestions nextStep={nextStep} handleFormData={handleInputData} prevStep={prevStep} values={formData} />
                    </div>
                </div>
            );
    }
}