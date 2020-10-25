import React from 'react'
import styled from 'styled-components'
import GlobalFonts from './assets/fonts/fonts'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import './App.css'

const AppContainer = styled.main``

function App() {
  return (
    <AppContainer>
      <GlobalFonts />
      <Header />
      <Main />
    </AppContainer>
  );
}

export default App
