import React from 'react'
import GlobalContainer from '../../shared/components/Layout/GlobalContainer/GlobalContainer'
import Main from '../../shared/components/Layout/Main/Main'
import Footer from '../../shared/components/Layout/Footer/Footer'
import Header from '../../shared/components/Layout/Header/Header'

const Home = () => {
  return (
    <GlobalContainer>
        <Header />
        <Main>
            <h1>Main</h1>
        </Main>
        <Footer />
    </GlobalContainer>
  )
}

export default Home