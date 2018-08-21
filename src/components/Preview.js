/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Preview
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import bgTransparentPatterns from '../images/bg-transparent-patterns.jpg'


export default class Preview extends Component {
  static defaultProps = {
    bgTransparent: true,
  }

  constructor(props) {
    super(props)

    this.state = {
      bgTransparent: props.bgTransparent,
    }
  }

  render() {
    const { code, scope, children } = this.props
    const { bgTransparent } = this.state

    return (
      <Container>
        <SwitchBg
          bgTransparent={bgTransparent}
          onClick={this.handleOnClickSwitchBg}
        />
        <PreviewArea bgTransparent={bgTransparent}>{children}</PreviewArea>
      </Container>
    )
  }

  handleOnClickSwitchBg = (bgTransparent) => {
    this.setState({ bgTransparent })
  }
}


const SwitchBg = ({ bgTransparent, onClick }) => (
  <ContainerSwitchBg>
    <label>
      <input
        type="checkbox"
        checked={bgTransparent}
        onChange={(e) => {
          onClick(e.target.checked)
        }}
      /> Transparent
    </label>
  </ContainerSwitchBg>
)

const Container = styled.div`
  position: relative;
  padding-top: 30px;
`

const ContainerSwitchBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  > label {
    margin-right: 4px;
    user-select: none;

    &:last-child {
      margin-right: 0;
    }
  }
`

const PreviewArea = styled.div`
  padding: 30px;
  ${({ bgTransparent }) => (
    css`
      border: 1px solid ${bgTransparent ? 'transparent' : '#EFEFEF'};
      background: ${bgTransparent ? `url(${bgTransparentPatterns})` : 'white'};
      box-shadow: ${bgTransparent ? `inset 0 0 10px rgba(100, 100, 100, .2)` : 'none'};
    `
  )};
`
