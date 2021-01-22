import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// const Container = styled.NavLink`
//   border-left: 3px solid
//     ${(props) => (props.active ? props.theme.activeMenu : "transparent")};
//   width: 100%;
//   padding: 0.3rem;
//   padding-left: 2rem;
//   cursor: pointer;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   margin-bottom: 1rem;
//   transition: 0.2s all ease-in-out;

//   &:hover {
//     background-color: rgba(0, 0, 0, 0.1);
//   }
// `;

const activeClassName = "nav-item-active";

const Container = styled(NavLink).attrs({ activeClassName })`
  padding: 0.3rem;
  padding-left: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  transition: 0.2s all ease-in-out;
  text-decoration: none;
  color: #aaa5a5;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &.${activeClassName} {
    background-color: rgba(0, 0, 0, 0.1);
    color: ${(props) => props.theme.textColor};
    border-left: 3px solid ${(props) => props.theme.activeMenu};
    width: 100%;
  }
`;

const Span = styled.span`
  font-size: 1rem;
  margin-right: 1rem;
`;

const Title = styled.h1`
  font-size: 0.9rem;
  font-weight: 300;
`;

const MenuLink = ({ title, active, icon, url }) => {
  return (
    <Container exact to={url}>
      <Span
        className="iconify"
        data-inline="false"
        data-icon={`mdi-light:${icon}`}
      ></Span>
      <Title active={active}>{title}</Title>
    </Container>
  );
};

export default MenuLink;
