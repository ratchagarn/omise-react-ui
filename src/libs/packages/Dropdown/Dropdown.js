/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* UI - Checkbox
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {
  Input,
  HelpMessage,
  ErrorMessage,
} from '../TextField'


class Dropdown extends Component {
  static defaultProps = {
    name: null,
    options: [],
    value: '',
    onChange: () => {},
  }

  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  render() {
    const {
      options,
      value,
      disabled,
      helpMessage,
      errorMessage,
      ...restProps,
    } = this.props

    const { open } = this.state

    const dropdownItems = options.map((item, i) => {
      const selected = item.value === value

      if (item.divider) {
        return <DropdownDivider key={i} />
      }

      return (
        <DropdownItem
          key={i}
          data-index={i}
          selected={selected}
          onClick={this.handleOnSelectItem}>
          {item.text}
        </DropdownItem>
      )
    })

    return (
      <Container>
        <InputWrapper>
          <EnchanceTextField
            { ...restProps }
            disabled={disabled}
            onClick={this.handleOnOpen}
            onChange={this.handleOnChange}
            value={value}
            readOnly={true}
          />
          <DropdownList open={open}>
            {dropdownItems}
          </DropdownList>
          <Caret open={open} disabled={disabled} />
        </InputWrapper>
        <HelpMessage show={helpMessage && !errorMessage}>{helpMessage}</HelpMessage>
        <ErrorMessage show={errorMessage}>{errorMessage}</ErrorMessage>
        <Backdrop open={open} onClick={this.handleCloseDropdown} />
      </Container>
    )
  }

  handleOnOpen = () => {
    this.setState(({ open }) => ({ open: !open }))
  }

  handleCloseDropdown = () => {
    this.setState({ open: false })
  }

  handleOnSelectItem = (e) => {
    const { options, name, onChange } = this.props
    const index = e.target.getAttribute('data-index')
    const value = options[index].value

    this.handleCloseDropdown()
    onChange(name, value)
  }
}

export default Dropdown


/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */
const Container = styled.div`
  position: relative;
  display: inline-block;
`

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
`

const EnchanceTextField = styled(Input)`
  position: 'relative';
  z-index: 2;
  min-width: 200px;
  margin-top: 0;
  padding-right: 25px;
  cursor: pointer;
  user-select: none;
`

const Caret = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #666;
  opacity: ${props => props.disabled ? '.4' : null};
  cursor: pointer;
  user-select: none;
  transform: ${props => props.open ? 'rotate(180deg)' : null};
  transition: .2s;
`

const Backdrop = styled.div`
  display: ${props => props.open ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  user-select: none;
  cursor: pointer;
`

const DropdownList = styled.div`
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  position: absolute;
  top: 100%;
  left: 0;
  z-index: ${props => props.open ? 3 : -1};
  width: 100%;
  max-height: 126px;
  margin-top: 5px;
  background-color: white;
  border-radius: 2px;
  overflow-y: auto;
  opacity: ${props => props.open ? 1 : 0};
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  transition: .2s;
`

const DropdownItem = styled.div`
  position: relative;
  padding: 10px;
  background-color: transparent;
  color: ${props => props.selected ? 'blue' : 'inherit'};
  cursor: pointer;
  user-select: none;
  transition: background-color .2s;

  &:hover {
    background-color: #F9F9F9;
  }

  &:before {
    content: '✓';
    float: right;
    color: blue;
    opacity: ${props => props.selected ? 1 : 0};
    transition: opacity .2s .2s;
  }
`

const DropdownDivider = styled.div`
  margin: 5px 10px;
  height: 1px;
  background-color: #CCC;
`
