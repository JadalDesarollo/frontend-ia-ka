import React, { useContext, useState } from "react";
import {  Button} from "reactstrap";
import CustomCuestion from "../components/CustomCuestion";
import { useFormContext } from "../context/FormContext";
function MoreCuestions({ nextStep, handleFormData, values, prevStep }: any) {
    return (
        <div >
            <h3 className='mg-b-20'>¿Alguna de las siguientes afirmaciones se aplica a usted?</h3>
            <CustomCuestion cuestion={"Fumo al menos 1 cigarrillo"}
                name={"sepsis"}
            />
            <CustomCuestion cuestion={"Me detectaron Diabetes "}
                name={"neumonia"}
            />
            <CustomCuestion cuestion={"Realizo Actividad Fisica "}
                name={"covid"}
            />
            <CustomCuestion cuestion={"Pregunta test "}
                name={"diarrea"}
            />
            <CustomCuestion cuestion={"Mi Alimentación es "}
                name={"test1"}
            />
            <CustomCuestion cuestion={"Mi Consumo Alcohol es "}
                name={"test2"}
            />
            <CustomCuestion cuestion={"Puedo decir que mi nivel de Estrés es "}
                name={"test3"}
            />
            <div className="d-flex justify-content-between  align-content-center mt-6 ">
                <Button color="" className="btn btn-primary" onClick={prevStep}>
                    Anterior
                </Button>
                <Button color="" type="button"
                    onClick={() => {
                        nextStep();
                    }}
                    className="btn  btn-primary d-flex ms-auto">
                    Siguiente
                </Button>
            </div>
        </div>
    );
}

export default MoreCuestions