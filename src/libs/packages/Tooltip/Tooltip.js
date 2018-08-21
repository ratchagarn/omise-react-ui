/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* UI - Tooltip
* Wrapper component for https://tvkhoa.github.io/testlib
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from 'react-tippy'

import 'react-tippy/dist/tippy.css'


class TooltipCustom extends Component {
  constructor(props) {
    super(props)

    this.state = {
      needToRenderNewComponent: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.position !== this.props.position) {
      this.setState({ needToRenderNewComponent: true }, () => {
        this.setState({ needToRenderNewComponent: false })
      })
    }
  }

  render() {
    const { title, position, disabled, children } = this.props
    const { needToRenderNewComponent } = this.state

    return (
      needToRenderNewComponent
      ? null
      : (
        <Tooltip
          title={title}
          position={position}
          arrow={true}
          animation="fade"
          disabled={disabled}
          trigger="mouseenter">
          {children}
        </Tooltip>
      )
    )
  }
}

export default TooltipCustom
