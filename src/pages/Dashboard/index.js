import React from 'react';
import {Container, UpperTitle, Label, Info} from './styles'

export default function Dashboard () {
    return (
        <Container>
            <UpperTitle>Dashboard Page</UpperTitle>

            <Label>Nome do discente: </Label>
            <Info>Nome</Info>

            <Label>Email do discente: </Label>
            <Info>Email</Info>

            <Label>Lista de disciplinas: </Label>
        
            
        </Container>
    )
}