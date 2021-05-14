import React, {createContext, useContext, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

const AuthContext = createContext({});

export default function AuthContextComponent({children}) {

    const [student, setStudent] = useState(null);

    useEffect(() => {
        const loadStorage = async () => {
            const studentStorage = await AsyncStorage.getItem("Auth:Student");
            const tokenStorage = await AsyncStorage.getItem("Auth:Token");
            if (studentStorage && tokenStorage) {
                api.defaults.headers.common.Authorization = "Bearer " + tokenStorage;
                console.log(studentStorage);
                setStudent(JSON.parse(studentStorage));
            }
        }
        loadStorage().then();
    });

    async function login(email, password) {
        const response = await api.post('/discentes/auth', {email, password});
        const {token, student} = response.data;
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        await AsyncStorage.setItem('Auth:Student', JSON.stringify(student));
        await AsyncStorage.setItem('Auth:Token', token);
        setStudent(student);

    }

    async function logout() {
        AsyncStorage.clear().then(() => {
            setStudent(null);
        });
    }

    return (
        <AuthContext.Provider value={{signed: !!student, student, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}