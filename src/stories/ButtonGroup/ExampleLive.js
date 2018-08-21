/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - ButtonGroup/ExampleLive
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'

import {
  LiveExampleEditor,
  DocContainer,
} from '../../components'

import ButtonGroup from '../../libs/packages/ButtonGroup'


const scope = {
  ButtonGroup,
}

const code = `
class Example extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedValue: 'Item 1',
    }

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  render() {
    const { selectedValue } = this.state

    return (
      <ButtonGroup
        name="exampleGroup"
        items={[
          { text: 'Item 1', value: 'Item 1' },
          { text: 'Item 2', value: 'Item 2' },
          { text: 'Item 3', value: 'Item 3' },
        ]}
        vertical={false}
        selectedValue={selectedValue}
        onChange={this.handleOnChange}
      />
    )
  }

  handleOnChange(name, value) {
    this.setState({ selectedValue: value })
  }
}
`


const ExampleLive = () => (
  <DocContainer>
    <LiveExampleEditor header="ButtonGroup - Live example" code={code} scope={scope} />
  </DocContainer>
)

export default ExampleLive
