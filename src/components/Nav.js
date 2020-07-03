import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, Responsive } from 'semantic-ui-react'
import NavStyle from './styled components/NavStyle'
import Burger from './Home/Burger'
import MenuBar from './Home/MenuBar'

const Nav = () => {
  const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
  }
  const [open, setOpen] = useState(false)

  return (
    <>
      <NavStyle>
        <Menu>
          <Menu.Item name='logo' as={Link} to='/'>
            <h2 className='logo'>BL</h2>
          </Menu.Item>

          <Menu.Item
            icon='shopping cart'
            position='right'
            size='huge'
            as={NavLink}
            to='/cart'
            className='cart'
          />
          <Menu.Item className='burger'>
            <Burger open={open} setOpen={setOpen} />
          </Menu.Item>
        </Menu>
      </NavStyle>
      <MenuBar open={open} setOpen={setOpen} />
    </>
  )
}

export default Nav
