/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* UI - ButtonGroup
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'


class ButtonGroup extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    items: PropTypes.array,
    vertical: PropTypes.bool,
    defaultValue: PropTypes.any,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    name: '',
    items: [],
    vertical: false,
    defaultValue: '',
    onChange: () => {},
  }

  constructor(props) {
    super(props)

    this.state = {
      selectedValue: props.defaultValue
    }
  }

  render() {
    const { name, items, vertical } = this.props
    const { selectedValue } = this.state

    const groups = items.map((item, i) => {
      const selected = item.value === selectedValue

      return (
        <Wrapper key={i} vertical={vertical}>
          <Button
            name={name}
            selected={selected}
            vertical={vertical}
            onClick={this.handleOnChange}
            data-value={item.value}>
            {item.text}
          </Button>
        </Wrapper>
      )
    })

    return (
      <Container>
        {groups}
      </Container>
    )
  }

  handleOnChange = (e) => {
    const { name } = e.target
    const value = e.target.getAttribute('data-value')

    this.setState({ selectedValue: value }, () => {
      this.props.onChange(name, value)
    })
  }
}

export default ButtonGroup


/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */
const Container = styled.div`
  display: inline-block;
  border: 1px solid #CCC;
  overflow: hidden;
  border-radius: 5px;
`

const styleVertical = css`
  display: block;

  &:last-child button {
    border-bottom: 0;
  }
`
const styleHorizontal = css`
  display: inline-block;
  float: left;

  &:last-child button {
    border-right: 0;
  }
`

const Wrapper = styled.label`
  position: relative;
  ${({ vertical }) => vertical ? styleVertical : styleHorizontal}
`

const InputRadio = styled.input.attrs({
  type: 'radio'
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
`

const Button = styled.button`
  display: inline-block;
  width: ${props => props.vertical ? '100%' : 'auto'};
  padding: 8px 15px;
  border: 0;
  border-right: ${props => props.vertical ? null : '1px solid #CCC'};
  border-bottom: ${props => props.vertical ? '1px solid #CCC' : null};
  background-color: ${props => props.selected ? 'blue' : 'white'};
  color: ${props => props.selected ? 'white' : 'inherit'};
  font-size: 14px;
  cursor: pointer;
  outline: none;
  transition: background-color .2s;
`
