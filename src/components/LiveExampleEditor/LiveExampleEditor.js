/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - LiveExampleEditor
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React from 'react'
import styled from 'styled-components'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

import Preview from '../Preview'


const LiveExampleEditor = ({ header, code, scope }) => (
  <LiveProvider code={code.trim()} scope={scope}>
    <Header>{header}</Header>
    <Title>Editor</Title>
    <LiveEditor />
    <LiveError />
    <Title>Preview</Title>
    <Preview>
      <LivePreview />
    </Preview>
  </LiveProvider>
)

export default LiveExampleEditor

const Header = styled.h1`
  padding-bottom: 0.3em;
  font-size: 2em;
  border-bottom: 1px solid #eaecef;
`

const Title = styled.h5`
  font-size: 16px;
  color: #AAA;
  text-transform: uppercase;
`
