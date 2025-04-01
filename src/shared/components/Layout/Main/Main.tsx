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
    padding: 0px 24px;
`

const Main: React.FC<Props> = ({ children }) => {
    return (
        <MainSection>
            {children}
        </MainSection>
    )
}

export default Main