import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom';
import { FormProvider } from './context/FormContext';

const PagePaymentControl = lazy(() => import("./pages/pagePaymentPucharses"));
const PaymentRoutes = () => {
    return (
        <FormProvider>
            <Routes>
                <Route index element={<PagePaymentControl />} />
                <Route path="predict" element={<PagePaymentControl />} />
            </Routes>
        </FormProvider>

    )
}
export default PaymentRoutes