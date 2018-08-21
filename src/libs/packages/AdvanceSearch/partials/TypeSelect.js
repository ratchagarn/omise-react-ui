/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - AdvanceSearch/partials/TypeSelect
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SelectBox from '../../SelectBox'
import Tooltip from '../../Tooltip'


class TypeSelect extends Component {
  static defaultProps = {
    widthForHideTooltip: 135,
    options: [],
  }

  constructor(props) {
    super(props)

    this.state = {
      tooltipTitle: props.value.label,
      disabledToolTip: false,
    }

    this.tooltipTitleText = null
  }

  componentDidMount() {
    this.handleTooltip()
  }

  render() {
    const { value, options } = this.props
    const { tooltipTitle, disabledToolTip } = this.state

    return (
      <Tooltip
        title={tooltipTitle}
        disabled={disabledToolTip}>
        <SelectBox
          value={value}
          options={options}
          onChange={this.handleOnChange}
        />
        <TooltipTitleText
          innerRef={(node) => this.tooltipTitleText = node}>
          {tooltipTitle}
        </TooltipTitleText>
      </Tooltip>
    )
  }

  handleOnChange = (data) => {
    this.setState({ tooltipTitle: data.label }, () => {
      this.props.onChange(data)
      this.handleTooltip()
    })
  }

  handleTooltip = () => {
    const { widthForHideTooltip } = this.props

    this.setState({
      disabledToolTip: this.tooltipTitleText.offsetWidth <= widthForHideTooltip
    })
  }
}

export default TypeSelect


const Container = styled.div`
  position: relative;
`

const TooltipTitleText = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -9999;
  visibility: hidden;
`
