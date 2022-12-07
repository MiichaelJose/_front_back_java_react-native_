import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.View`
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 26px;
    color: #8f5cd0;
    font-family: 'Roboto_700Bold';
`;

export const BoxText = styled.View`
    height: 100;
    width: 90%;
    margin-top: 5%;
    flex-direction: column;
    justify-content: space-between;
`;

export const BoxStatus = styled.View`
    height: 100;
    width: 90%;
    display: flex;
    margin-top: 5%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const BoxLeft = styled.View`
    width: 50%;
    height: 100%;
`;

export const BoxRight = styled.View`
    width: 50%;
    height: 100%;
`;


export const PickerStyle = styled(Picker)`
    background-color: #e0e0e0;
`;