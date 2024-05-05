import React, { lazy, useEffect, useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom";
import { Loader } from "../Components/Loader/Loader"
import PagePaymentControl from "../../modules/payment/pages/pagePaymentPucharses";
import PaymentRoutes from "../../modules/payment/router";
import { useAuthContext } from "../../Auth/context/authContext";
const App = lazy(() => import("../Layouts/App"));
const Login = lazy(() => import("../../Auth/Login/Login"));
const Sigup = lazy(() => import("../../Auth/Signup/Signup"));

export const Routing = () => {
  const { auth, checkToken } = useAuthContext();
  const [checkingToken, setCheckingToken] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!auth.logged) {
          await checkToken();
        }
      } catch (error) {
        console.error('Error al verificar el token:', error);
      } finally {
        setCheckingToken(false);
      }
    };

    fetchData();
  }, [auth.logged]);

  if (checkingToken) {
    return <div>Cargando...</div>;
  }

  if (auth.logged) {
    return (
      <React.Suspense>
        <Routes>
          <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
            <Route index element={<Navigate to="inicio/predict" replace />} />
            <Route>
              <Route path="inicio/*" element={<PaymentRoutes />} />
            </Route>

          </Route>
          <Route path="*" element={<Navigate to={`${import.meta.env.BASE_URL}`} />} />

        </Routes>
      </React.Suspense >
    )
  } else {

    return (
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path={`${import.meta.env.BASE_URL}auth/login`} element={<Login />} />
          <Route path={`${import.meta.env.BASE_URL}auth/signup`} element={<Sigup />} />
          {/*   <Route path="*" element={<Navigate to={`${import.meta.env.BASE_URL}auth/login`} />} /> */}
          <Route path="*" element={<Navigate to={`${import.meta.env.BASE_URL}auth/login`} />} />
        </Routes>
      </React.Suspense>
    )
  }

}