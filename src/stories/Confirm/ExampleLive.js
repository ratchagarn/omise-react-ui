/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Confirm/ExampleLive
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'

import {
  LiveExampleEditor,
  DocContainer,
} from '../../components'

import Button from '../../libs/packages/Button'
import Confirm from '../../libs/packages/Confirm'


const scope = {
  Button,
  Confirm,
}

const code = `
class Example extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      answer: '...',
    }

    this.handleOpenConfirm = this.handleOpenConfirm.bind(this)
    this.handleOnAnswer = this.handleOnAnswer.bind(this)
  }

  render() {
    const { isOpen, answer } = this.state

    return (
      <React.Fragment>
        <Button
          type="primary"
          onClick={this.handleOpenConfirm}>
          Open confirm
        </Button>
        <p>Your answer is {answer}</p>
        <Confirm
          isOpen={isOpen}
          onAnswer={this.handleOnAnswer}>
          <p>Confirm Content</p>
        </Confirm>
      </React.Fragment>
    )
  }

  handleOpenConfirm() {
    this.setState({ isOpen: true })
  }

  handleOnAnswer(answer) {
    this.setState({ isOpen: false, answer: answer ? 'Yes' : 'No' })
  }
}
`


const ExampleLive = () => (
  <DocContainer>
    <LiveExampleEditor header="Confirm - Live example" code={code} scope={scope} />
  </DocContainer>
)

export default ExampleLive
