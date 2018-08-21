/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Collapse/ExampleController
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component } from 'react'

import Playground from '../../components/Playground/Playground'

import Collapse from '../../libs/packages/Collapse'
import README from '../../libs/packages/Collapse/README.md'


const propsSchema = [
  {
    propName: 'open',
    type: 'switch',
    defaultValue: true,
  },
  {
    propName: 'children',
    type: 'text',
    defaultValue: 'Content in Collapse',
  },
]


export default class ExampleController extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Playground
        propsSchema={propsSchema}
        README={README}
        render={({ children, ...props }) => (
          <Collapse { ...props }>{children}</Collapse>
        )}
        sourceCode={(p, s) => (`
<Collapse open={${p.open}}>${p.children}</Collapse>
        `)}
      />
    )
  }
}
