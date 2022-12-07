import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: white;
`;

export const H1 = styled.Text`
    font-family: 'Roboto_700Bold';
    font-size: 36px;

    color: black;
`;

export const Content = styled.KeyboardAvoidingView`
    width: 90%;
    height: 60%;

    display: flex;
    align-items: center;
    justify-content: space-around;
`;