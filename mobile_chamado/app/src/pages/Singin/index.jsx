import React, { useState } from 'react';

import api from '../../services/api';

import { Container, H1, Content } from './styles';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Text } from '../../components/Text';
import { Alert } from 'react-native';

export default function Signin({ navigation }) {
  let [cpf, setCpf] = useState("");
  let [password, setPassword] = useState("");
  let [alert, setAlert] = useState(false);

  const data = {
    "cpf":cpf,
    "senha":password
  }

  function handleSingIn() {
    api.post("/login", data)
    .then((response) => {
      if(response.status == 202) {
        if(response.data.cargo == 'tecnico') {
          navigation.navigate('Menu');
        }     
      }
    })
    .catch((err) => {
      console.log(err);
      setAlert(true)
    })
  }
 
  return (
    <Container>
      <Content behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <H1>Login</H1>
        {
          alert ? <Text color={'red'}>dados incorretos ou você não tem acesso!</Text> : null
        }
        <Input placeholder="cpf" onChangeText={setCpf} />
        <Input placeholder="senha" secureTextEntry={true} onChangeText={setPassword} />

        <Button onPress={() => handleSingIn()}>login</Button>
      </Content>
    </Container>
  );
}