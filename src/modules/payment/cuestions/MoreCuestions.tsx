import React, { useContext, useState } from "react";
import { Button } from "reactstrap";
import CustomCuestion from "../components/CustomCuestion";
import { useFormContext } from "../context/FormContext";
function MoreCuestions({ nextStep, handleFormData, values, prevStep }: any) {
    return (
        <div >
            <h3 className='mg-b-20'>¿Alguna de las siguientes afirmaciones se aplica a usted?</h3>
            <CustomCuestion cuestion={"Fumo al menos 1 cigarrillo"} name={"fumador"} />
            <CustomCuestion cuestion={"Me detectaron Diabetes"} name={"diabetes"} />
            <CustomCuestion cuestion={"Realizo Actividad Fisica"} name={"actividadFisica"} />
            <CustomCuestion cuestion={"Pregunta test"} name={"preguntaTest"} />
            <CustomCuestion cuestion={"Mi Alimentación es"} name={"alimentacion"} />
            <CustomCuestion cuestion={"Mi Consumo Alcohol es"} name={"consumoAlcohol"} />
            <CustomCuestion cuestion={"Puedo decir que mi nivel de Estrés es"} name={"nivelEstres"} />
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