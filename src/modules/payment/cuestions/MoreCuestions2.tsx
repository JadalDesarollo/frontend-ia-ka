import React, { useState } from "react";
import { Button } from "reactstrap";
import CustomCuestion from "../components/CustomCuestion";
import { useFormContext } from "../context/FormContext";
import { predictForm } from "../services/predict.services";
function MoreCuestions2({ nextStep, handleFormData, values, prevStep }: any) {

    const { valueForm, onChange } = useFormContext()
    const submitFormData = async () => {
        await predictForm(valueForm)
        nextStep();
    };
    return (
        <div>
            <h3 className='mg-b-20'>¿Qué otras afirmaciones se aplica a usted?</h3>
            <CustomCuestion cuestion={"Uso Anticoagulantes "}
                name={"targa"}
            />
            <CustomCuestion cuestion={"Uso Medicamentos para controlar mi presión "}
                name={"hepatitisB"}
            />
            <CustomCuestion cuestion={"Tuve cirugías Previas en los últimos 2 años "}
                name={"hepatitisC"}
            />
            <CustomCuestion cuestion={"Realizo a menudo Actividades Extenuantes "}
                name={"VIH"}
            />
            <CustomCuestion cuestion={"Presento Antecedentes Familiares con problemas cardiovasculares "}
                name={"sida"}
            />
            <CustomCuestion cuestion={"Tengo Antecedentes Cardiacos (Dolor en el pecho) "}
                name={"tuberculosis"}
            />
            <CustomCuestion cuestion={"Tengo Antecedentes Respiratorios (Falta de oxígeno, ahogo) "}
                name={"insRespiratoria"}
            />
            <CustomCuestion cuestion={"Tengo Antecedentes Renales "}
                name={"alcoholismo"}
            />
            <CustomCuestion cuestion={"Tengo Antecedentes Diabéticos "}
                name={"anemia"}
            />
            <CustomCuestion cuestion={"Tengo Antecedentes Hipertensión "}
                name={"desnutricion"}
            />
            <CustomCuestion cuestion={"Tengo Antecedentes de Obesidad "}
                name={"cancer"}
            />
            <CustomCuestion cuestion={"Tengo Antecedentes Colesterol "}
                name={"diabetes"}
            />

            <div className="d-flex justify-content-between  align-content-center mt-6 ">
                <Button color="" className="btn btn-primary" onClick={prevStep}>
                    Anterior
                </Button>
                <Button color="" type="button"
                    onClick={submitFormData}
                    className="btn  btn-primary d-flex ms-auto">
                    Predecir
                </Button>
            </div>
        </div>
    );
}

export default MoreCuestions2