import React from 'react';
import {useState, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import api from '../../services/api';
import {Container, UpperTitle, Label, Info} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from "../../context/AuthContext";
import {Button} from "../InformaçoesDisciplina/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Dashboard(props) {

    const Navigation = useNavigation();
    const {student, logout} = useAuth();

    function Disciplina(subject) {
        AsyncStorage.setItem("InfoDisc", JSON.stringify(subject)).then();
        Navigation.navigate("InfoDisc", subject);
    }

    function Logout(){
        logout();
        Navigation.navigate("Login");
    }

    return (
        <Container>
            <UpperTitle>Dashboard Page</UpperTitle>

            <TouchableOpacity onPress={() => Logout()}>
                <Button>Logout</Button></TouchableOpacity>

            <Label>Nome do Aluno:</Label>
            <Info>{student.name}</Info>

            <Label>Email do Aluno:</Label>
            <Info>{student.email}</Info>

            {student.subjects.length ? (
                <>
                    <Label>Lista de Disciplinas:</Label>
                    {student.subjects.map(subject => (
                        <TouchableOpacity onPress={() => Disciplina(subject)}>
                            <Info>{subject.name}</Info></TouchableOpacity>
                    ))}

                </>

            ) : (
                <Label>Sem Disciplinas Matriculadas</Label>

            )}
        </Container>

    )
}
