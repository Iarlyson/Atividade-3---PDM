import React from 'react';
import {useState, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import api from '../../services/api';
import {Container, UpperTitle, Label, Info, Button} from './styles';
import {useNavigation} from '@react-navigation/native'

export default function InfoDisc () {

    const [name, getNome] = useState("");
    const [email, getEmail] = useState("");
    const Navigation = useNavigation();

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
                <UpperTitle>Sobre a disciplina</UpperTitle>

                <TouchableOpacity onPress={() => Home()}>
                    <Button>Logout</Button></TouchableOpacity>

                <Label>Disciplina:</Label>
                <Info>Nome da disciplina</Info>

                <Label>Carga horária:</Label>
                <Info>Carga horária</Info>

        </Container>

    )
}
