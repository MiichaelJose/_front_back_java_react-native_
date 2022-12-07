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
} from "./styles";
import { Text } from "../../components/Text";

export default function Called({ navigation, route }) {
  const { params } = route;
  const [dataFull, setDataFull] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState();

  useEffect(() => {
    getCalled();
    console.log(dataFull);
  }, []);

  async function getCalled() {
    const { data } = await api.get("/listchamado/1");

    setDataFull(data);
  }

  return (
    <Container>
      <Header>
        <Title>Chamado</Title>
      </Header>
      <Content>
        <BoxText>
          <Text color={"black"}>CLIENTE</Text>
          <Text color={"black"}>Michael</Text>
          <Text color={"black"}>(19) 9999-9999</Text>
          <Text color={"black"}>Padre teilhard chardin</Text>
        </BoxText>
        <BoxText>
          <Text color={"black"}>EQUIPAMENTO</Text>
          <Text color={"black"}>Computador</Text>
          <Text color={"black"}>Toshiba</Text>
          <Text color={"black"}>Preto</Text>
          <Text color={"black"}>
            Computador esta com problea e não liga de jeito nenhum desde já
            muito obrigado
          </Text>
          <Text color={"black"}>serial: V423325</Text>
        </BoxText>
        <BoxStatus>
          <BoxLeft>
            <Text color={"black"}>STATUS</Text>
            <Text color={"green"}>ANÁLISE</Text>
            <PickerStyle
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </PickerStyle>
          </BoxLeft>
          <Text color={"black"}>R$ 10.00</Text>
        </BoxStatus>

        <Button onPress={() => console.log(selectedLanguage)}>
          alterar status
        </Button>
      </Content>
    </Container>
  );
}
