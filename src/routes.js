import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"
import AuthContextComponent from "./context/AuthContext";
const Stack = createStackNavigator();

const Route = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Dashboard" component={Dashboard} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Login" component={Login} options={{
                    headerShown: false
                }}/>
                <Stack.Screen name="Cadastro" component={Cadastro} options={{
                    headerShown: false
                }}/>
                <Stack.Screen name="Home" component={Home} options={{
                    headerShown: false
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Route;