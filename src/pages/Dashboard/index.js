import React from 'react';
import {useState, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import api from '../../services/api';
import {Container, UpperTitle, Label, Info} from './styles';
import {useNavigation} from '@react-navigation/native'

export default function Dashboard () {

    const [name, getNome] = useState("");
    const [email, getEmail] = useState("");
    const Navigation = useNavigation();

    function Disciplina(){
        Navigation.navigate("Disciplina");
    };

    function Home(){
        Navigation.navigate("Home");
    };

    useEffect(() =>{

        async function exibir() {
            try {
                await api.get(`discentes`, {
                    name ,
                    email
                })
            } catch (err) {
                alert('erro');
                alert(err);
            }
        }
    })

    return (
        <Container>
                <UpperTitle>Dashboard Page</UpperTitle>
                
                <TouchableOpacity onPress={() => Home()}>
                    <Button>Logout</Button></TouchableOpacity>

                <Label>Nome do Aluno:</Label>
                <Info>Nome</Info>

                <Label>Email do Aluno:</Label>
                <Info>Email</Info>

                <Label>Lista de Disciplinas:</Label>
                <TouchableOpacity onPress={() => Disciplina()}>
                    <Info>Disciplina</Info></TouchableOpacity> 

        </Container>

    )
}
