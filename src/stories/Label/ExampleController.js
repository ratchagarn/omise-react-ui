/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Label/ExampleController
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import Playground from '../../components/Playground/Playground'

import Label from '../../libs/packages/Label'
import README from '../../libs/packages/Label/README.md'


const propsSchema = [
  {
    propName: 'block',
    type: 'switch',
    defaultValue: false,
  },
  {
    propName: 'cursor',
    type: 'text',
    defaultValue: 'auto',
  },
]


export default class ExampleController extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: false,
    }
  }

  render() {
    const { checked } = this.state

    return (
      <Playground
        propsSchema={propsSchema}
        README={README}
        state={this.state}
        render={props => (
          <div>
            <Label { ...props }>Label - A</Label>
            <Label { ...props }>Label - B</Label>
          </div>
        )}
        sourceCode={(p, s) => (`
<div>
  <Label block={${p.block}} cursor="${p.cursor}">Label - A</Label>
  <Label block={${p.block}} cursor="${p.cursor}">Label - B</Label>
</div>
        `)}
      />
    )
  }

  handleOnChange = (e) => {
    this.setState({ checked: e.target.checked })
  }
}
