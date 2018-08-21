/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Playground/partials/InputNumber
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import InputNumber from '../../../libs/packages/InputNumber'


class InputNumberType extends Component {
  constructor(props) {
    super(props)

    this.state = {
      number: props.value,
    }
  }

  render() {
    const { name } = this.props
    const { number } = this.state

    return (
      <InputNumber
        name={name}
        value={number}
        onChange={this.handleOnChange} />
    )
  }

  handleOnChange = (name, value) => {
    this.setState({ number: value })
    this.props.onChange({ name, value })
  }
}

export default InputNumberType
