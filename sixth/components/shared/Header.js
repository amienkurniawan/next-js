// import React from 'react';



// const Header = (props) => {
//     return (
//         <React.Fragment>
//             {props.title}
//             <br />
//             <Link href="/">
//                 <a className="header" style={{ fontSize: "20px" }}>home</a>
//             </Link>
//             <Link href="/profile">
//                 <a className="header" style={{ fontSize: "20px" }}>profile</a>
//             </Link>
//             <Link href="/cv">
//                 <a className="header" style={{ fontSize: "20px" }}>cv</a>
//             </Link>
//             <Link href="/about">
//                 <a className="header" style={{ fontSize: "20px" }}>about</a>
//             </Link>
//             <Link href="/portfolios">
//                 <a className="header" style={{ fontSize: "20px" }}>portfolios</a>
//             </Link>
//         </React.Fragment>
//     )
// }
// export default Header;
const BsNavLink = props => {
    const { route, title } = props;
    return (
        <Link href={route}>
            <a className="nav-link port-navbar-link">{title}</a>
        </Link>
    )
}

import Link from 'next/link';
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

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
                    {/* <NavbarText>Simple Text</NavbarText> */}
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;