import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const ConnectPages = () => {
    return (
        <>
            <Navbar bg="white" expand="lg">
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <button type="button" class="btn btn-warning">
                        <NavDropdown title="All Categores" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">
                            Another action
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">
                            Separated link
                          </NavDropdown.Item>
                        </NavDropdown>
                      </button>
                      

                      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default ConnectPages
