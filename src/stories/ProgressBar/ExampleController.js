/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - ProgressBar/ExampleController
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component } from 'react'
import styled from 'styled-components'

import Playground from '../../components/Playground/Playground'

import ProgressBar from '../../libs/packages/ProgressBar'
import README from '../../libs/packages/ProgressBar/README.md'


const propsSchema = [
  {
    propName: 'value',
    type: 'text',
    defaultValue: 50,
  },
]


export default () => (
  <Playground
    propsSchema={propsSchema}
    README={README}
    render={props => <ProgressBar { ...props } />}
    sourceCode={(p, s) => (`<ProgressBar value="${p.value}" />`)}
  />
)
