import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native'
import {Container, UpperTitle, Label, Input, Button} from './styles'
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
        if (signed) Navigation.navigate("Dashboard");
    }, [signed, student]);


    return (
        <Container>
            <UpperTitle>Login de aluno</UpperTitle>
            <>
                <View>
                    <Label>Informe o Email:</Label>
                    <Input
                        placeholder='E-mail'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={email => setEmail(email)}
                        value={email}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <Label>Informe a Senha:</Label>
                    <Input
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
                        <Button>Autenticar</Button></TouchableOpacity><br></br>
                    <TouchableOpacity onPress={() => Cadastro()}>
                        <Button>Cadastra-se</Button></TouchableOpacity>

                </View>
            </>
        </Container>
    )
}
