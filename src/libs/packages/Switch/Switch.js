/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* UI - Switch
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'


const noop = () => {}


class Switch extends Component {
  static defaultProps = {
    disabled: false,
    checked: false,
  }

  static propTypes = {
    name: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    const { checked } = props

    this.state = {
      checked,
    }
  }

  render() {
    const { name, disabled } = this.props
    const { checked } = this.state

    return (
      <Container>
        <SwitchButton disabled={disabled} checked={checked}>
          <SwitchButton.toggle disabled={disabled} checked={checked} />
        </SwitchButton>
        <Input
          type="checkbox"
          name={name}
          disabled={disabled}
          checked={checked}
          onChange={this.handleOnChange}
        />
      </Container>
    )
  }

  handleOnChange = (e) => {
    const { name, checked } = e.target
    const { onChange } = this.props

    this.setState({ checked }, () => {
      (onChange || noop)({ name, value: checked })
    })
  }
}

export default Switch

const activeBgColor = 'green'


const Container = styled.label`
  display: inline-block;
  overflow: hidden;
`

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -9999;
  visibility: hidden;
`

const SwitchButton = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
  width: 44px;
  height: 24px;
  ${props => {
    if (props.disabled) {
      return css`
        background-color: #EFEFEF;
      `
    }
    else if (props.checked) {
      return css`
        background-color: ${activeBgColor};
      `
    }
    else {
      return css`
        background-color: #CCC;
      `
    }
  }}
  border-radius: 12px;
  cursor: pointer;
  transition: .2s;
`

SwitchButton.toggle = styled.span`
  position: absolute;
  top: 3px;
  left: 4px;
  width: 18px;
  height: 18px;
  background-color: ${props => props.disabled ? '#CCC' : 'white'};
  text-align: center;
  border-radius: 50%;
  transform: ${props => props.checked ? 'translateX(100%)' : 'translateX(0)'};
  transition: .2s;

  &:before {
    content: '✓';
    color: ${props => props.disabled ? '#AAA' : activeBgColor};
    font-size: 12px;
    opacity: ${props => props.checked ? 1 : 0};
    transition: .1s;
  }
`
