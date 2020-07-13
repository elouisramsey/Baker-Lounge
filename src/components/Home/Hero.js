import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Icon, Grid } from 'semantic-ui-react'
import HeroStyle from '../styled components/HeroStyle'
import SvgBurger from './SvgBurger'

const Hero = () => {
  return (
    <HeroStyle>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <div className='intro-text-side'>
              <h3>
                "We serve deserts and pastries that people recognize and love to
                eat, but sometimes, with an unexpected twist of surprise."
              </h3>
              <SvgBurger />
              <Button
                animated='fade'
                as={NavLink}
                to='/shop'
                size='huge'
                color='black'
              >
                <Button.Content visible>Shop Now</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow right' />
                </Button.Content>
              </Button>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </HeroStyle>
  )
}

export default Hero
