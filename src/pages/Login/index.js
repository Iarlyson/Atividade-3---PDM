import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import api from '../../services/api'
import {useNavigation} from '@react-navigation/native'

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigation = useNavigation();

    function Cadastro(){
        Navigation.navigate("Cadastro");
    };

    function Autenticar(email, password) {
        try {
            api.post(`/discentes/auth`, {
                email,
                password
            }).then(function (response) {
                Navigation.navigate("Home");
                console.log(response);
                alert("Autenticado !")
              }).catch(function (error) {
                alert('erro ao Autenticado');
                console.log(error);
              })
        } catch (error) {
            alert("teste "+error);
        }
    }

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
