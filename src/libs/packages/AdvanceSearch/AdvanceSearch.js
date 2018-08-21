/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - AdvanceSearch
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  getSchemaDataById,
  processFilterItemsEngine,
} from './helpers'
import FilterGenerator from './partials/FilterGenerator'
import FilterSuggestions from './partials/FilterSuggestions'

import Button from '../Button'


class AdvanceSearch extends Component {
  static propTypes = {
    schema: PropTypes.array.isRequired,
    suggestions: PropTypes.array,
    addMoreLabel: PropTypes.string,
    expandedFilter: PropTypes.bool,
    processQueryDelay: PropTypes.number,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    schema: [],
    suggestions: [],
    addMoreLabel: 'Add more filter',
    expandedFilter: false,
    processQueryDelay: 250,
    onChange: () => {},
  }

  constructor(props) {
    super(props)

    this.state = {
      showFilter: props.expandedFilter,
      filterItems: [],
    }

    this.processQueryTimer = null
  }

  render() {
    const {
      schema,
      suggestions,
      addMoreLabel,
      expandedFilter,
    } = this.props

    const {
      showFilter,
      filterItems,
    } = this.state

    const isReachToLimit = filterItems.length === schema.length

    return (
      <Container>
        <FilterControlPanel show={!showFilter}>
          <FilterSuggestions
            suggestions={suggestions}
            onChange={this.handleOnSuggestionsChange}
          />
          <ExpandFilterControlButton
            onClick={this.handleOpenFilter}>
            Advance Search
          </ExpandFilterControlButton>
        </FilterControlPanel>

        <FilterContainer show={showFilter} expandedFilter={expandedFilter}>
          {
            !expandedFilter &&
            <CloseFilter onClick={this.handleCloseFilter}>×</CloseFilter>
          }
          <FilterGenerator
            schema={schema}
            filterItems={filterItems}
            onFilterSelect={this.handleOnFilterSelect}
            onFilterChange={this.handleOnFilterChange}
            onFilterDelete={this.handleOnFilterDelete}
          />
          <AddMoreFilter>
            <Button
              type="primary"
              size="sm"
              disabled={isReachToLimit}
              onClick={this.handleOnAddMoreClick}>
              {addMoreLabel}
            </Button>
          </AddMoreFilter>
        </FilterContainer>
      </Container>
    )
  }

  handleOpenFilter = () => {
    this.setState({ showFilter: true })
  }

  handleCloseFilter = () => {
    this.setState({ showFilter: false }, () => {
      this.setState({ filterItems: [] }, () => this.processFilterItem())
    })
  }

  handleOnSuggestionsChange = (filterItems) => {
    this.setState({
      showFilter: true,
      filterItems: [ ...filterItems ],
    })
  }

  handleOnFilterSelect = (id, type, index) => {
    const updatedFilterItem = [ ...this.state.filterItems ]
    updatedFilterItem[index].id = id
    updatedFilterItem[index].type = type

    const schemaData = getSchemaDataById(id, this.props.schema)
    const { defaultValue, defaultOption } = schemaData
    updatedFilterItem[index].value = defaultValue
    updatedFilterItem[index].option = defaultOption ? defaultOption : null

    this.setState({ filterItems: updatedFilterItem }, () => {
      this.processFilterItem()
    })
  }

  handleOnFilterChange = (id, value, option) => {
    const updatedFilterItem = [ ...this.state.filterItems ]

    updatedFilterItem.map((item) => {
      if (item.id === id) {
        item.value = value

        if (option) {
          item.option = option
        }
      }
    })

    this.setState({ filterItems: updatedFilterItem }, () => {
      this.processFilterItem()
    })
  }

  handleOnFilterDelete = (deleteIndex) => {
    const updatedFilterItem = [ ...this.state.filterItems ]
    updatedFilterItem.splice(deleteIndex, 1)

    this.setState({ filterItems: updatedFilterItem }, () => {
      this.processFilterItem()
    })
  }

  handleOnAddMoreClick = () => {
    const { schema } = this.props
    const { filterItems } = this.state

    if (filterItems.length === schema.length) { return }

    const updatedFilterItems = [ ...filterItems ]
    updatedFilterItems.push({
      id: null,
      type: null,
      option: null,
      value: '',
    })

    this.setState({ filterItems: updatedFilterItems }, () => {
      this.processFilterItem()
    })
  }

  processFilterItem = (filterItems) => {
    clearTimeout(this.processQueryTimer)

    this.processQueryTimer = setTimeout(() => {
      const filterItemsData = filterItems || this.state.filterItems
      const query = processFilterItemsEngine(filterItemsData)

      this.props.onChange(query, filterItemsData)
    }, this.props.processQueryDelay)
  }
}

export default AdvanceSearch


/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */
const Container = styled.div`
  position: relative;
`

const ExpandFilterControlButton = styled.span`
  float: right;
  color: #2761E8;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const FilterControlPanel = styled.div`
  display: ${props => props.show ? 'block' : 'none'};

  &:after {
    content: '';
    clear: both;
    display: table;
  }
`

const FilterContainer = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
`

const CloseFilter = styled.div`
  position: relative;
  z-index: 10;
  float: right;
  width: 16px;
  height: 16px;
  margin-bottom: 10px;
  background-color: black;
  color: white;
  font-size: 12px;
  text-align: center;
  line-height: 16px;
  cursor: pointer;
  border-radius: 50%;
`

const AddMoreFilter = styled.div`
  position: relative;
  margin-left: 34px;

  &:before {
    content: '×';
    position: absolute;
    top: 50%;
    left: -26px;
    width: 16px;
    height: 16px;
    background-color: #333;
    text-align: center;
    border-radius: 50%;
    color: white;
    pointer-events: none;
    transform: translateY(-50%) rotate(45deg);
  }
`

const Pre = styled.pre`
  padding: 10px;
  border: 1px solid #CCC;
  background-color: #333;
  color: #EEE;
  border-radius: 4px;
`
