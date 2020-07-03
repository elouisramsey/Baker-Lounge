import styled from 'styled-components'

const PastryDataStyle = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  text-transform: capitalize;

  .pastry-container {
    margin: 2em 0;

    img {
      height: 14em;
      width: 14em;
      object-fit: cover;
      border-radius: 50%;
    }

    p {
      font-size: 2em;
      color: #232323;
      font-weight: bold;
      margin-bottom: 0;
    }

    h4 {
      font-size: 1.4em;
      color: hsl(214, 7%, 47%);
      margin: 0.5em 0;
    }
  }
`

export default PastryDataStyle
