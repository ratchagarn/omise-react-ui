/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* UI - SelectBox
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component } from 'react'
import Select from 'react-select'


const SelectBox = ({
  name,
  onChange,
  options,
  disabled,
  className,
  ...restProps,
}) => (
  <Select
    name={name}
    className={className}
    onChange={onChange}
    options={options}
    isDisabled={disabled}
    { ...restProps }
  />
)

export default SelectBox
