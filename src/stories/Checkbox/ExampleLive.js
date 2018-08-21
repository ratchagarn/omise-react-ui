/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Checkbox/ExampleLive
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'

import {
  LiveExampleEditor,
  DocContainer,
} from '../../components'

import Label from '../../libs/packages/Label'
import Checkbox from '../../libs/packages/Checkbox'


const scope = {
  Label,
  Checkbox,
}

const code = `
class Example extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: false,
    }

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  render() {
    const { checked } = this.state

    return (
      <React.Fragment>
        <Label>
          <Checkbox checked={checked} onChange={this.handleOnChange} />
          <span style={{ marginLeft: '4px' }}>Check me</span>
        </Label>
      </React.Fragment>
    )
  }

  handleOnChange(e) {
    this.setState({ checked: e.target.checked })
  }
}
`


const ExampleLive = () => (
  <DocContainer>
    <LiveExampleEditor header="Checkbox - Live example" code={code} scope={scope} />
  </DocContainer>
)

export default ExampleLive
