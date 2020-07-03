import styled from 'styled-components'

const HeroStyle = styled.div`
  height: 100%;

  .ui.grid {
    height: 100%;
  }

  .ui.grid > .row {
    padding-top: 0;
    padding-bottom: 0;
  }

  .intro-text-side {
    height: 100%;
    width: 70%;
    margin: 3em;
    h3 {
      font-family: 'Raleway', sans-serif;
      color: rgb(93 92 92);
      line-height: 1.5em;
      font-size: 1.3em;
      font-style: oblique;
      text-transform: lowercase;
      margin-bottom: 2em;
    }
    .ui.huge.button,
    .ui.huge.buttons .button,
    .ui.huge.buttons .or {
      font-size: 1.2em;
    }
  }
`

export default HeroStyle
