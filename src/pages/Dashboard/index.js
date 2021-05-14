import React from 'react';
import {useState, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import api from '../../services/api';
import {Container, UpperTitle, Label, Info} from './styles';
import {useNavigation} from '@react-navigation/native';
import { useAuth } from "../../context/AuthContext";

export default function Dashboard () {

    const Navigation = useNavigation();
    const { student } = useAuth();

    function Disciplina(){
        Navigation.navigate("Disciplina");
    };

    return (
        <Container>
                <UpperTitle>Dashboard Page</UpperTitle>
                
                <TouchableOpacity onPress={() => Home()}>
                    <Button>Logout</Button></TouchableOpacity>

                <Label>Nome do Aluno:</Label>
                <Info>{student.name}</Info>

                <Label>Email do Aluno:</Label>
                <Info>{student.email}</Info>

                <Label>Lista de Disciplinas:</Label>
                <TouchableOpacity onPress={() => Disciplina()}>
                    <Info>Disciplina</Info></TouchableOpacity> 

        </Container>

    )
}
