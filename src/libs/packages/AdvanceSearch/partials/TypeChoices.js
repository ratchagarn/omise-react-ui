/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - AdvanceSearch/partials/TypeChoices
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Choice } from './UI'


class TypeChoices extends Component {
  static defaultProps = {
    items: [],
  }

  constructor(props) {
    super(props)

    const { value, items } = props

    this.state = {
      selectedValue: value ? value : items[0].value,
    }
  }

  render() {
    const { selectedValue } = this.state
    const { items } = this.props

    const choices = items.map((item, index) => (
      <Choice
        key={index}
        active={selectedValue === item.value}
        onClick={this.handleOnChoiceClick(item.value)}>
        {item.label}
      </Choice>
    ))

    return (
      <Container>
        {choices}
      </Container>
    )
  }

  handleOnChoiceClick = (value) => () => {
    this.setState({ selectedValue: value }, () => {
      this.props.onChange(value)
    })
  }
}

export default TypeChoices


/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */
const Container = styled.div`
  position: relative;
`
