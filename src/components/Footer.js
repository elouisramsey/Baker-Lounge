import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Button, Form, Message } from 'semantic-ui-react'
import FooterStyle from './styled components/Footer.styled'

const Footer = () => {
  return (
    <FooterStyle>
      <section className='address'>
        <h3>Address</h3>
        <hr />
        <p>No.2 Chukwu agaghi ahapu anyi close, obi m, Abuja. </p>
      </section>
      <section className='hours'>
        <h3>Opening hours</h3>
        <hr />
        <p>Mon - Sat : 7am - 10pm </p>
        <p>Sun: 11am - 8pm</p>
      </section>
      <section className='contact'>
        <h3>Get in Touch</h3>
        <hr />
        <Form success error>
          <Form.Input label='Email' placeholder='Subscribe to our Newsletter' />
          {/* <Message
            success
            header='Form Completed'
            content="You're all signed up for the newsletter"
          />
          <Message
            error
            header='Action Forbidden'
            content='You can only sign up for an account once with a given e-mail address.'
          /> */}
          <Button>Subscribe</Button>
        </Form>
        <div className='socials'><FaFacebookF />  <FaInstagram />  <FaTwitter /></div>
      </section>
    </FooterStyle>
  )
}

export default Footer
