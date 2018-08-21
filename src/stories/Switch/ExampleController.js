/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Switch/ExampleController
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import Playground from '../../components/Playground/Playground'

import Switch from '../../libs/packages/Switch'
import README from '../../libs/packages/Switch/README.md'


const propsSchema = [
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
      result: 'OFF',
    }
  }

  render() {
    const { result } = this.state

    return (
      <Playground
        propsSchema={propsSchema}
        triggerOnChange={result}
        README={README}
        render={props => (
          <Fragment>
            <Switch { ...props } onChange={this.handleOnChange} />
          </Fragment>
        )}
        sourceCode={(p, s) => (`
<Switch disabled={${p.disabled}} onChange={handleOnChange} />
        `)}
      />
    )
  }

  handleOnSubscribe = (name, value) => {
    this.setState({ [name]: value })
  }

  handleOnChange = ({ value }) => {
    this.setState({ result: value ? 'ON' : 'OFF' })
  }
}
