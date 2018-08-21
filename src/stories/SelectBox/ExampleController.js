/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - SelectBox/ExampleController
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component } from 'react'
import styled from 'styled-components'

import Playground from '../../components/Playground/Playground'

import SelectBox from '../../libs/packages/SelectBox'
import Button from '../../libs/packages/Button'
import README from '../../libs/packages/SelectBox/README.md'


const options = [
  { label: 'Option 1', value: 'option 1' },
  { label: 'Option 2', value: 'option 2' },
]

const propsSchema = [
  {
    propName: 'placeholder',
    type: 'text',
    defaultValue: 'Select...',
  },
  {
    propName: 'isDisabled',
    type: 'switch',
    defaultValue: false,
  },
  {
    propName: 'onChange',
    type: 'eventTrigger',
  },
]


export default class ExampleController extends Component {
  constructor(props) {
    super(props)

    this.state = {
      onChangeMessage: '',
      selectedOption: null,
    }
  }

  render() {
    const { onChangeMessage, selectedOption } = this.state

    return (
      <Playground
        propsSchema={propsSchema}
        triggerOnChange={onChangeMessage}
        README={README}
        render={props => (
          <div>
            <SelectBox
              { ...props }
              name="ExampleSelectBox"
              options={options}
              onChange={this.handleOnChange}
              value={selectedOption}
            />
            <br />
            <Button type="destructive" onClick={this.handleOnReset}>Reset</Button>
          </div>
        )}
        sourceCode={(p, s) => (`
const options = ${JSON.stringify(options, null, 2)}

<SelectBox
  name="ExampleSelectBox"
  options={options}
  onChange={handleOnChange}
  isDisabled={${p.isDisabled}}
/>
        `)}
      />
    )
  }

  handleOnChange = (selectedOption) => {
    if (selectedOption) {
      this.setState({
        onChangeMessage: selectedOption.label,
        selectedOption,
      })
    }
  }

  handleOnReset = () => {
    this.setState({ onChangeMessage: '', selectedOption: null })
  }
}
