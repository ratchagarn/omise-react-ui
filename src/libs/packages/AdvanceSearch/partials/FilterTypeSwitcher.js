/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - AdvanceSearch/partials/FilterTypeSwitcher
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getSchemaDataById } from '../helpers'

import TypeBoolean from './TypeBoolean'
import TypeChoices from './TypeChoices'
import TypeDate    from './TypeDate'
import TypeNumber  from './TypeNumber'
import TypeSelect  from './TypeSelect'
import TypeText    from './TypeText'


const FilterTypeSwitcher = ({ filter, schema, onChange }) => {
  let result = null

  const schemaData = getSchemaDataById(filter.id, schema)
  const { displayName, defaultValue } = schemaData

  if (filter.type === 'boolean') {
    result = (
      <TypeBoolean
        value={filter.value}
        onChange={handleOnChoiceChange}
      />
    )
  }
  else if (filter.type === 'choices') {
    const { items } = schemaData

    result = (
      <TypeChoices
        items={items}
        value={filter.value}
        onChange={handleOnChoiceChange}
      />
    )
  }
  else if (filter.type === 'text') {
    result = (
      <TypeText
        placeholder={displayName}
        value={filter.value}
        onChange={handleOnTypeTextChange}
      />
    )
  }
  else if (filter.type === 'number') {
    result = (
      <TypeNumber
        placeholder={displayName}
        value={filter.value}
        selectedOption={filter.option}
        onChange={handleOnTypeNumberChange}
      />
    )
  }
  else if (filter.type === 'date') {
    return (
      <TypeDate
        value={filter.value}
        selectedOption={filter.option}
        onChange={handleOnTypeDateChange}
      />
    )
  }
  else if (filter.type === 'select') {
    const { options } = schemaData
    const selectedValue = (
      options.filter((item) => item.value === filter.value)[0]
    )

    result = (
      <TypeSelect
        value={selectedValue}
        options={options}
        onChange={handleOnTypeSelectChange}
      />
    )
  }

  return result


  function handleOnTypeSelectChange(data) {
    onChange(filter.id, data.value)
  }

  function handleOnTypeTextChange(value) {
    onChange(filter.id, value)
  }

  function handleOnTypeNumberChange(data) {
    onChange(filter.id, data.value, data.option)
  }

  function handleOnTypeDateChange(data) {
    onChange(filter.id, data.value, data.option)
  }

  function handleOnChoiceChange(value) {
    onChange(filter.id, value)
  }
}

export default FilterTypeSwitcher
