/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Playground/partials/InputText
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import styled from 'styled-components'


class InputText extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: props.defaultValue,
    }
  }

  render() {
    const { name } = this.props
    const { text } = this.state

    return (
      <Input
        type="text"
        name={name}
        value={text}
        onChange={this.handleOnChange} />
    )
  }

  handleOnChange = (e) => {
    const { name, value } = e.target

    this.setState({ text: value })
    this.props.onChange({ name, value })
  }
}

export default InputText


const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 14px;
  outline: none;
  border: 1px solid #CCC;
  border-radius: 4px;
  transition: .2s;

  &:focus {
    border-color: #1A53F0;
    box-shadow: 0 0 0 2px #1A53F0;
  }
`
