import React, { useEffect, useState } from 'react'
import items from '../data'
import PastryContext from '../components/context/context'

const PastryProvider = (props) => {
  const [state, setState] = useState({
    pastries: [],
    sortedPastries: [],
    bestSellers: [],
    loading: true
  })

  useEffect(() => {
    const pastries = formatData(items)
    const bestSellers = pastries.filter((pastry) => pastry.bestsellers === true)
    setState({
      ...state,
      pastries,
      bestSellers,
      loading: false,
      sortedPastries: pastries
    })
  }, [])

  const formatData = (items) => {
    const tempPastries = items.map((item) => {
      const id = item.sys.id
      const images = item.fields.images.map((image) => image.fields.file.url)

      const pastry = { ...item.fields, images, id }
      return pastry
    })
    return tempPastries
  }

  return (
    <PastryContext.Provider value={state}>
      {props.children}
    </PastryContext.Provider>
  )
}

export default PastryProvider
