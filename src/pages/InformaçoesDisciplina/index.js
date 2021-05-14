import React from 'react';
import {useState, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import api from '../../services/api';
import {Container, UpperTitle, Label, Info, Button} from './styles';
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../context/AuthContext";

export default function InfoDisc (props) {

    const [subject, setSubject] = useState({});

    const Navigation = useNavigation();
    const { logout } = useAuth();

    function Home(){
        Navigation.navigate("Home");
    }

    function Logout(){
        logout();
        Navigation.navigate("Login");
    }

    useEffect(() => {
        AsyncStorage.getItem("InfoDisc").then(result => {
            setSubject(JSON.parse(result));
        })
    }, []);


    useEffect(() => {
        console.log(subject);
    }, [subject]);


    return (
        <Container>
                <UpperTitle>Sobre a disciplina</UpperTitle>

                <TouchableOpacity onPress={() => Logout()}>
                    <Button>Logout</Button></TouchableOpacity>

                <Label>Disciplina:</Label>
                <Info>{subject.name}</Info>

                <Label>Carga horária:</Label>
                <Info>{subject.Workload}</Info>

        </Container>

    )
}
