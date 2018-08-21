/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Modal/ExampleLive
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'

import {
  LiveExampleEditor,
  DocContainer,
} from '../../components'

import Button from '../../libs/packages/Button'
import Modal from '../../libs/packages/Modal'


const scope = {
  Button,
  Modal,
}

const code = `
class Example extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleOnCloseModal = this.handleOnCloseModal.bind(this)
  }

  render() {
    const { isOpen } = this.state

    return (
      <React.Fragment>
        <Button
          type="primary"
          onClick={this.handleOpenModal}>
          Open modal
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={this.handleOnCloseModal}
          onAfterOpen={() => console.log('Open')}
          onAfterClose={() => console.log('Close')}
          showClose={true}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}>
          <p>Modal Content</p>
          <Button
            type="destructive"
            size="sm"
            onClick={this.handleOnCloseModal}>
            Close modal
          </Button>
        </Modal>
      </React.Fragment>
    )
  }

  handleOpenModal() {
    this.setState({ isOpen: true })
  }

  handleOnCloseModal() {
    this.setState({ isOpen: false })
  }
}
`


const ExampleLive = () => (
  <DocContainer>
    <LiveExampleEditor header="Modal - Live example" code={code} scope={scope} />
  </DocContainer>
)

export default ExampleLive
