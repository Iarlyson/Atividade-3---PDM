import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from "./pages/Dashboard"
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"
import InfoDisc from "./pages/InformaçoesDisciplina"


const Stack = createStackNavigator();

const Route = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="InfoDisc" component={InfoDisc} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Cadastro" component={Cadastro} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Dashboard" component={Dashboard} options={{
                    headerShown: false
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Route;