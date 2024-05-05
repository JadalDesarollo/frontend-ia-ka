import React from 'react'
import { Form } from 'react-router-dom'
import { Col, Input, Label } from 'reactstrap'
import { useFormContext } from '../context/FormContext'

const CustomMultiple = ({ cuestion, name, alternatives }) => {
    const getRamdon = Math.random()
    const { valueForm, onChange } = useFormContext()


    return (
        <Col>
            <div className="custom-controls-stacked d-flex align-items-center align-content-center justify-content-between">
                <h6 className="mb-0 me-5">{cuestion}</h6>
                <div className='d-flex me-5 gap-2'>

                    {
                        (alternatives as []).map((item, index) => {
                            return (
                                <Label className="custom-control custom-radio custom-control-lg">
                                    <Input
                                        type="radio"
                                        className="custom-control-input"
                                        name={name}
                                        value={`${index}`}
                                        onChange={onChange}
                                    />
                                    <span className="custom-control-label custom-control-label-lg">
                                      {  item}
                                    </span>
                                </Label>
                            )
                        })
                    }


                </div>
            </div>
        </Col>


    )
}

export default CustomMultiple