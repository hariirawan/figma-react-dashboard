import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid bkack;
  height: ${(props) => (props.height ? props.height + "px" : "auto")};
  background-color: ${({ theme }) => theme.secondary};
  padding: 0.8rem;
  border-radius: 10px;
`;

function CardItem({ label, height, children }) {
  return <Card height={height}>{children}</Card>;
}

export default CardItem;
