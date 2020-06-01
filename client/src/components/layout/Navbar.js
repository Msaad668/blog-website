import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <NavbarContainer>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-5 py-2'>
          <Link className='navbar-brand' to='/'>
            Blog
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/'>
                  Home <span className='sr-only'>(current)</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/add-article'>
                  Add Article
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </NavbarContainer>
    </Fragment>
  );
};

export default Navbar;

//main nav container:

const NavbarContainer = styled.div`
  .nav-link {
    color: #fff !important;
    &:hover {
      background: #299;
    }
  }
`;
