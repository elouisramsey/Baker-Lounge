import React from 'react'
import { bool } from 'prop-types'
import { Menu, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { StyledMenu } from '../styled components/Menu.styled'

const MenuBar = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Menu.Item name='home' as={Link} exact to='/' />
      <Menu.Item name='about' as={Link} to='/about' />
      <Menu.Item name='contact' as={Link} to='/contact' />
      <Menu.Item name='shop' as={Link} to='/shop' />
      <Dropdown item text='Menu'>
        <Dropdown.Menu>
          <Dropdown.Item text='Cake' />
          <Dropdown.Item text='Bread' />
          <Dropdown.Item text='Biscuit' />
        </Dropdown.Menu>
      </Dropdown>
    </StyledMenu>
  )
}

MenuBar.propTypes = {
  open: bool.isRequired
}

export default MenuBar
