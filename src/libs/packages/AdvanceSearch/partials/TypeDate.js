/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - AdvanceSearch/partials/TypeDate
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import moment from 'moment'

import SelectBox from '../../SelectBox'
import { DatePicker } from '../../DatePicker'
import { Input } from './TypeText'
import { Table, Col, InputStyle } from './UI'


const DATE_FORMAT = 'YYYY-MM-DD'

const options = [
  { label: 'Between', value: 'between' },
  { label: 'Exactly', value: 'exactly' },
  { label: 'Today', value: 'today' },
  { label: 'Yesterday', value: 'yesterday' },
  { label: 'This week', value: 'this_week' },
  { label: 'Last week', value: 'last_week' },
  { label: 'This month', value: 'this_month' },
  { label: 'Last month', value: 'last_month' },
]


class TypeDate extends Component {
  constructor(props) {
    super(props)

    const defaultSelectValue = props.selectedOption ? (
      options.filter((item) => item.value === props.selectedOption)[0]
    ) : options[0]

    let dateA = 0
    let dateB = 0

    if (props.value.indexOf(',') > -1) {
      [ dateA, dateB ] = props.value.split(',')
    }
    else {
      dateA = props.value
    }

    dateA = dateA ? moment(dateA) : moment()
    dateB = dateB ? moment(dateB) : moment()

    this.state = {
      selectedValue: defaultSelectValue,
      dateA,
      dateB: (
        defaultSelectValue.value === 'between' && dateB.diff(dateA, 'days') <= 0
        ? moment(dateA).add(7, 'days')
        : dateB
      ),
    }
  }

  componentDidMount() {
    this.props.onChange(this.setValueForOnChange())
  }

  render() {
    const { dateA, dateB, selectedValue } = this.state
    const isBetween = selectedValue.value === 'between'

    return (
      <EnchantedTable show={true} marginBottom={0}>
        <Col>
          <SelectBox
            value={selectedValue}
            options={options}
            onChange={this.handleOnSelectChange}
          />
        </Col>
        <Col hide={
          selectedValue.value !== 'between' &&
          selectedValue.value !== 'exactly'
        }>
          <EnchantedDatePicker
            selected={dateA}
            placeholderText={isBetween ? 'From' : DATE_FORMAT}
            maxDate={isBetween ? moment(dateB).subtract(1, 'days') : null}
            onChange={this.handleOnDateChange('dateA')}
          />
        </Col>
        <Col hide={selectedValue.value !== 'between'}>
          <EnchantedDatePicker
            selected={dateB}
            placeholderText={isBetween ? 'To' : DATE_FORMAT}
            minDate={isBetween ? moment(dateA).add(1, 'days') : null}
            onChange={this.handleOnDateChange('dateB')}
          />
        </Col>
      </EnchantedTable>
    )
  }

  handleOnSelectChange = (data) => {
    this.setState({ selectedValue: data }, () => {
      const { onChange } = this.props
      const { dateA, dateB, selectedValue } = this.state
      const diffDays = dateB ? dateB.diff(dateA, 'days') : 0

      if (selectedValue.value === 'between' && diffDays <= 0) {
        this.setState({ dateB: moment(dateA).add(1, 'days') }, () => {
          onChange(this.setValueForOnChange())
        })
      }
      else {
        onChange(this.setValueForOnChange())
      }
    })
  }

  handleOnDateChange = (name) => (date) => {
    this.setState({ [name]: date }, () => {
      this.props.onChange(this.setValueForOnChange())
    })
  }

  setValueForOnChange = () => {
    const { dateA, dateB, selectedValue } = this.state
    const newValue = [ moment(dateA).format(DATE_FORMAT) ]

    if (selectedValue.value === 'between') {
      newValue.push(moment(dateB).format(DATE_FORMAT))
    }

    return {
      option: selectedValue.value,
      value: newValue.join(',')
    }
  }
}

export default TypeDate


/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */
const EnchantedTable = styled(Table)`
  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    width: 100%;
  }
`

const EnchantedDatePicker = styled(DatePicker)`${InputStyle}`
