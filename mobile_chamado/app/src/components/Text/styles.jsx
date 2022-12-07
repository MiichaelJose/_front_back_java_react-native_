import styled from 'styled-components/native';

export const Container = styled.Text`
    color: ${(props) => props.colortext ? props.colortext : 'white' };
    font-family: 'Roboto_400Regular';
    font-size: 16px;
`;