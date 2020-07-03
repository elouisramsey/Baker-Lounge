import React from 'react'

export default React.createContext()

// const [state, setState] = useState({
//   pastries: [],
//   sortedPastries: [],
//   bestSellers: [],
//   loading: true
// })

// useEffect(() => {
//   const pastries = formatData(items)
//   const bestSellers = pastries.filter((pastry) => pastry.bestsellers === true)
//   setState({
//     ...state,
//     pastries,
//     bestSellers,
//     loading: false,
//     sortedPastries: pastries
//   })
// }, [])

// const formatData = (items) => {
//   const tempPastries = items.map((item) => {
//     const id = item.sys.id
//     const images = item.fields.images.map((image) => image.fields.file.url)

//     const pastry = { ...item.fields, images, id }
//     return pastry
//   })
//   return tempPastries
// }

// export const PastryProvider = PastryContext.Provider
// export const PastryConsumer = PastryContext.Consumer

// export default PastryContext
