/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* UI - Radio
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


export const Radio = ({ disabled, checked, onChange, ...rest }) => {
  return (
    <Container disabled={disabled}>
      <Input
        type="radio"
        disabled={disabled}
        checked={checked}
        onChange={handleOnChange}
        { ...rest } />
      <CheckMark />
    </Container>
  )

  function handleOnChange(event) {
    const { name, value } = event.target
    onChange(name, value)
  }
}

Radio.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default Radio


const Container = styled.span`
  display: inline-block;
  position: relative;
  min-height: 12px;
  margin-right: 4px;
  padding-left: 10px;
  user-select: none;
`

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;

  &:checked ~ span {
    border-color: blue;

    &:after {
      opacity: 1;
    }
  }
`

const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 14px;
  width: 14px;
  border: 1px solid #CCC;
  border-radius: 50%;
  transition: border-color .2s;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    background-color: blue;
    opacity: 0;
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
    transition: .2s;
  }
`
