/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Tooltip/ExampleController
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import Playground from '../../components/Playground/Playground'

import Label from '../../libs/packages/Label'
import Tooltip from '../../libs/packages/Tooltip'
import README from '../../libs/packages/Tooltip/README.md'


const propsSchema = [
  {
    propName: 'title',
    type: 'text',
    defaultValue: 'Tooltip content',
  },
  {
    propName: 'position',
    type: 'select',
    defaultValue: { label: 'top', value: 'top' },
    value: [
      { label: 'top', value: 'top' },
      { label: 'left', value: 'left' },
      { label: 'right', value: 'right' },
      { label: 'bottom', value: 'bottom' },
      // { label: 'top-start', value: 'top-start' },
      // { label: 'left-start', value: 'left-start' },
      // { label: 'right-start', value: 'right-start' },
      // { label: 'bottom-start', value: 'bottom-start' },
      // { label: 'top-end', value: 'top-end' },
      // { label: 'left-end', value: 'left-end' },
      // { label: 'right-end', value: 'right-end' },
      // { label: 'bottom-end', value: 'bottom-end' },
    ]
  },
  {
    propName: 'disabled',
    type: 'switch',
    defaultValue: false,
  },
]


export default class ExampleController extends Component {
  constructor(props) {
    super(props)

    this.state = {
      onChangeMessage: '',
    }
  }

  render() {
    const { onChangeMessage } = this.state

    return (
      <Playground
        propsSchema={propsSchema}
        triggerOnChange={onChangeMessage}
        README={README}
        render={props => <Tooltip { ...props }>Hover me</Tooltip>}
        sourceCode={(p, s) => (`
<Tooltip
  title="${p.title}"
  position="${p.position}"
  disabled={${p.disabled}}>
  Hover me
</Tooltip>
        `)}
      />
    )
  }

  handleOnChange = (e) => {
    this.setState({ onChangeMessage: e.target.value })
  }
}
