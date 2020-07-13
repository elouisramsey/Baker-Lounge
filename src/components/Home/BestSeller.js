import React, { useContext } from 'react'
import Context from '../context/context'
import PastryData from '../PastryData'
import BestSellerStyle from '../styled components/Bestseller.styled'

const BestSeller = () => {
  const Pastry = useContext(Context)

  const pastries = Pastry.bestSellers.map((pastry) => {
    return <PastryData key={pastry.id} pastry={pastry} cta={Pastry.cartBtn} id={pastry.id} />
  })

  return (
    <BestSellerStyle>
      <h2>/Best Sellers</h2>
      <p>These are some of our best selling pastries...</p>
      {Pastry.loading ? 'items are loading' : pastries}
    </BestSellerStyle>
  )
}

export default BestSeller
