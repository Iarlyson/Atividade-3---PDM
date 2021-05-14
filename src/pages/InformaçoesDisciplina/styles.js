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
`;

export const Info = styled.Text`
  color: #7c53ce;
  font-size: 18px;
  font-weight: bold;
`;

export const Button = styled.Text`
  color: #fff;
  position: absolute;
  top: -240px;
  left: 120px;
  background-color: #c02e21;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border-radius: 2px;
  height: 30px;
  width: 90px;
  padding-top: 3px;
  box-shadow: 2px 2px 1px #aaaaaa;
`;