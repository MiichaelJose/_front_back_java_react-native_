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
    height: 10%;
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
    justify-content: space-evenly;
    align-items: center;
`;

export const Bottom = styled.View`
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

export const SubTitle = styled.Text`
    font-family: "Roboto_700Bold_Italic";
    margin-bottom: 15px;
`;

export const BoxText = styled.View`
    width: 80%;
    margin-inline: auto;
    flex-direction: column;
    justify-content: space-between;
`;

export const BoxStatus = styled.View`
    width: 80%;
    display: flex;
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

export const TextDesc = styled.ScrollView`
    overflow-y: scroll;
    height: 105px;
    background-color: #e0e0e0;
    border-radius: 25px;
    padding: 15px;
    border: 2px solid #8f5cd0;;
    margin-top: 5px;
`;