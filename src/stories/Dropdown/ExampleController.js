/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Dropdown/ExampleController
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component } from 'react'
import styled from 'styled-components'

import Playground from '../../components/Playground/Playground'

import Dropdown from '../../libs/packages/Dropdown'
import README from '../../libs/packages/Dropdown/README.md'


const propsSchema = [
  {
    propName: 'placeholder',
    type: 'text',
    defaultValue: 'Placeholder text',
  },
  {
    propName: 'helpMessage',
    type: 'text',
    defaultValue: 'Help message',
  },
  {
    propName: 'errorMessage',
    type: 'text',
    defaultValue: '',
  },
  {
    propName: 'disabled',
    type: 'switch',
    defaultValue: false,
  },
  {
    propName: 'onChange',
    type: 'eventTrigger',
  },
]

const options = [
  { text: 'Option 1', value: 'Option 1' },
  { text: 'Option 2', value: 'Option 2' },
  { text: 'Option 3', value: 'Option 3' },
  { text: 'Option 4', value: 'Option 4' },
  { divider: true },
  { text: 'Option 5', value: 'Option 5' },
  { text: 'Option 6', value: 'Option 6' },
]


export default class ExampleController extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }
  }

  render() {
    const { value } = this.state

    return (
      <Playground
        propsSchema={propsSchema}
        triggerOnChange={value}
        README={README}
        state={this.state}
        render={props => (
          <Dropdown
            { ...props }
            name="ExampleDropdown"
            value={value}
            options={options}
            onChange={this.handleOnChange}
          />
        )}
        sourceCode={(p, s) => (`
const options = ${JSON.stringify(options, null, 2)}

<Dropdown
  name="ExampleDropdown"
  placeholder="${p.placeholder}"
  helpMessage="${p.helpMessage}"
  errorMessage="${p.errorMessage}"
  disabled={${p.disabled}}
  options={options}
  value="${s.value}"
  onChange={this.handleOnChange}
/>
        `)}
      />
    )
  }

  handleOnChange = (name, value) => {
    this.setState({ value: value })
  }
}
