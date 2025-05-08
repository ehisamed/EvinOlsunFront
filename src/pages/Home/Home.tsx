import React from 'react'
import Main from '../../shared/components/Layout/Main/Main'
import Footer from '../../shared/components/Layout/Footer/Footer'
import Header from '../../shared/components/Layout/Header/Header'
import Hero from '../../features/Hero/Hero'

const Home = () => {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
        <Header />
        <Main>
            <Hero /> 
        </Main>
        <Footer />
    </div>
  )
}

export default Home