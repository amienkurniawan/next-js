import React from 'react';
import Link from 'next/link';


const Header = (props) => {
    return (
        <React.Fragment>
            {props.title}
            <br />
            {/* <p className="customClass">I am styled P Element</p>
            <p className="customClassFromSass">I am styled P Element from sass</p> */}
            <br />
            <Link href="/">
                <a className="header" style={{ fontSize: "20px" }}>home</a>
            </Link>
            <Link href="/profile">
                <a className="header" style={{ fontSize: "20px" }}>profile</a>
            </Link>
            <Link href="/cv">
                <a className="header" style={{ fontSize: "20px" }}>cv</a>
            </Link>
            <Link href="/about">
                <a className="header" style={{ fontSize: "20px" }}>about</a>
            </Link>
            <Link href="/portfolios">
                <a className="header" style={{ fontSize: "20px" }}>portfolios</a>
            </Link>
        </React.Fragment>
    )
}
export default Header;