/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Dropdown/ExampleLive
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'

import {
  LiveExampleEditor,
  DocContainer,
} from '../../components'

import Dropdown from '../../libs/packages/Dropdown'


const scope = {
  Dropdown,
}

const code = `
class Example extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedValue: '',
    }

    this.handleOnChange = this.handleOnChange.bind(this)

    this.options = [
      { text: 'Option 1', value: 'Option 1' },
      { text: 'Option 2', value: 'Option 2' },
      { divider: true },
      { text: 'Option 3', value: 'Option 3' },
    ]
  }

  render() {
    const { selectedValue } = this.state

    return (
      <div>
        <Dropdown
          name="ExampleDropdown"
          placeholder="Placeholder text"
          helpMessage="Help message"
          errorMessage=""
          disabled={false}
          options={this.options}
          onChange={this.handleOnChange}
        />
        <h3 style={{ marginBottom: 0 }}>You selected: {selectedValue || '---'}</h3>
      </div>
    )
  }

  handleOnChange(name, value) {
    this.setState({ selectedValue: value })
  }
}
`


const ExampleLive = () => (
  <DocContainer>
    <LiveExampleEditor header="Dropdown - Live example" code={code} scope={scope} />
  </DocContainer>
)

export default ExampleLive
