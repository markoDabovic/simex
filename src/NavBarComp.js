import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./styles/Navbar.style";
import "./KalkulacijaDuzineTable";
import LogoImg from "./images/simextas.jpg";
import {
  Routes,
  Route,
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

export default function NavBarComp() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <CustomLink to="/"> Home</CustomLink>
            <CustomLink to="/duzinaTable"> Duzina table</CustomLink>
            <CustomLink to="/tezinaTable"> Tezina table</CustomLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImg}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
        >
          <CustomLinkExtended to="/"> Home</CustomLinkExtended>
          <CustomLinkExtended to="/duzinaTable">
            {" "}
            Duzina table{" "}
          </CustomLinkExtended>
          <CustomLinkExtended to="/tezinaTable">
            {" "}
            Tezina table
          </CustomLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

function CustomLinkExtended({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavbarLinkExtended
      style={{ color: match ? "red" : "white" }}
      to={to}
      {...props}
    >
      {children}
    </NavbarLinkExtended>
  );
}

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavbarLink style={{ color: match ? "red" : "white" }} to={to} {...props}>
      {children}
    </NavbarLink>
  );
}
