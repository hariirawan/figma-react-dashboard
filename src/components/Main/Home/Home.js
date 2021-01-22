import React from "react";
import CardItem from "./Card";
import styled from "styled-components";
import Title from "../../atoms/title/title";

const Container = styled.div``;

const Col = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

function Home() {
  return (
    <Container>
      <Title>Dashboard</Title>
      <Col>
        <CardItem label={"Total Payment"} />
        <CardItem label={"Total Deposit"} />
        <CardItem />
        <CardItem />
      </Col>
    </Container>
  );
}

export default Home;
