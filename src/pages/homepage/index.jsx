import React from 'react'
import { TopSection } from './topSection'
import styled from 'styled-components'

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

function Homepage(props) {
    return (
        <PageContainer>
            <TopSection />
        </PageContainer>
    )
}

export default Homepage


