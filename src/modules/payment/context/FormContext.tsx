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
            targa: 1,
            hepatitisB: 0,
            hepatitisC: 0,
            VIH: 1,
            sida: 1,
            tuberculosis: 0,
            insRespiratoria: 1,
            alcoholismo: 0,
            anemia: 0,
            desnutricion: 0,
            cancer: 0,
            diarrea: 0,
            diabetes: 0,
            sepsis: 0,
            neumonia: 0,
            covid: 0,
            test1: 0,
            test2: 1,
            test3: 1

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