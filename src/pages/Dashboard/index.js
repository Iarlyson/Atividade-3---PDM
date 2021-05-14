import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import api from '../../services/api'

export default function Dashboard() {

    const [name, setNome] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() =>{

        async function exibir() {
            try {
                await api.post(`discentes`, {
                    name ,
                    email,
                    password
                })
                alert("Adcionado !")
            } catch (err) {
                alert('erro ao Adcionar');
                alert(err);
            }
        }
    })
    



    return (
        <>
            <View>
                <Text>Cadastro de Aluno</Text>
                <TextInput
                    placeholder='Nome'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={name => setNome(name)}
                    value={name}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={email => setEmail(email)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity onPress={() => {
                    Cadastroalunos(name, email, password).then()
                }}>
                    <Text>Cadastrar</Text></TouchableOpacity>
            </View>
        </>
    )
}
