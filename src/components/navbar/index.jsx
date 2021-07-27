import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Logo } from "../logo";
import { Marginer } from "../marginer";
import { theme } from "../../theme";
import './navbar.css'

const NavbarContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${theme.navbar};
    box-shadow: 0 0.125rem 0.25rem 0 rgb(0 0 0 / 11%);
    font-size: 13.86px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginButton = styled(Button)`
  background-color: transparent;
  border: none;

  &:hover {
    background-color: transparent;
    border: none;
    color: rgb(212, 212, 212);
  }
`;

export function Navbar(props) {
  return (
    <NavbarContainer>
      <BrandContainer>
        <Logo inline />
      </BrandContainer>
      <AccessibilityContainer>
        <ul>
          <li>Home </li>
          <li>Experience </li>
          <li>Projects </li>
          <li>Resume </li>
          <li>Contact </li>
        </ul>
        <Marginer direction="horizontal" margin="8px" />
        <Button small>Get Started</Button>
        <LoginButton small>Login</LoginButton>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
