/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Text/ExampleController
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import Playground from '../../components/Playground/Playground'

import Text from '../../libs/packages/Text'
import README from '../../libs/packages/Text/README.md'


const propsSchema = [
  {
    propName: 'size',
    type: 'group',
    defaultValue: 'md',
    value: [
      { text: 'sm', value: 'sm' },
      { text: 'md', value: 'md' },
      { text: 'lg', value: 'lg' },
    ]
  },
  {
    propName: 'block',
    type: 'switch',
    defaultValue: false,
  },
  {
    propName: 'userSelect',
    type: 'switch',
    defaultValue: true,
  }
]

export default () => (
  <Playground
    propsSchema={propsSchema}
    README={README}
    render={props => (
      <Fragment>
        <Text { ...props }>Text 1</Text>
        <Text { ...props }>Text 2</Text>
      </Fragment>
    )}
    sourceCode={(p, s) => (`
<Text size="${p.size}" block={${p.block}} userSelect={${p.userSelect}}>Text</Text>
    `)}
  />
)
