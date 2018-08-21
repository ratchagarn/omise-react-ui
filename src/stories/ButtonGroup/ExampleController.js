/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - ButtonGroup/ExampleController
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component } from 'react'

import Playground from '../../components/Playground/Playground'

import ButtonGroup from '../../libs/packages/ButtonGroup'
import README from '../../libs/packages/ButtonGroup/README.md'


const buttonGroupItems = [
  { text: 'Item 1', value: 'Item 1' },
  { text: 'Item 2', value: 'Item 2' },
  { text: 'Item 3', value: 'Item 3' },
]

const propsSchema = [
  {
    propName: 'vertical',
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
      selectedValue: 'Item 1',
    }
  }

  render() {
    const { selectedValue } = this.state

    return (
      <Playground
        propsSchema={propsSchema}
        triggerOnChange={selectedValue}
        README={README}
        render={props => (
          <ButtonGroup
            {...props}
            defaultValue={buttonGroupItems[0].value}
            items={buttonGroupItems}
            onChange={this.handleOnChange}
          />
        )}
        sourceCode={(p) => (`
<ButtonGroup
  name="exampleGroup"
  items={${JSON.stringify(buttonGroupItems, null, 2)}}
  vertical={${p.vertical}}
  defaultValue="${selectedValue}"
  onChange={this.handleOnChange}
/>
        `)}
      />
    )
  }


  handleOnChange = (name, value) => {
    this.setState({ selectedValue: value })
  }
}
