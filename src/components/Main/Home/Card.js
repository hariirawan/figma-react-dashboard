import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid bkack;
  height: 100px;
  background-color: ${({ theme }) => theme.secondary};
  padding: 0.8rem;
  border-radius: 10px;
`;

function CardItem({ label }) {
  return <Card>{label}</Card>;
}

export default CardItem;
