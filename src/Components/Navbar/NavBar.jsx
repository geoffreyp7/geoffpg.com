import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function NavBar () {

    const NavBarContainer = styled.nav`
        display: flex;
        background-color: white;
        height: 3rem;
    `;

    const NavBarArea = styled.div`
        flex-basis: 80%;
        display: flex;
        margin: auto;
        height: 2.5rem;
    `;

    const LogoArea = styled.div`
        background-color: orange;
        flex-basis: 20%;
    `;

    const LinkArea = styled.div`
        background-color: blue;
        flex-basis: 80%;
    `;

    return (
        <NavBarContainer>
            <NavBarArea>
                <LogoArea>
                    GPG
                </LogoArea>
                <LinkArea>
                    <Link to='/'>about</Link>
                    <Link to='/projects'>projects</Link>
                    <Link to='/contact'>contact</Link>
                </LinkArea>
            </NavBarArea>
        </NavBarContainer>
    );
}