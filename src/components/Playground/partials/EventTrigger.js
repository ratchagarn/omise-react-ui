/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Playground/partials/EventTrigger
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { shallowCompare } from '../../helpers'


class EventTrigger extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      flash: false,
    }

    this.timer = null
  }

  componentWillReceiveProps(nextProps) {
    clearTimeout(this.timer)

    if (shallowCompare(this.props, nextProps)) {
      this.setState({ flash: true }, () => {
        this.timer = setTimeout(() => {
          this.setState({ flash: false })
        }, 500)
      })
    }
    else {
      this.setState({ flash: false })
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    const { onChangeMessage } = this.props
    const { flash } = this.state

    return (
      <EventTriggerField flash={flash}>
        {
          onChangeMessage
            ? onChangeMessage
            : <WaitingForTrigger>Waiting for trigger</WaitingForTrigger>
        }
      </EventTriggerField>
    )
  }
}

export default EventTrigger


const EventTriggerField = styled.div`
  padding: 5px 10px;
  background-color: ${props => props.flash ? '#1A53F0' : 'transparent'};
  color: ${props => props.flash ? 'white' : 'inherit'};
  box-shadow: ${props => props.flash ? '0 0 10px rgba(26, 83, 240, .8)' : 'none'};
  border-radius: 2px;
  transition: .4s;
`

const WaitingForTrigger = styled.span`
  display: inline-block;
  color: #999;
  font-size: 12px;
  font-style: italic;
`
