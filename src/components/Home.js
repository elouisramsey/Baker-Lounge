import React from 'react'
import HomeStyle from './styled components/HomeStyle'
import Hero from './Home/Hero'
import BestSeller from './Home/BestSeller'
import Why from './Home/Why'

const Home = () => {
  return (
    <HomeStyle>
      <div className='hero'>
        <Hero />
        <hr />
        <BestSeller />
        <hr />
        <h2>/Why Choose Us</h2>
        <Why />
      </div>
    </HomeStyle>
  )
}

export default Home
