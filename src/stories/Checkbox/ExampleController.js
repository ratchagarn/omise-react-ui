/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Checkbox/ExampleController
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component } from 'react'
import styled from 'styled-components'

import Playground from '../../components/Playground/Playground'

import Label from '../../libs/packages/Label'
import Text from '../../libs/packages/Text'
import Checkbox from '../../libs/packages/Checkbox'
import README from '../../libs/packages/Checkbox/README.md'


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
      value: null,
    }
  }

  render() {
    const { value } = this.state

    return (
      <Playground
        propsSchema={propsSchema}
        triggerOnChange={value ? value : '---'}
        README={README}
        state={this.state}
        render={props => (
          <Label>
            <Checkbox
              { ...props }
              onChange={this.handleOnChange}
              checked={value != null}
              value="Checkbox - 1"
            /> Click me!
          </Label>
        )}
        sourceCode={(p, s) => (`
<Label>
  <Checkbox disabled={${p.disabled}} checked={${s.value != null}} value="Checkbox - 1" /> Click me!
</Label>
        `)}
      />
    )
  }

  handleOnChange = (name, value, checked) => {
    this.setState({ value: checked ? value : null })
  }
}
