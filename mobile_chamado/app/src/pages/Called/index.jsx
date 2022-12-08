import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";

import { Picker } from "@react-native-picker/picker";

import api from "../../services/api";

import {
  Container,
  Header,
  Title,
  Content,
  BoxText,
  BoxStatus,
  BoxLeft,
  PickerStyle,
  SubTitle,
  Bottom,
  TextDesc,
} from "./styles";
import { Text } from "../../components/Text";

export default function Called({ navigation, route }) {
  const { produto, cliente, cor, descricao, status, marca, orcamento, serial } =
    route.params;

  let [data, setData] = useState([]);
  let [selectedLanguage, setSelectedLanguage] = useState();
  let [dataFull, setDataFull] = useState([]);

  // useEffect(() => {
  //   getCalled();
  // }, []);

  // setTimeout(() => {
  //   console.log(produto);
  // }, 1000)

  /*
  <Header>
        <Title>Chamado</Title>
      </Header>
      <Content>
        <BoxText>
          <SubTitle color={"black"}>CLIENTE</SubTitle>
          <Text color={"black"}>{params.cliente.nome}</Text>
          <Text color={"black"}>{params.cliente.telefone}</Text>
          <Text color={"black"}>{params.cliente.endereco}</Text>
        </BoxText>
        <BoxText>
          <SubTitle color={"black"}>EQUIPAMENTO</SubTitle>
          <Text color={"black"}>{params.produto}</Text>
          <Text color={"black"}>{params.marca}</Text>
          <Text color={"black"}>{params.cor}</Text>
          <Text color={"black"}>{params.serial}</Text>
          <TextDesc color={"black"}>
            <Text color={"black"}>{params.descricao}</Text>
          </TextDesc>
        </BoxText>
        <BoxStatus>
          <BoxLeft>
            <SubTitle color={"black"}>STATUS</SubTitle>
            <Text color={"green"}>ANÁLISE</Text>
            <PickerStyle
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="CLUIDO" value="CLUIDO" />
              <Picker.Item label="ANÁLISE" value="ANÁLISE" />
            </PickerStyle>
          </BoxLeft>
          <Text color={"black"}>R$ {params.orcamento}</Text>
        </BoxStatus>
      </Content>
      <Bottom>
        <Button onPress={() => console.log(selectedLanguage)}>
          alterar status
        </Button>
      </Bottom>

  */

  return (
    <Container>
      <Header>
        <Title>Chamado</Title>
      </Header>
      <Content>
        <BoxText>
          <SubTitle color={"black"}>CLIENTE</SubTitle>
          <Text color={"black"}>{cliente?.nome}</Text>
          <Text color={"black"}>{cliente?.telefone}</Text>
          <Text color={"black"}>{cliente?.endereco}</Text>
        </BoxText>
        <BoxText>
          <SubTitle color={"black"}>EQUIPAMENTO</SubTitle>
          <Text color={"black"}>{produto}</Text>
          <Text color={"black"}>{marca}</Text>
          <Text color={"black"}>{cor}</Text>
          <Text color={"black"}>{serial}</Text>
          <TextDesc color={"black"}>
            <Text color={"black"}>{descricao}</Text>
          </TextDesc>
        </BoxText>
        <BoxStatus>
          <BoxLeft>
            <SubTitle color={"black"}>STATUS</SubTitle>
            <Text color={"green"}>ANÁLISE</Text>
            <PickerStyle
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="CLUIDO" value="CLUIDO" />
              <Picker.Item label="ANÁLISE" value="ANÁLISE" />
            </PickerStyle>
          </BoxLeft>
          <Text color={"black"}>R$ {orcamento}</Text>
        </BoxStatus>
      </Content>
      <Bottom>
        <Button onPress={() => console.log(selectedLanguage)}>
          alterar status
        </Button>
      </Bottom>
    </Container>
  );
}
