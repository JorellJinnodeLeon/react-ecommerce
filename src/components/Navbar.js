import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button'

export default class Navbar extends Component 
{
    render() 
    {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-light px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className="m-auto" style={{position:"absolute",right:"5rem"}}>
                    <ButtonContainer>
                        <span className="mr-1">
                            <i className="fas fa-cart-plus" />
                        </span>
                        My Cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
            
        );
    }
}

const NavWrapper = styled.nav`
    background:var(--mainBlue);

    .nav-link {
        color: var(--mainWhite) !important;
        font-size:1.3rem;
        text-transform:capitalize;
    }
`;

