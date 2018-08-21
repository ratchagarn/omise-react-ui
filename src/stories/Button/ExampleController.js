/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Button/ExampleController
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component } from 'react'

import Playground from '../../components/Playground/Playground'

import Button from '../../libs/packages/Button'
import README from '../../libs/packages/Button/README.md'


const propsSchema = [
  {
    propName: 'type',
    type: 'group',
    defaultValue: 'default',
    vertical: true,
    value: [
      { text: 'default', value: 'default' },
      { text: 'primary', value: 'primary' },
      { text: 'secondary', value: 'secondary' },
      { text: 'destructive', value: 'destructive' },
      { text: 'link', value: 'link' },
    ]
  },
  {
    propName: 'size',
    type: 'select',
    defaultValue: {
      label: 'md',
      value: 'md',
    },
    value: [
      { label: 'sm', value: 'sm' },
      { label: 'md', value: 'md' },
      { label: 'lg', value: 'lg' },
    ]
  },
  {
    propName: 'block',
    type: 'switch',
    defaultValue: false,
  },
  {
    propName: 'disabled',
    type: 'switch',
    defaultValue: false,
  }
]

export default () => (
  <Playground
    propsSchema={propsSchema}
    README={README}
    render={props => <Button {...props}>Button</Button>}
    sourceCode={(p) => (`
<Button type="${p.type}" size="${p.size}" disabled={${p.disabled}}>Button</Button>
    `)}
  />
)
