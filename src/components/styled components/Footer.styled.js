import styled from 'styled-components'

const FooterStyle = styled.footer`
  display: flex;
  margin-top: 2em;
  text-align: center;
  flex-wrap: wrap;

  .address,
  .hours,
  .contact {
    width: 100%;
    margin-bottom: 2em;

    h3 {
      font-size: 1.6em;
      color: #1f1f1f;
    }

    p {
      width: 80%;
      margin: 0 auto;
      line-height: 1.8em;
      font-size: 1.2em;
      color: #4a4a4a;
    }
  }

  .contact form {
    width: 80%;
    margin: 1em auto;
    font-size: 2rem;

    .field label {
      font-size: 1.2em;
      padding-bottom: 0.9em;
    }

    button {
      font-size: 2rem;
      background: #282929;
      color: rgb(251 249 249 / 60%);
    }
  }

  .socials {
      font-size: 1.5em;
  }

  hr {
    width: 84%;
    height: 0.01em;
    margin: 2em auto;
    background: #797878;
  }
`

export default FooterStyle
