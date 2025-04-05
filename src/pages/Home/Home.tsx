import React from 'react'
import GlobalContainer from '../../shared/components/Layout/GlobalContainer/GlobalContainer'
import Main from '../../shared/components/Layout/Main/Main'
import Footer from '../../shared/components/Layout/Footer/Footer'
import Header from '../../shared/components/Layout/Header/Header'
import Sidebar from '../../shared/components/Layout/Header/components/Sidebar/Sidebar'

const Home = () => {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
        <Header />
        <Main>
            <h3>main</h3>
        </Main>
        <Footer />
    </div>
  )
}

export default Home