import React, { useState } from 'react'
import GlobalContainer from '../../shared/components/Layout/GlobalContainer/GlobalContainer'
import Main from '../../shared/components/Layout/Main/Main'
import Footer from '../../shared/components/Layout/Footer/Footer'
import Header from '../../shared/components/Layout/Header/Header'
import Sidebar from '../../shared/components/Layout/Header/components/Sidebar/Sidebar'
import Modal from '../../shared/components/ModalV1/ModalV1'
import Hero from '../../features/Hero/Hero'

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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