import React from 'react';
import HeaderBtn from '../HeaderBtn';

const Header = () => {
    return (
        <header className="header">
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">Ryan Sebastian</span>
                    <span className="heading-primary-sub">Full-Stack Web Developer</span>
                </h1>
            </div>
            <HeaderBtn>Check Out My Work!</HeaderBtn>
        </header>
    )
}

export default Header;