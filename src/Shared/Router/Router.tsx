import React, { lazy } from "react"
import { Routes, Route, Navigate } from "react-router-dom";
import { Loader } from "../Components/Loader/Loader"
import PagePaymentControl from "../../modules/payment/pages/pagePaymentPucharses";
import PaymentRoutes from "../../modules/payment/router";
const App = lazy(() => import("../Layouts/App"));
const Login = lazy(() => import("../../Auth/Login/Login"));
const Sigup = lazy(() => import("../../Auth/Signup/Signup"));
const Auth = lazy(() => import("../../Auth/FirebaseAuth/Auth"));
export const Routing = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route path={`${import.meta.env.BASE_URL}`} element={<Auth />}>
          <Route index element={<Login />} />
          <Route path={`${import.meta.env.BASE_URL}auth/login`} element={<Login />} />
          <Route path={`${import.meta.env.BASE_URL}auth/signup`} element={<Sigup />} />
        </Route>

        <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
          <Route>
            <Route path="inicio/*" element={<PaymentRoutes />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={`${import.meta.env.BASE_URL}auth/login`} />} />
      </Routes>
    </React.Suspense>
  )
}