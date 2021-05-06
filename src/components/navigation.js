import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function navigation(props) {
    const user = props.user;
    return (
    
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
            Utadex ( { user ? <> {user.firstName} </> : <i> sign in </i> } )
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                {
                    user ? <Nav.Link onClick={props.handleLogout}> Logout </Nav.Link>
                    : <Nav.Link href="/login">Login</Nav.Link>
                }         
                <Nav.Link href="/manage-employees">Employees</Nav.Link>
                <NavDropdown title="Locations" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/manage-locations">Manage Locations</NavDropdown.Item>
                    <NavDropdown.Item href="/location-explorer">Location Explorer</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Intake" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/manage-intakes">Manage Intakes</NavDropdown.Item>
                    <NavDropdown.Item href="/intake-form">Intake Form</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Surveys" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/manage-surveys">Manage Surveys</NavDropdown.Item>
                    <NavDropdown.Item href="/survey-form">Survey Form</NavDropdown.Item>
                </NavDropdown>
            </Nav>

        </Navbar.Collapse>
        </Navbar>
    
    );
}

export default navigation;