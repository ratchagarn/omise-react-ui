/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* UI - Input
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'


const TextField = ({
  onChange,
  disabled,
  placeholder,
  helpMessage,
  errorMessage,
  ...rest,
}) => (
  <Container>
    <Input
      type="text"
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      helpMessage={helpMessage}
      errorMessage={errorMessage}
      { ...rest }
    />
    <HelpMessage show={helpMessage && !errorMessage}>{helpMessage}</HelpMessage>
    <ErrorMessage show={errorMessage}>{errorMessage}</ErrorMessage>
  </Container>
)

TextField.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default TextField


const Container = styled.div`
  position: relative;
`

export const inputTextStyle = `
  display: block;
  width: 100%;
  margin-top: ${props => props.marginTop ? props.marginTop : '15px'};
  padding: 0 0 8px 0;
  border: 0;
  border-bottom: 2px solid #CCC;
  background: transparent;
  font-size: 14px;
  outline: none;
  opacity: ${props => props.disabled ? '.4' : null};
  transition: .2s;
  ${props => props.errorMessage && (
    css`
      border-color: red !important;
    `
  )}

  &:focus {
    border-color: blue;
  }

  &::-webkit-input-placeholder {
    color: #AAA;
  }
  &::-moz-placeholder {
    color: #AAA;
  }
  &:-ms-input-placeholder {
    color: #AAA;
  }
  &:-moz-placeholder {
    color: #AAA;
  }
`

export const Input = styled.input`${inputTextStyle}`

export const HelpMessage = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  margin-top: 5px;
  color: #AAA;
  font-size: 12px;
`

export const ErrorMessage = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  margin-top: 5px;
  color: red;
  font-size: 12px;
`
