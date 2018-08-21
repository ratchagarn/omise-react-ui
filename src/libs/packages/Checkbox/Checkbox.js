/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* UI - Checkbox
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const Checkbox = ({ disabled, checked, onChange, ...rest }) => {
  return (
    <Container>
      <Input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={handleOnChange}
        { ...rest }
       />
      <CheckMark disabled={disabled} />
    </Container>
  )

  function handleOnChange(event) {
    const { name, value, checked } = event.target
    onChange(name, value, checked)
  }
}

Checkbox.defaultProps = {
  onChange: () => {},
}

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default Checkbox


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
    border-color: ${props => props.disabled ? '#CCC' : 'blue'};

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
  background-color: ${props => props.disabled ? '#CCC' : 'transparent'};
  transition: .2s;

  &:after {
    content: '';
    position: absolute;
    top: 25%;
    left: 25%;
    width: 5px;
    height: 10px;
    border: solid ${props => props.disabled ? '#999' : 'blue'};;
    border-width: 0 2px 2px 0;
    opacity: 0;
    transform: rotate(45deg) translateX(-25%) translateY(-25%);
    transition: .2s;
  }
`
