import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        {/* <Bars /> */}
        <NavMenu>
          <NavLink to="/">Pocetna</NavLink>
          <NavLink to="/duzinaTable">Duzina table</NavLink>
          <NavLink to="/tezinaTable">Sirina table</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
