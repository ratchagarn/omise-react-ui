/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - SelectBox/ExampleLive
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'

import {
  LiveExampleEditor,
  DocContainer,
} from '../../components'

import SelectBox from '../../libs/packages/SelectBox'
import ProgressBar from '../../libs/packages/ProgressBar'


const scope = {
  SelectBox,
  ProgressBar,
}

const code = `

class Example extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedOption: {},
    }

    this.handleOnChange = this.handleOnChange.bind(this)

    this.options = [
      { label: '25%', value: '25' },
      { label: '50%', value: '50' },
      { label: '75%', value: '75' },
      { label: '100%', value: '100' },
    ]
  }

  render() {
    const { selectedOption } = this.state

    return (
      <div>
        <h3>Select range</h3>
        <ProgressBar value={selectedOption.value} margin="0 0 10px 0" />
        <SelectBox
          name="ExampleDropdown"
          placeholder="Select me..."
          isDisabled={false}
          options={this.options}
          onChange={this.handleOnChange}
        />
      </div>
    )
  }

  handleOnChange(selectedOption) {
    this.setState({ selectedOption })
  }
}
`


const ExampleLive = () => (
  <DocContainer>
    <LiveExampleEditor header="SelectBox - Live example" code={code} scope={scope} />
  </DocContainer>
)

export default ExampleLive
