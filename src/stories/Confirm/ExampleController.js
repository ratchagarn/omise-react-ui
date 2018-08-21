/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Confirm/ExampleController
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import Playground from '../../components/Playground/Playground'

import Button from '../../libs/packages/Button'
import Confirm from '../../libs/packages/Confirm'
import README from '../../libs/packages/Confirm/README.md'


const propsSchema = [
  {
    propName: 'labelYes',
    type: 'text',
    defaultValue: 'Yes',
  },
  {
    propName: 'labelNo',
    type: 'text',
    defaultValue: 'No',
  },
  {
    propName: 'children',
    type: 'text',
    defaultValue: 'Confirm content',
  },
]


export default class ExampleController extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      answer: '...',
    }
  }

  render() {
    const { isOpen, answer } = this.state
    const Answer = (
      <span style={{
        textTransform: 'uppercase',
        color: 'red',
      }}>{answer.toString()}</span>
    )

    return (
      <Playground
        propsSchema={propsSchema}
        README={README}
        state={this.state}
        render={({ children, ...props }) => (
          <Fragment>
            <Button
              type="primary"
              onClick={this.handleOpenConfirm}>
              Open confirm
            </Button>
            <p>Your answer is `{Answer}`</p>
            <Confirm
              { ...props }
              isOpen={isOpen}
              onAnswer={this.handleOnAnswer}>
              <p>{children}</p>
            </Confirm>
          </Fragment>
        )}
        sourceCode={(p, s) => (`
<Fragment>
  <Button
    type="primary"
    onClick={this.handleOpenConfirm}>
    Open confirm
  </Button>
  <Confirm
    isOpen={${s.isOpen}}
    labelYes="${p.labelYes}"
    labelNo="${p.labelNo}"
    onAnswer={this.handleOnAnswer}>
    <p>${p.children}</p>
  </Confirm>
</Fragment>
`)}
      />
    )
  }

  handleOpenConfirm = () => {
    this.setState({ isOpen: true })
  }

  handleOnAnswer = (answer) => {
    this.setState({ isOpen: false, answer })
  }
}
