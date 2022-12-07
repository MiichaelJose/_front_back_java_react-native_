import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: white;
`;

export const Content = styled.View`
    height: 75%;
    width: 100%;
    padding: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: aliceblue;
    border-bottom: 3px solid black;
`;

export const Header = styled.View`
    width: 100%;
    height: 15%;
  
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
`;

export const AreaButton = styled.View`
    height: 10%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Message = styled.Text`
    font-family: 'Roboto_700Bold_Italic';
    margin-inline: auto;
    text-align: center;
    font-size: 16px;
    font-style: italic;
    color: #8f5cd0;
`;