import React from 'react'
import { Form } from 'react-router-dom'
import { Col, Input, Label } from 'reactstrap'
import { useFormContext } from '../context/FormContext'

const CustomCuestion = ({ cuestion, name }) => {
    const getRamdon = Math.random()
    const { valueForm, onChange } = useFormContext()

    return (
        <Col>
            <div className="custom-controls-stacked d-flex align-items-center align-content-center justify-content-between">
                <h6 className="mb-0 me-5">{cuestion}</h6>
                <div className='d-flex me-5 gap-2'>
                    <Label className="custom-control custom-radio custom-control-lg">
                        <Input
                            type="radio"
                            className="custom-control-input"
                            name={name}
                            value="1"
                            onChange={onChange}
                        />
                        <span className="custom-control-label custom-control-label-lg">
                            SI
                        </span>
                    </Label>
                    <Label className="custom-control custom-radio custom-control-lg ">
                        <Input
                            type="radio"
                            className="custom-control-input"
                            name={name}
                            value="0"
                            onChange={onChange}
                        />
                        <span className="custom-control-label custom-control-label-lg">
                            NO
                        </span>
                    </Label>
                </div>
            </div>
        </Col>


    )
}

export default CustomCuestion