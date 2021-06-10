import React from 'react'
import About from './About.js'
import Contact from './Contact.js'
import Counter from './Counter.js'
import Main from './Main.js'
import Services from './Services.js'
import Work from './Work.js'

const Home = ()=>{
    return (
        <React.Fragment>
          <Main />
          <About />
          <Services />
          <Counter />
          <Work />
          <Contact />
        </React.Fragment>
    )
}

export default Home
