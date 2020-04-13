
import Link from 'next/link';
import React, { useState } from 'react';
import auth0 from '../../services/auth0';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText
} from 'reactstrap';

const Header = props => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const { isAuthenticated, user } = props;
    console.log("props header", props)
    return (
        <div>
            <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
                <NavbarBrand className="port-navbar-brand" href="/" style={{ fontWeight: 1000 }}>Amien Kurniawan</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="port-navbar-item"><BsNavLink route="/" title="Home" /></NavItem>
                        <NavItem className="port-navbar-item"><BsNavLink route="/profile" title="Profile" /></NavItem>
                        <NavItem className="port-navbar-item"><BsNavLink route="/portfolios" title="Portfolios" /></NavItem>
                        <NavItem className="port-navbar-item"><BsNavLink route="/cv" title="Cv" /></NavItem>
                        <NavItem className="port-navbar-item"><BsNavLink route="/about" title="About" /></NavItem>
                    </Nav>
                    {!isAuthenticated && <NavbarText className="port-navbar-item"> <Login /></NavbarText>}
                    {isAuthenticated && <NavbarText className="port-navbar-item"> <Logout /></NavbarText>}
                    {isAuthenticated && <NavbarText className="port-navbar-item"><span className="nav-link port-navbar-link ">{user.payload.name}</span> </NavbarText>}
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;


const BsNavLink = props => {
    const { route, title } = props;
    return (
        <Link href={route}>
            <a className="nav-link port-navbar-link">{title}</a>
        </Link>
    )
}
const Login = props => {
    return (
        <span onClick={auth0.login} className="nav-link port-navbar-link clickable">Login</span>
    )
}
const Logout = props => {
    return (
        <span onClick={auth0.logout} className="nav-link port-navbar-link clickable">Logout</span>
    )
}
