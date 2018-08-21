/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* UI - Modal
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const ESC_KEY = 27
const ANIMATION_DELAY = 300


class Modal extends React.Component {
  static defaultProps = {
    isOpen: false,
    showClose: true,
    shouldCloseOnEsc: true,
    shouldCloseOnOverlayClick: true,
    onClose: () => {},
    onAfterOpen: () => {},
    onAfterClose: () => {},
  }

  constructor(props) {
    super(props);

    this.el = document.createElement('div')
    this.el.className = 'Modal'
    this.appElement = (
      props.appElement
      ? document.querySelector(props.appElement)
      : document.body
    )

    this.Container = null
    this.animationTimer = null
  }

  componentDidMount() {
    this.appElement.appendChild(this.el)
  }

  componentWillUnmount() {
    this.appElement.removeChild(this.el)
    clearTimeout(this.animationTimer)
  }

  componentWillReceiveProps(nextProps) {
    const { isOpen } = nextProps
    if (isOpen === this.props.isOpen) { return }

    if (isOpen) {
      this.animationTimer = setTimeout(() => {
        this.props.onAfterOpen()
        this.Container.focus()
      }, ANIMATION_DELAY)
    }
    else {
      this.animationTimer = setTimeout(() => {
        this.props.onAfterClose()
      }, ANIMATION_DELAY)
    }
  }

  render() {
    const { isOpen, showClose, children } = this.props

    return createPortal(
      <Container
        innerRef={node => this.Container = node}
        tabIndex="-1"
        isOpen={isOpen}
        onKeyDown={this.handleOnKeyDown}>
        <Overlay isOpen={isOpen} onClick={this.handleOnOverlayClick} />
        <Body isOpen={isOpen}>
          {showClose && <Close onClick={this.handleOnCloseClick}>×</Close>}
          {children}
        </Body>
      </Container>,
      this.el,
    )
  }

  handleOnOverlayClick = () => {
    if (this.props.shouldCloseOnOverlayClick) {
      this.props.onClose()
    }
  }

  handleOnCloseClick = () => {
    this.props.onClose()
  }

  handleOnKeyDown = (event) => {
    if (this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
      event.stopPropagation()
      this.props.onClose()
    }
  }
}

export default Modal


/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */
const baseZindex = 9999

const Container = styled.div`
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${props => props.isOpen ? 99999 : -99999};
  transition: ${props => props.isOpen ? null : 'all .2s .4s'};
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${baseZindex - 1};
  background-color: black;
  opacity: ${props => props.isOpen ? .4 : 0};
  transition: opacity .2s;
`

const Body = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: ${baseZindex};
  width: 600px;
  padding: 20px;
  background-color: white;
  border-radius: 4px;
  opacity: ${props => props.isOpen ? 1 : 0};
  box-shadow: 0 0 16px rgba(255, 255, 255, .4);
  transform: ${props => props.isOpen
    ? 'translateX(-50%) translateY(-50%) scale(1)'
    : 'translateX(-50%) translateY(-50%) scale(.6)'
  };
  transition: ${ANIMATION_DELAY / 1000}s cubic-bezier(0.175, 0.885, 0.320, 1.275);
`

const Close = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 16px;
  height: 16px;
  background-color: transparent;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
  border-radius: 2px;
  transition: .2s;

  &:hover {
    background-color: #EFEFEF;
  }
`
