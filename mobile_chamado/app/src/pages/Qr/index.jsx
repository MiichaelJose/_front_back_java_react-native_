import React, { useEffect, useState } from "react";

import { StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { Container, BarCode, Header, BoxButton, ViewQr, Title } from "./styles";

import { Text } from "../../components/Text";
import { Button } from "../../components/Button";

export default function Qr({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    
    
    if(data != '' && data != null) {
        console.log(data);
        navigation.navigate("Called", data)
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
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </ViewQr>
      <BoxButton>
          <Button onPress={() => navigation.navigate('Menu')}>voltar</Button>
      </BoxButton>
    </Container>
  );
}
