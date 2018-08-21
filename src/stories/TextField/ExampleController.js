/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - TextField/ExampleController
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import Playground from '../../components/Playground/Playground'

import Label from '../../libs/packages/Label'
import TextField from '../../libs/packages/TextField'
import README from '../../libs/packages/TextField/README.md'


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
        render={props => (
          <Fragment>
            <Label>Label</Label>
            <TextField
              { ...props }
              onChange={this.handleOnChange}
            />
          </Fragment>
        )}
        sourceCode={(p, s) => (`
<TextField
  placeholder="${p.placeholder}"
  helpMessage="${p.helpMessage}"
  errorMessage="${p.errorMessage}"
  disabled={${p.disabled}}
/>
        `)}
      />
    )
  }

  handleOnChange = (e) => {
    this.setState({ onChangeMessage: e.target.value })
  }
}
