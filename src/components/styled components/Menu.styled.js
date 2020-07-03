import styled from 'styled-components'

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #212020;
  width: 100%;
  z-index: 30;
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  /* .menu {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    -webkit-letter-spacing: 0.5rem;
    -moz-letter-spacing: 0.5rem;
    -ms-letter-spacing: 0.5rem;
    letter-spacing: 0.5rem;
    color: white;
    -webkit-text-decoration: none;
    text-decoration: none;
    -webkit-transition: color 0.3s linear;
    transition: color 0.3s linear;
  }

  .ui.dropdown {
    text-align: center;
  } */

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: grey;
    }
  }
`
