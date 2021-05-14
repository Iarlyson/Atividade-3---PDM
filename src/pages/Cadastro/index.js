import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import api from '../../services/api';
import {Container, UpperTitle, Label, Input, Button} from './styles'

export default function Cadastro() {

    const [name, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function Cadastroalunos(name, email, password) {
        try {
            await api.post(`discentes`, {
                name,
                email,
                password
            })
            alert("Adcionado !")
        } catch (err) {
            alert('erro ao Adcionar');
            alert(err);
        }
    }

    return (
        <Container>
            <UpperTitle>Cadastro de aluno</UpperTitle>
        <>
            <View>
                <Label>Informe o nome:</Label>
                <Input
                    placeholder='Nome'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={name => setNome(name)}
                    value={name}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Label>Informe o Email:</Label>
                <Input
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={email => setEmail(email)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Label>Informe o senha:</Label>
                <Input
                    placeholder='Senha'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={password => setPassword(password)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                /><br></br>
                <TouchableOpacity onPress={() => {
                    Cadastroalunos(name, email, password).then()
                }}>
                    <Button>Cadastrar</Button></TouchableOpacity>
            </View>
        </>
        </Container>
    )
}
