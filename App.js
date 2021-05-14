import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AuthContextComponent from "./src/context/AuthContext";
import { StyleSheet, Text, View } from 'react-native';
import Route from "./src/routes";

export default function App() {
  return (
      <AuthContextComponent>
          <Route />
          <StatusBar style="auto" />
      </AuthContextComponent>
  );
}
