/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - AdvanceSearch/partials/TypeNumber
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { isNumber } from '../helpers'
import SelectBox from '../../SelectBox'
import { Table, Col, Input } from './UI'


const options = [
  { label: 'Equal', value: 'equal' },
  { label: 'Between', value: 'between' },
  { label: 'Greater than', value: 'greater_than' },
  { label: 'Less than', value: 'less_than' },
]


class TypeNumber extends Component {
  constructor(props) {
    super(props)

    const defaultSelectValue = props.selectedOption ? (
      options.filter((item) => item.value === props.selectedOption)[0]
    ) : options[0]

    let numberA = ''
    let numberB = ''

    if (typeof props.value === 'string' && props.value.indexOf(',') > -1) {
      [ numberA, numberB ] = props.value.split(',')
    }
    else {
      numberA = props.value
    }

    numberA = isNumber(numberA) ? parseFloat(numberA, 10) : ''
    numberB = isNumber(numberB) ? parseFloat(numberB, 10) : ''

    this.state = {
      selectedValue: defaultSelectValue,
      numberA: isNumber(numberA) ? parseFloat(numberA, 10) : '',
      numberB: (
        defaultSelectValue.value === 'between' && numberB && numberB <= numberA
        ? numberA + 10
        : numberB
      ),
    }
  }

  componentDidMount() {
    this.props.onChange(this.setValueForOnChange())
  }

  render() {
    const { numberA, numberB, selectedValue } = this.state

    return (
      <Table show={true} marginBottom={0}>
        <Col>
          <SelectBox
            value={selectedValue}
            options={options}
            onChange={this.handleOnSelectChange}
          />
        </Col>
        <Col>
          <Input
            type="text"
            name="numberA"
            placeholder={this.setPlaceholderText('numberA')}
            value={numberA}
            onChange={this.handleOnInputChange}
            onKeyPress={this.handleOnKeyPress}
            onBlur={this.handleOnBlur}
          />
        </Col>
        <Col hide={selectedValue.value !== 'between'}>
          <Input
            type="text"
            name="numberB"
            placeholder={this.setPlaceholderText('numberB')}
            value={numberB}
            onChange={this.handleOnInputChange}
            onKeyPress={this.handleOnKeyPress}
            onBlur={this.handleOnBlur}
          />
        </Col>
      </Table>
    )
  }

  handleOnKeyPress = (event) => {
    const n = String.fromCharCode(event.which)

    if (!/\d|\./.test(n)) {
      event.preventDefault()
    }
  }

  handleOnBlur = (event) => {
    const { onChange } = this.props
    const { numberA, numberB } = this.state
    const { name, value } = event.target
    const newState = {}

    if (value === '') {
      newState[name] = 0
    }

    if (numberA >= numberB) {
      newState.numberB = numberA + 10
    }

    this.setState(newState, () => {
      onChange(this.setValueForOnChange())
    })
  }

  handleOnSelectChange = (data) => {
    this.setState({ selectedValue: data }, () => {
      this.props.onChange(this.setValueForOnChange())
    })
  }

  handleOnInputChange = (event) => {
    const { name, value } = event.target
    const parseValue = parseFloat(value, 10)
    const newState = {
      [name]: isNaN(parseValue) ? '' : parseValue
    }

    this.setState(newState, () => {
      this.props.onChange(this.setValueForOnChange())
    })
  }

  setPlaceholderText = (type) => {
    const { selectedValue } = this.state

    if (selectedValue.value === 'between') {
      if (type === 'numberA') {
        return 'Start'
      }
      else if (type === 'numberB') {
        return 'End'
      }
    }
    else {
      return this.props.placeholder
    }
  }

  setValueForOnChange = () => {
    const { numberA, numberB, selectedValue } = this.state
    const newValue = [ numberA ]

    if (selectedValue.value === 'between') {
      newValue.push(numberB)
    }

    return {
      option: selectedValue.value,
      value: newValue.join(',')
    }
  }
}

export default TypeNumber
