/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - AdvanceSearch/partials/FilterSuggestions
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const FilterSuggestions = ({ suggestions, onChange }) => {
  const output = suggestions.map((item, i) => (
    <Item
      key={`${item.name}-${i}`}
      onClick={handleOnClick(item.filterItems)}>
      {item.name}
    </Item>
  ))

  return (
    <Container>
      <Title>Suggestion:</Title>
      {output}
    </Container>
  )

  function handleOnClick(filterItems) {
    return () => onChange(filterItems)
  }
}

export default FilterSuggestions


/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */
const Container = styled.div`
  float: left;
`

const Title = styled.span`
  display: inline-block;
  margin-right: 7px;
  font-size: 12px;
`

const Item = styled.span`
  display: inline-block;
  margin-right: 7px;
  color: #2761E8;
  font-size: 12px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`
