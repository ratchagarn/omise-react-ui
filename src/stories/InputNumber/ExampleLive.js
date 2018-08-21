/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - InputNumber/ExampleLive
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'

import {
  LiveExampleEditor,
  DocContainer,
} from '../../components'

import InputNumber from '../../libs/packages/InputNumber'


const scope = {
  InputNumber,
}

const code = `
class Example extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      number: 0,
    }

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  render() {
    const { number } = this.state

    return (
      <InputNumber
        value={number}
        step={5}
        maxLength={10}
        showNav={true}
        onChange={this.handleOnChange}
      />
    )
  }

  handleOnChange(name, value) {
    this.setState({ number: value })
  }
}
`


const ExampleLive = () => (
  <DocContainer>
    <LiveExampleEditor header="Checkbox - Live example" code={code} scope={scope} />
  </DocContainer>
)

export default ExampleLive
