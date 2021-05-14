import React from 'react';
import {useState, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import api from '../../services/api';
import {Container, UpperTitle, Label, Info} from './styles';
import {useNavigation} from '@react-navigation/native'

export default function InfoDisc () {

    const [name, getNome] = useState("");
    const [email, getEmail] = useState("");
    const Navigation = useNavigation();

    function Disciplina(){
        Navigation.navigate("Disciplina");
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
                
                <Label>Disciplina:</Label>
                <Info>Nome da disciplina</Info>

                <Label>Carga horária:</Label>
                <Info>Carga horária</Info>

        </Container>

    )
}
