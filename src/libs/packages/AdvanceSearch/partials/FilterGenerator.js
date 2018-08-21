/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - AdvanceSearch/partials/FilterGenerator
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getSchemaDataById, createFilterKey } from '../helpers'

import SelectBox from '../../SelectBox'
import FilterTypeSwitcher from './FilterTypeSwitcher'


const FilterGenerator = ({
  schema,
  filterItems,
  onFilterSelect,
  onFilterChange,
  onFilterDelete
}) => {
  const filters = filterItems.map((filter, index) => {
    const selectOptions = []

    schema.forEach((item) => {
      const matched = filterItems.filter((f) => f.id === item.id)

      if (matched.length === 0) {
        selectOptions.push({
          label: item.displayName,
          value: createFilterKey(item.id, item.type),
        })
      }
    })

    const selectedValue = filter.id == null ? null : {
      label: getSchemaDataById(filter.id, schema).displayName,
      value: createFilterKey(filter.id, filter.type),
    }

    return (
      <Filter key={index}>
        <ColDelete>
          <Delete onClick={handleOnDelete(index)}>×</Delete>
        </ColDelete>
        <Col>
          <SelectBox
            value={selectedValue}
            options={selectOptions}
            onChange={(e) => handleOnSelectFilter(e, index)}
          />
        </Col>
        <Col width={needToWidthAuto(filter.type) ? 'auto' : null}>
          <FilterTypeSwitcher
            schema={schema}
            filter={filter}
            onChange={onFilterChange} />
        </Col>
      </Filter>
    )
  })

  return (
    <Container show={filters.length}>
      {filters}
    </Container>
  )

  function handleOnSelectFilter(data, index) {
    if (data.length && data.length === 0) { return }

    const [ id, type ] = data.value.split(':')

    if (id && type) {
      onFilterSelect(id, type, index)
    }
    else {
      onFilterSelect(null, null, index)
    }
  }

  function handleOnDelete(index) {
    return () => onFilterDelete(index)
  }

  function needToWidthAuto(filterType) {
    return /choices|boolean/.test(filterType)
  }
}

export default FilterGenerator


/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */
const Container = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  width: 100%;
  margin-bottom: 20px;
`

const Filter = styled.div`
  display: table;
  width: 100%;

  &:after {
    content: '';
    clear: both;
    display: table;
  }
`

const Col = styled.div`
  display: table-cell;
  width: ${props => props.width ? props.width : '200px'};
  min-width: ${props => props.width ? props.width : '200px'};
  padding: 4px;
  text-align: ${props => props.align ? props.align : null};
  vertical-align: middle;
`

const ColDelete = styled.div`
  display: table-cell;
  width: 30px;
  min-width: 30px;
  padding: 4px;
  text-align: center;
  vertical-align: middle;
`

const Delete = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: #333;
  text-align: center;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  transition: background-color .2s;

  &:hover {
    background-color: red;
  }
`
