/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - DatePicker/ExampleController
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import Playground from '../../components/Playground/Playground'

import DatePicker from '../../libs/packages/DatePicker'
import README from '../../libs/packages/DatePicker/README.md'


const propsSchema = [
  {
    propName: 'placeholderText',
    type: 'text',
    defaultValue: 'Placeholder text',
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
      onChangeMessage: null,
      selectedDate: null,
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
          <DatePicker
            { ...props }
            selected={this.state.selectedDate}
            onChange={this.handleOnDateChange}
          />
        )}
        sourceCode={(p, s) => (`
<DatePicker
  disabled={${p.disabled}}
  placeholderText="${p.placeholderText}"
  selected={this.state.selectedDate}
  onChange={this.handleOnDateChange}
/>
        `)}
      />
    )
  }

  handleOnDateChange = (date) => {
    this.setState({ selectedDate: date, onChangeMessage: date.toString() })
  }
}
