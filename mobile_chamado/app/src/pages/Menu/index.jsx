import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
// api
import api from "../../services/api";
//styles
import { Container, Content, AreaButton, Header, Message } from "./styles";
// components
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";

export default function Menu({ navigation }) {
  let [filter, setFilter] = useState("");
  let [results, setResults] = useState([]);
  let [dataFull, setDataFull] = useState([]);

  // return component
  function handleCard(props) {
    return <Card>{props.item}</Card>;
  }

  // index para cada element
  function handleIndex(props) {
    return props.id;
  }

  // consumindo api
  async function handleList() {
    const { data } = await api.get("/listchamado");
    setDataFull(data);
    setResults(data);
  }

  // preencher lists
  useEffect(() => {
    handleList();
  }, []);

  // states do filter
  useEffect(() => {
    if (filter == "") {
      setResults(dataFull);
    } else {
      setResults(
        dataFull.filter((e) => {
          if (e.produto.toLowerCase().includes(filter.toLowerCase()))
            return true;
          else return false;
        })
      );
    }
  }, [filter]);

  return (
    <Container>
      <Header>
        <Input placeholder={"filtrar"} onChangeText={setFilter} />
      </Header>
      <Content>
        {results == "" ? <Message color={"black"}>nada encontrado</Message> : ""}
        <FlatList
          data={results}
          renderItem={handleCard}
          estimatedItemSize={100}
          keyExtractor={handleIndex}
        />
      </Content>
      <AreaButton>
        <Button onPress={() => navigation.navigate('Called')}>escanear Qr</Button>
      </AreaButton>
    </Container>
  );
}
