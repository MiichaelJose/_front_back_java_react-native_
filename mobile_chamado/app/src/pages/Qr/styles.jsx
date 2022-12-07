import styled from "styled-components/native";
import { BarCodeScanner } from "expo-barcode-scanner";

export const Container = styled.View`
    display: flex;
    width: 100%;
    height: 100%;

    flex-direction: column;

    justify-content: flex-end;
    flex-direction: column;
`;

export const Header = styled.View`
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BarCode = styled(BarCodeScanner)`
    width: 100%;
    position: absolute;
    left: 0;
`;

export const ViewQr = styled.View`
    width: 100%;
    height: 80%;
    justify-content: center;
    display: flex;
`;

export const BoxButton = styled.View`
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 26px;
    color: #8f5cd0;
    font-family: 'Roboto_700Bold';
`;

