import React from "react";
import MenuLink from "./MenuLink";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const Menu = () => {
  const history = useHistory();

  console.log(history);

  return (
    <Container>
      <MenuLink title="Home" icon={"home"} url="/" />
      <MenuLink title="Deposits" icon={"file-multiple"} url="/deposits" />
      <MenuLink title="Offers" icon={"gift"} url="/offers" />
      <MenuLink title="Payments" icon={"bank"} url="/payments" />
      <MenuLink title="Settings" icon={"cog"} url="/settings" />
    </Container>
  );
};

export default Menu;
