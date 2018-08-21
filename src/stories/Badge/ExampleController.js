/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Badge/ExampleController
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component } from 'react'

import Playground from '../../components/Playground/Playground'

import Badge from '../../libs/packages/Badge'
import README from '../../libs/packages/Badge/README.md'


const propsSchema = [
  {
    propName: 'children',
    type: 'text',
    defaultValue: 'Badge',
  },
  {
    propName: 'color',
    type: 'select',
    defaultValue: {
      label: 'gray',
      value: 'gray',
    },
    value: [
      { label: 'gray', value: 'gray' },
      { label: 'red', value: 'red' },
      { label: 'green', value: 'green' },
      { label: 'blue', value: 'blue' },
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
]

export default () => (
  <Playground
    propsSchema={propsSchema}
    README={README}
    render={({ children, ...props }) => <Badge {...props}>{children}</Badge>}
    sourceCode={(p) => (`
<Badge color="${p.color}" size="${p.size}">${p.children}</Badge>
    `)}
  />
)
