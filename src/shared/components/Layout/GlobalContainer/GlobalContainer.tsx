import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 100vh;
`
type Props = {
    children: React.ReactNode
}

const GlobalContainer: React.FC<Props> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default GlobalContainer