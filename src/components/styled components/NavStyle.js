import styled from 'styled-components'

const NavStyle = styled.nav`
.ui.menu {
    font-size: 1.2em;
    border: none;
    font-family: 'Poppins', sans-serif !important;
    background: inherit;
    box-shadow: none;
    z-index: 40;
}

.ui.menu .item:before {
    display: none;
}


h2 {
    font-size: 2em;
    z-index: 40;
}

h2:first-letter {
    color: lightslategray;
}

.cart {
    font-size: 1.2em !important;
    z-index: 40;
}

.burger {
    margin-right: 2em;
    z-index: 40;
}
`

export default NavStyle
