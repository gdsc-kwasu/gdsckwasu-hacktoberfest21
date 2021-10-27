import dynamic from 'next/dynamic'
import React from 'react'
import styled from 'styled-components'
import Header from '../src/components/Header'
import Main from '../src/components/Main'
import { AppThemeProvider } from '../src/context/AppTheme'

const ParticlesBg = dynamic(() => import('particles-bg'), { ssr: false })

const Container = styled.div`
  max-width: 750px;
  margin: 0 auto;
  position: relative;
  height: 100vh;

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }
`

export default function Home() {
  return (
    <AppThemeProvider>
      <ParticlesBg bg={true} type="cobweb" color="#0f0f0f" num={50} />
      <Container>
        <Header />
        <Main />
      </Container>
    </AppThemeProvider>
  )
}
