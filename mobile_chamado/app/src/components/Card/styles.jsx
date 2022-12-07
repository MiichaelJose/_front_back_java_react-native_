import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 100px;

    border-radius: 25px;
    border: 3px solid #8f5cd0;
    margin-top: 15px;

    display: flex;
    flex-direction: row;
    justify-content: center;
`;  

export const Box = styled.View`
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: ${(props) => props.aligntext ? props.aligntext : 'baseline' };
`;