import React from "react";

import { Container } from "./styles";

import { Text } from "../Text"

export function Button({ children, ...rest }) {
    return <Container {...rest}><Text>{children}</Text></Container>;
}