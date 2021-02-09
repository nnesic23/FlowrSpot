import React from "react";
import logo from "../assets/img/pl-logo.svg";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  const user = useSelector((state) => state.authReducer);
  return (
    <Navbar fixed="top">
      <Navbar.Brand>
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Nav style={{ float: "right" }} className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>Flowers</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/latestSightings">
          <Nav.Link>Latest sightings</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/favorites">
          <Nav.Link>Favorites</Nav.Link>
        </LinkContainer>
        {user.isAuthenticated ? (
          <LinkContainer to="/profile">
            <Nav.Link>Name</Nav.Link>
          </LinkContainer>
        ) : (
          <React.Fragment>
            <LinkContainer to="/login">
              <Nav.Link onClick={() => history.push("/login")}>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Nav.Link>
                <button onClick={() => history.push("/signup")}>
                  New Account
                </button>
              </Nav.Link>
            </LinkContainer>
          </React.Fragment>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
