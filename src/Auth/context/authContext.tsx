import { createContext, useContext, useState } from "react";
import React from 'react';
import { login, refresh, registerFetch } from "../../modules/payment/services/predict.services";
import { da } from "date-fns/locale";
export interface authStateUser {
    username: string,
    logged: boolean,
}
export interface AuthContext {
    auth: authStateUser,
    loginSucess: (username: string, password: string) => any
    checkToken: () => any
    logout: () => void
    register: (username: string, correo: string, password: string) => any
}
const initialState: authStateUser = {
    username: "",
    logged: false
}
const AuthContext = createContext<AuthContext | undefined>(undefined);
export const AuthProvider: React.FC<{
    children?: React.ReactNode;
}> = ({ children }: { children?: React.ReactNode }) => {
    const [auth, setAuth] = useState<authStateUser>(initialState)

    const loginSucess = async (username: string, password: string) => {
        try {
            const data = await login(username, password)
            if (data.success) {
                localStorage.setItem("token", data.token);
                setAuth({
                    username: data.user,
                    logged: true
                })
                return {
                    status:true
                }
            }
            return {
                status: false,
                error: data.error
            }

        } catch (error) {
            return {
                status: false,
                error: 'Error al iniciar sesión, Intentelo más tarde'
            }
        }
    }
    const checkToken = async (): Promise<boolean> => {
        const token = localStorage.getItem("token");
        if (!token) {
            setAuth({
                username: "",
                logged: false
            })
            return false
        }
        const data = await refresh(token)
        if (data.success) {
            localStorage.setItem("token", data.token);
            setAuth({
                username: data.user,
                logged: true
            })
            return true
        }
        setAuth({
            username: "",
            logged: false
        })
        return false

    }
    const logout = () => {
        localStorage.removeItem('token');
        setAuth({
            username: "",
            logged: false
        });
    }
    const register = async (username: string, correo: string, password: string) => {
        try {
            const data = await registerFetch(username, correo, password)
            if (data.success) {
                return {
                    status: true
                }
            }
          
            return {
                status: false,
                error: data.error
            }

        } catch (error) {
            return {
                status: false,
                error: 'Error al registrarse, Intentelo más tarde'
            }
        }
    }

    return (
        <AuthContext.Provider value={{
            auth,
            loginSucess,
            checkToken,
            logout,
            register
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useBonus debe ser utilizado dentro de un authProvovider");
    }
    return context;
}