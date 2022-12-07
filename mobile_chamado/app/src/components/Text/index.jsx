import React from "react";

import { Container } from "./styles";

export function Text({ color, children }) {
    return <Container colortext={color}>{children}</Container>;
}