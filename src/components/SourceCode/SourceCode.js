/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Playground
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import copy from 'copy-to-clipboard'

import CodeBlock from '../CodeBlock'


class SourceCode extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showNotification: false,
    }

    this.timer = null
  }

  render() {
    const { children } = this.props
    const { showNotification } = this.state;

    return (
      <Container>
        <Notification show={showNotification}>Copied!</Notification>
        <Title>Source Code</Title>
        <CodeWrapper>
          <CodeBlock>{children.trim()}</CodeBlock>
          <CopyToClipBoard onClick={this.handleOnCopy}>
            Copy
          </CopyToClipBoard>
        </CodeWrapper>
      </Container>
    )
  }

  handleOnCopy = () => {
    const { showNotification } = this.state

    if (showNotification) {
      return
    }

    copy(this.props.children)

    clearTimeout(this.timer)

    this.setState({ showNotification: true }, () => {
      this.timer = setTimeout(() => {
        this.setState({ showNotification: false })
      }, 1500)
    })
  }
}

export default SourceCode


const Container = styled.div`
  margin-top: 40px;
  position: relative;
  overflow: hidden;
`

const CodeWrapper = styled.div`
  position: relative;
`

const Notification = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  padding: 12px 10px;
  background-color: red;
  color: white;
  text-align: center;
  transform: ${props => props.show ? 'translateY(0)' : 'translateY(-100%)'};
  transition: .1s;
`

const CopyToClipBoard = styled.a`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  border: 1px solid #CCC;
  font-size: 12px;
  border-radius: 2px;
  cursor: pointer;
  user-select: none;
`

const Title = styled.h5`
  clear: both;
  font-size: 16px;
  text-transform: uppercase;
`
