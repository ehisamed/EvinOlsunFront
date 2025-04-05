import React from 'react'
import styled from 'styled-components'

type Props = {
    children: React.ReactNode
}

const MainSection = styled.main`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Main: React.FC<Props> = ({ children }) => {
    return (
        <MainSection>
            {children}
        </MainSection>
    )
}

export default Main