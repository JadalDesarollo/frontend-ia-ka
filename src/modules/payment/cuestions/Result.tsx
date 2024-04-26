import React, { useEffect, useState } from "react";
import { Col, Form, FormGroup, InputGroup, Input, Row, Button, Label, FormText } from "reactstrap";
import { predictForm } from "../services/predict.services";
import { useFormContext } from "../context/FormContext";
function Result({ nextStep, handleFormData, values, prevStep }: any) {
    const { valueForm, onChange } = useFormContext()
    const [isLoading, setisLoading] = useState(false)
    const [result, setResult] = useState("")
    const predict = async () => {
        setisLoading(true)
        const result = JSON.stringify(await predictForm(valueForm))
        console.log(result)
        setResult(result)
        setisLoading(false)
    }

    useEffect(() => {
        console.log('predicttt...')
        predict()
    }, [])

    if (isLoading) {
        return (

            <div >
                <h4>Resultados</h4>
                <div>
                    Prediciendo .....
                </div>
            </div>
        )
    }
    return (
        <div >
            <h4>Resultados</h4>
            <div>
                {result}
            </div>
        </div>
    );
}
export default Result