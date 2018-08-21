/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - InputNumber
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const InputNumber = ({ name, value, onChange, step, maxLength, showNav }) => {
  return (
    <Container>
      <Input
        type="text"
        name={name}
        value={value}
        maxLength={maxLength}
        onKeyPress={handleOnKeyPress}
        onChange={handleOnChange}
        showNav={showNav}
      />
      { showNav && (
        <Control>
          <Step onClick={handleOnStepClick('+', name)}>+</Step>
          <Step onClick={handleOnStepClick('-', name)}>-</Step>
        </Control>
      )}
    </Container>
  )

  function handleOnKeyPress(e) {
    const n = String.fromCharCode(e.which)

    if (!/^\d*\.?\d*$/.test(n)) {
      e.preventDefault()
    }
  }


  function handleOnStepClick(type, name) {
    return () => {
      let newValue = value

      if (type === '+') {
        newValue += parseFloat(step, 10)
      }
      else if (type === '-') {
        newValue -= parseFloat(step, 10)
      }

      const event = {
        target: {
          name,
          value: newValue,
        }
      }

      handleOnChange(event)
    }
  }

  function handleOnChange(e) {
    const { name, value } = e.target

    onChange(name, validateNumber(value))
  }
}

InputNumber.propTypes = {
  value: PropTypes.number,
  defaultValue: PropTypes.number,
  step: PropTypes.number,
  maxLength: PropTypes.number,
  showNav: PropTypes.bool,
  onChange: PropTypes.func,
}

InputNumber.defaultProps = {
  step: 1,
  maxLength: 7,
  showNav: true,
  onChange: () => {},
}

export default InputNumber


function validateNumber(n) {
  return isNaN(Number(n)) ? 0 : Number(n)
}


/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */
const Container = styled.div`
  position: relative;
  display: inline-block;
`

const Input = styled.input`
  width: ${props => props.showNav ? '110px' : '70px'};
  padding: ${props => props.showNav ? '7px 40px 7px 10px' : '7px 10px'};
  border: 1px solid #CCC;
  font-size: 14px;
  border-radius: 2px;
  outline: none;
  transition: .2s;
`

const Control = styled.div`
  position: absolute;
  top: 1px;
  right: 1px;
  width: 30px;
  height: calc(100% - 2px);
  border-left: 1px solid #CCC;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #CCC;
  }
`

const Step = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: #EAEAEA;
  text-align: center;
  cursor: pointer;
  user-select: none;
  transition: background-color .2s;

  &:hover {
    background-color: #EFEFEF;
  }

  &:last-child {
    top: 50%;
  }
`
