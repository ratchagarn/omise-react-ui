/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Application
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'

import { globalStyle, resetStyle } from './styles'


injectGlobal(resetStyle)
injectGlobal(globalStyle)


class App extends Component {
  render() {
    return (
      <Container>
        <h1>React Storybook</h1>
        <p><a href="http://localhost:9009">Go to storybook</a></p>
      </Container>
    )
  }
}

export default App


/**
* --------------------------------------------------------
* UI
* --------------------------------------------------------
import { injectGlobal } from 'styled-components'

import globalStyle from './styles/global'
*/
const Container = styled.div`
  width: 960px;
  min-width: 768px;
  margin: auto;
`
