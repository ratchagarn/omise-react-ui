/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Playground/partials/InputSelect
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import styled from 'styled-components'
import SelectBox from '../../../libs/packages/SelectBox'

class InputSelect extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedOption: { ...props.defaultValue },
    }
  }

  render() {
    const { name, value, onChange } = this.props

    return (
      <Wrapper>
        <SelectBox
          name={name}
          onChange={this.handleOnChange}
          defaultValue={this.state.selectedOption}
          options={value} />
      </Wrapper>
    )
  }

  handleOnChange = (selectedOption) => {
    this.setState(selectedOption)
    this.props.onChange({ name: this.props.name, value: selectedOption.value })
  }
}

export default InputSelect


const Wrapper = styled.div`
  position: relative;
`
