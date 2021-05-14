import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  font-style: arial;
`;

export const UpperTitle = styled(Title)`
  position: absolute;
  top: 10%;
  font-size: 25px;
`;

export const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  padding-top: 20px;
  text-align: center;
`;

export const Input = styled.TextInput`
  color: #7c53ce;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border: 1px #000;
  border-radius: 2px;
  height: 30px;
  box-shadow: 2px 2px 1px #aaaaaa;
`;

export const Button = styled.Text`
  color: #fff;
  background-color: #7c53ce;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border-radius: 2px;
  height: 30px;
  padding-top: 3px;
  box-shadow: 2px 2px 1px #aaaaaa;
`;
