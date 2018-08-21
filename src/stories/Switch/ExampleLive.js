/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Switch/ExampleLive
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'

import {
  LiveExampleEditor,
  DocContainer,
} from '../../components'

import Switch from '../../libs/packages/Switch'
import Text from '../../libs/packages/Text'


const scope = {
  Switch,
  Text,
}

const code = `
class Example extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      result: 'OFF',
    }

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  render() {
    const { result } = this.state

    return (
      <React.Fragment>
        <Switch checked={false} disabled={false} onChange={this.handleOnChange} />
        <Text block size="lg">{result}</Text>
      </React.Fragment>
    )
  }

  handleOnChange({ value }) {
    this.setState({ result: value ? 'ON' : 'OFF' })
  }
}
`


const ExampleLive = () => (
  <DocContainer>
    <LiveExampleEditor header="Switch - Live example" code={code} scope={scope} />
  </DocContainer>
)

export default ExampleLive
