import React, { createContext, useContext, useEffect, useState } from "react";
import { ValueFormPredict } from "../predict.interface";


interface FormContextType {
    valueForm: ValueFormPredict
    onChange: (e) => any
}
const FormContext = createContext<FormContextType | undefined>(undefined)
export const FormProvider: React.FC<{ children?: React.ReactNode; }> = ({ children }: { children?: React.ReactNode }) => {

    const [valueForm, setValueForm] = useState<ValueFormPredict>(
        {
            edad_cardiovascular: 30,
            sex: 1,
            usoAnticoagulantes: 1,
            usoMedicamentosPresion: 0,
            cirugiasPrevias: 0,
            actividadesExtenuantes: 1,
            antecedentesCardiovasculares: 1,
            antecedentesCardiacos: 0,
            antecedentesRespiratorios: 1,
            antecedentesRenales: 0,
            antecedentesDiabeticos: 0,
            antecedentesHipertension: 0,
            antecedentesObesidad: 0,
            antecedentesColesterol: 0,
            fumador: 0,
            diabetes: 0,
            actividadFisica: 0,
            alimentacion: 1,
            consumoAlcohol: 1,
            nivelEstres: 1
        }
    )

    const onChange = (e: any) => {
        const name = e.target.name
        const value = e.target.value
        setValueForm({
            ...valueForm,
            [name]: parseInt(value)
        })
    }
    useEffect(() => {
        console.log(valueForm)
    }, [valueForm])

    return (
        <FormContext.Provider
            value={{ valueForm, onChange }}>
            {children}
        </FormContext.Provider>
    )
}
export const useFormContext = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error("useBonus debe ser utilizado dentro de un FormProvider");
    }
    return context
}