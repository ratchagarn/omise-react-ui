/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Playground/partials/InputGroup
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import styled from 'styled-components'
import ButtonGroup from '../../../libs/packages/ButtonGroup'


class InputGroup extends Component {
  static defaultProps = {
    vertical: false,
  }

  constructor(props) {
    super(props)

    this.state = {
      selectedValue: props.defaultValue,
    }
  }

  render() {
    const { name, value, vertical, onChange } = this.props
    const { selectedValue } = this.state

    return (
      <ButtonGroup
        name={name}
        items={value}
        vertical={vertical}
        defaultValue={selectedValue}
        onChange={this.handleOnChange}
      />
    )
  }

  handleOnChange = (name, value) => {
    this.setState({ selectedValue: value })
    this.props.onChange({ name, value })
  }
}

export default InputGroup
