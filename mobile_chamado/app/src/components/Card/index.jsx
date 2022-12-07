import React from "react";

import { Text } from "../Text";
import { Container, Box } from "./styles";

export function Card({ children }) {
    console.log(children);

    return (
      <Container onPress={() => {console.log('oi')}}>
        <Box>
          <Text color={'black'}>{children.produto}</Text>
          <Text color={'black'}>{children.status}</Text>
        </Box>
        <Box aligntext={'center'}>
          <Text color={'#525FD1'}>serial: {children.serial}</Text>
        </Box>
      </Container>
    );
}