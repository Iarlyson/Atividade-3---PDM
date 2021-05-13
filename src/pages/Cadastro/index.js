import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import api from '../../services/api'

export default function Cadastro() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    async function Cadastroalunos(name, email) {
        try {
            await api.post(`discentes`, {
                name,
                email,
                password: "teste"
            })
            alert("Adcionado !")
        } catch (err) {
            alert('erro ao Adcionar');
        }
    }

    return (
        <>
            <View>
                <Text>Cadastro de Aluno</Text>
                <TextInput
                    placeholder='Nome'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={nome => setNome(nome)}
                    value={nome}
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
                    Cadastroalunos(nome, email).then()
                }}>
                    <Text>Cadastrar</Text></TouchableOpacity>
            </View>
        </>
    )
}
