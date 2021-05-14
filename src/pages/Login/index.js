import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import api from '../../services/api'
import {useNavigation} from '@react-navigation/native'
import {useAuth} from "../../context/AuthContext";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigation = useNavigation();
    const {login, signed, student} = useAuth();

    function Cadastro() {
        Navigation.navigate("Cadastro");
    };

    function Autenticar(email, password) {
        login(email, password).then();
    }

    useEffect(() => {
        if (signed) Navigation.navigate("Home");
    }, [signed, student]);


    return (
        <>
            <View>
                <Text>Login de Aluno</Text>
                <TextInput
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={email => setEmail(email)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder='Senha'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={password => setPassword(password)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity onPress={() => {
                    Autenticar(email, password)
                }}>
                    <Text>Autenticar</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => Cadastro()}>
                    <Text>Cadastra-se</Text></TouchableOpacity>

            </View>
        </>
    )
}
