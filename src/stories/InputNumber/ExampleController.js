/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - InputNumber/ExampleController
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component } from 'react'
import styled from 'styled-components'

import Playground from '../../components/Playground/Playground'

import InputNumber from '../../libs/packages/InputNumber'
import README from '../../libs/packages/InputNumber/README.md'


const propsSchema = [
  {
    propName: 'step',
    type: 'text',
    defaultValue: 5,
  },
  {
    propName: 'maxLength',
    type: 'text',
    defaultValue: 10,
  },
  {
    propName: 'showNav',
    type: 'switch',
    defaultValue: true,
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
      number: 123,
    }
  }

  render() {
    const { number } = this.state

    return (
      <Playground
        propsSchema={propsSchema}
        README={README}
        triggerOnChange={number}
        state={this.state}
        render={props => (
          <InputNumber
            { ...props }
            value={number}
            onChange={this.handleOnChange}
          />
        )}
        sourceCode={(p, s) => (`
<InputNumber
  value={123}
  step={${p.step}}
  maxLength={${p.maxLength}}
  showNav={${p.showNav}}
/>
        `)}
      />
    )
  }

  handleOnChange = (name, value) => {
    this.setState({ number: value })
  }
}
