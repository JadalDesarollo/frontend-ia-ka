import React, { useState } from "react";
import { Button } from "reactstrap";
import CuestionMultiple from "../components/CuestionMultiple";
import { useFormContext } from "../context/FormContext";
import { predictForm } from "../services/predict.services";
function MoreCuestions2({ nextStep, handleFormData, values, prevStep }: any) {

    const { valueForm, onChange } = useFormContext()
    const submitFormData = async () => {
        nextStep();
    };
    return (
        <div>
            <h3 className='mg-b-20'>Seleccione el nivel</h3>
            <CuestionMultiple cuestion={"Mi Alimentación es"} name={"alimentacion"}
                alternatives={['variada', 'balanceada']}
            />
            <CuestionMultiple cuestion={"Mi Consumo Alcohol es"} name={"consumoAlcohol"} alternatives={['No consumo', 'Solo en ocasiones', 'Con Frecuencia ']} />
            <CuestionMultiple cuestion={"Puedo decir que mi nivel de Estrés es"} name={"nivelEstres"} alternatives={['Bajo', 'Moderado', 'Alto']} />


            <div className="d-flex justify-content-between  align-content-center mt-6 ">
                <Button color="" className="btn btn-primary" onClick={prevStep}>
                    Anterior
                </Button>
                <Button color="" type="button"
                    onClick={submitFormData}
                    className="btn  btn-primary d-flex ms-auto">
                    Siguiente
                </Button>
            </div>
        </div>
    );
}

export default MoreCuestions2