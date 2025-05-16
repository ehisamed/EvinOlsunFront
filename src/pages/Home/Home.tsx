import React from 'react'
import Main from '../../shared/Layout/Main/Main'
import Footer from '../../shared/Layout/Footer/Footer'
import Header from '../../shared//Layout/Header/Header'
import Hero from '../../features/Hero/Hero'
import Recommendations from '../../features/Recommendations/Recommendations'

const Home = () => {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
        <Header />
        <Main>
            <Hero title='Evin olsun!'/> 
            <Recommendations />
        </Main>
        <Footer />
    </div>
  )
}

export default Home