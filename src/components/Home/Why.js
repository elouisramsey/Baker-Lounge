import React from 'react'
import { Icon } from 'semantic-ui-react'
import WhyStyle from '../styled components/Why.styled'

const Why = () => {
  return (
    <WhyStyle>
      <div className='reason'>
        <Icon className='icons' name='truck' />
        <h2>Free delivery</h2>
        <p>All orders are delivered for free within the city.</p>
      </div>
      <div className='reason'>
        <Icon className='icons' name='gift' />
        <h2>Special Gift Packs</h2>
        <p>We have special gift packs just for you.</p>
      </div>
      <div className='reason'>
        <Icon className='icons' name='handshake' />
        <h2>Best Prices</h2>
        <p>Pastries are delicious and affordable</p>
      </div>
    </WhyStyle>
  )
}

export default Why
