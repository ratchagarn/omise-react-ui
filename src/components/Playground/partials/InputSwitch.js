/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Playground/partials/InputCheckbox
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import Switch from '../../../libs/packages/Switch'

class InputCheckbox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: props.defaultValue,
    }
  }

  render() {
    const { name, defaultValue } = this.props
    const { checked } = this.state

    return (
      <Switch
        name={name}
        onChange={this.handleOnChange}
        checked={checked} />
    )
  }

  handleOnChange = (data) => {
    this.setState({ checked: data.value })
    this.props.onChange(data)
  }
}

export default InputCheckbox
