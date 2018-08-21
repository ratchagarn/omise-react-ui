/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - Confirm/index
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import styled from 'styled-components'

import Button from '../Button'
import Modal from '../Modal'


class Confirm extends Component {
  static defaultProps = {
    isOpen: false,
    labelYes: 'Yes',
    labelNo: 'No',
    onAnswer: () => {},
  }

  render() {
    const {
      isOpen,
      labelYes,
      labelNo,
      children,
    } = this.props

    return (
      <Modal
        isOpen={isOpen}
        showClose={false}
        shouldCloseOnEsc={false}
        shouldCloseOnOverlayClick={false}>
        {children}
        <ContainerAnswer>
          <Button
            type="primary"
            onClick={this.handleOnAnswer(true)}>
            {labelYes}
          </Button>
          <Button
            type="destructive"
            onClick={this.handleOnAnswer(false)}>
            {labelNo}
          </Button>
        </ContainerAnswer>
      </Modal>
    )
  }

  handleOnAnswer = (answer) => () => {
    this.props.onAnswer(answer)
  }
}

export default Confirm


/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */
const ContainerAnswer = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #CCC;
  text-align: right;
`
