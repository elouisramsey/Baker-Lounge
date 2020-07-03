import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import Contact from './components/Contact'
import Cart from './components/Cart'
import Error from './components/Error'
import Footer from './components/Footer'
import PastryProvider from './components/PastryProvider'

const App = () => {
  return (
    <PastryProvider>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/shop' component={Shop} />
        <Route path='/cart' component={Cart} />
        {/* <Route exact path='/menu/:slug' component={Room} /> */}
        <Route component={Error} />
      </Switch>
      <Footer />
    </PastryProvider>
  )
}

export default App
