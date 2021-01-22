import React from "react";
import CardItem from "./Card";
import styled from "styled-components";
import Title from "../../atoms/title/title";
import Chart from "./Chart";

const Container = styled.div``;
const Col = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.col ? props.col : "1")},
    1fr
  );
  grid-gap: 10px;
`;

const PropsBox = styled.div((props) => ({
  height: props.height,
  width: props.width ? props.width : 0,
}));

function Home() {
  return (
    <Container>
      <Title>Analytics Dashboard</Title>
      <Col col="4">
        <CardItem label={"Completed"} height="100" />
        <CardItem label={"Cancel"} height="100" />
        <CardItem label={"Rejected"} height="100" />
        <CardItem label={"Total Order"} height="100" />
        <CardItem label={"Item Favorite"} height="100" />
        <CardItem label="Cashless" height="100" />
        <CardItem label="Review" height="100" />
        <CardItem label="Complain" height="100" />
      </Col>
      <PropsBox height={30} />
      <Title>Statistic</Title>
      <Col col="2">
        <CardItem label={"Completed"}>
          <Chart />
        </CardItem>
        <CardItem label={"Completed"}></CardItem>
      </Col>

      <PropsBox height={30} />
    </Container>
  );
}

export default Home;
