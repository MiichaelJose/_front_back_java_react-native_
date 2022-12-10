import React, { useEffect, useState } from "react";

import api from "../../services/api";

import { StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { Container, BarCode, Header, BoxButton, ViewQr, Title } from "./styles";

import { Text } from "../../components/Text";
import { Button } from "../../components/Button";

export default function Qr({ navigation }) {
  let [dataFull, setDataFull] = useState([]);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  async function getCalled(id) {
    const { data } = await api.get("/listchamado/"+id);
    setDataFull(data);
  }

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)

    if(data != '' && data != null) {
      getCalled(data);

      if(dataFull != '[]') {
        navigation.navigate('Called', dataFull)
      }
    }else {
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Container>
      <Header>
        <Title>possicione a câmera</Title>
      </Header>
      <ViewQr>
        <BarCode
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </ViewQr>
      <BoxButton>
          <Button onPress={() => { navigation.navigate('Called', dataFull) }}>voltar</Button>
      </BoxButton>
    </Container>
  );
}
