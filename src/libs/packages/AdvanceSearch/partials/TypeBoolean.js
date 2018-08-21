/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - AdvanceSearch/partials/TypeBoolean
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Choice } from './UI'


class TypeBoolean extends Component {
  constructor(props) {
    super(props)

    this.state = {
      yes: props.value,
    }
  }

  render() {
    const { yes } = this.state
    const { value } = this.props

    return (
      <Container>
        <Choice
          active={yes}
          onClick={this.handleOnChoiceClick(true)}>
          YES
        </Choice>
        <Choice
          active={!yes}
          onClick={this.handleOnChoiceClick(false)}>
          NO
        </Choice>
      </Container>
    )
  }

  handleOnChoiceClick = (value) => () => {
    this.setState({ yes: value }, () => {
      this.props.onChange(value)
    })
  }
}

export default TypeBoolean


/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */
const Container = styled.div`
  position: relative;
`
