import React, { useState } from "react";
import { Button } from "reactstrap";
import CustomCuestion from "../components/CustomCuestion";
import { useFormContext } from "../context/FormContext";
import { predictForm } from "../services/predict.services";
function MoreCuestions2({ nextStep, handleFormData, values, prevStep }: any) {

    const { valueForm, onChange } = useFormContext()
    const submitFormData = async () => {
        nextStep();
    };
    return (
        <div>
            <h3 className='mg-b-20'>¿Qué otras afirmaciones se aplican a usted?</h3>
            <CustomCuestion cuestion={"Uso Anticoagulantes"} name={"usoAnticoagulantes"} />
            <CustomCuestion cuestion={"Uso Medicamentos para controlar mi presión"} name={"usoMedicamentosPresion"} />
            <CustomCuestion cuestion={"Tuve cirugías Previas en los últimos 2 años"} name={"cirugiasPrevias"} />
            <CustomCuestion cuestion={"Realizo a menudo Actividades Extenuantes"} name={"actividadesExtenuantes"} />
            <CustomCuestion cuestion={"Presento Antecedentes Familiares con problemas cardiovasculares"} name={"antecedentesCardiovasculares"} />
            <CustomCuestion cuestion={"Tengo Antecedentes Cardiacos (Dolor en el pecho)"} name={"antecedentesCardiacos"} />
            <CustomCuestion cuestion={"Tengo Antecedentes Respiratorios (Falta de oxígeno, ahogo)"} name={"antecedentesRespiratorios"} />
            <CustomCuestion cuestion={"Tengo Antecedentes Renales"} name={"antecedentesRenoales"} />
            <CustomCuestion cuestion={"Tengo Antecedentes Diabéticos"} name={"antecedentesDiabeticos"} />
            <CustomCuestion cuestion={"Tengo Antecedentes de Hipertensión"} name={"antecedentesHipertension"} />
            <CustomCuestion cuestion={"Tengo Antecedentes de Obesidad"} name={"antecedentesObesidad"} />
            <CustomCuestion cuestion={"Tengo Antecedentes de Colesterol"} name={"antecedentesColesterol"} />


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