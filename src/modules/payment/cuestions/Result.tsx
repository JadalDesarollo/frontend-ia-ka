import React, { useEffect, useState } from "react";
import { Col, Form, FormGroup, InputGroup, Input, Row, Button, Label, FormText } from "reactstrap";
import { predictForm } from "../services/predict.services";
import { useFormContext } from "../context/FormContext";
function Result({ nextStep, handleFormData, values, prevStep }: any) {
    const { valueForm, onChange } = useFormContext()
    const [isLoading, setisLoading] = useState(false)
    const [result, setResult] = useState({
        predict: 0,
        recomendaciones: {}
    })
    const predict = async () => {
        setisLoading(true)
        const resultApi = (await predictForm(valueForm) as { predict: number, recomendaciones: any })
        console.log(result)
        setResult({
            predict: resultApi.predict || 0,
            recomendaciones: resultApi.recomendaciones
        })
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
        <div>
            <h4>Resultados</h4>
            <h6>Nivel <strong>{result.predict}</strong></h6>
            <div>
                <h6>Recomendaciones</h6>
                <ul>
                    {Object.values(result.recomendaciones).map((recomendacion, index) => (
                        <li key={index}>{recomendacion as string}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Result