import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PastryDataStyle from '../components/styled components/PastryData.styled'

const PastryData = ({ pastry }) => {
  const { name, slug, images, price } = pastry
  return (
    <PastryDataStyle>
      <div className='pastry-container'>
        <Link to={`/pastry/${slug}`} className='btn'>
          <img src={images[0]} alt={name} />
          <div className='info'>
            <p>{name}</p>
            <h4>{'\u20A6'}{price}</h4>
          </div>
        </Link>
        <Button size='huge' color='black' animated='vertical'>
          <Button.Content visible>Add to Cart</Button.Content>
          <Button.Content hidden>
            <Icon name='shop' />
          </Button.Content>
        </Button>
      </div>
    </PastryDataStyle>
  )
}

export default PastryData
PastryData.propTypes = {
  pastry: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
}
