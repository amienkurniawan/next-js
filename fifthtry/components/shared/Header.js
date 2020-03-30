import React, { Component } from 'react';
import Link from 'next/link';
import '../../styles/main.scss';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.title}
                <br />
                {this.props.children}
                <br />
                <p className="customClass">I am styled P Element</p>
                <p className="customClassFromSass">I am styled P Element from sass</p>
                <br />
                <Link href="/">
                    <a style={{ 'fontSize': '20px' }}>home</a>
                </Link>
                <br />
                <Link href="/profile">
                    <a>profile</a>
                </Link>
                <br />
                <Link href="/cv">
                    <a>cv</a>
                </Link>
                <br />
                <Link href="/about">
                    <a>about</a>
                </Link>
                <br />
                <Link href="/articles">
                    <a>articles</a>
                </Link>
                <style jsx>
                    {`
                        a{
                            font-size:20px;
                        }
                        .customClass{
                            color:blue;
                        }
                    `}
                </style>
            </React.Fragment>
        )
    }
}
export default Header;