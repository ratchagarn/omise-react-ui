/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Radio/ExampleController
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component, Fragment } from 'react'

import Playground from '../../components/Playground/Playground'

import Label from '../../libs/packages/Label'
import Radio from '../../libs/packages/Radio'
import README from '../../libs/packages/Radio/README.md'


const propsSchema = [
  {
    propName: 'disabled',
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
    }
  }

  render() {
    const { onChangeMessage } = this.state

    return (
      <Playground
        propsSchema={propsSchema}
        triggerOnChange={onChangeMessage}
        README={README}
        render={props => (
          <Fragment>
            <Label>
              <Radio { ...props } name="example-radio" value="Radio 1" onChange={this.handleOnChange} /> Radio 1
            </Label>
            <Label>
              <Radio { ...props } name="example-radio" value="Radio 2" onChange={this.handleOnChange} /> Radio 2
            </Label>
          </Fragment>
        )}
        sourceCode={(p, s) => (`
<Fragment>
  <Label>
    <Radio name="example-radio" value="Radio 1" disabled={${p.disabled}} /> Radio 1
  </Label>
  <Label>
    <Radio name="example-radio" value="Radio 2" disabled={${p.disabled}} /> Radio 2
  </Label>
</Fragment>
        `)}
      />
    )
  }

  handleOnChange = (name, value) => {
    this.setState({ onChangeMessage: value })
  }
}
