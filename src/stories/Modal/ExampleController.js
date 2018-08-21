/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Modal/ExampleController
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import Playground from '../../components/Playground/Playground'

import Button from '../../libs/packages/Button'
import Modal from '../../libs/packages/Modal'
import README from '../../libs/packages/Modal/README.md'


const propsSchema = [
  {
    propName: 'showClose',
    type: 'switch',
    defaultValue: true,
  },
  {
    propName: 'shouldCloseOnEsc',
    type: 'switch',
    defaultValue: true,
  },
  {
    propName: 'shouldCloseOnOverlayClick',
    type: 'switch',
    defaultValue: true,
  },
]


export default class ExampleController extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }

  render() {
    const { isOpen } = this.state

    return (
      <Playground
        propsSchema={propsSchema}
        README={README}
        state={this.state}
        render={props => (
          <Fragment>
            <Button
              type="primary"
              onClick={this.handleOpenModal}>
              Open modal
            </Button>
            <Modal
              { ...props }
              isOpen={isOpen}
              onClose={this.handleOnCloseModal}
              onAfterOpen={() => console.log('Open')}
              onAfterClose={() => console.log('Close')}>
              <p>Modal Content</p>
              <Button
                type="destructive"
                size="sm"
                onClick={this.handleOnCloseModal}>
                Close modal
              </Button>
            </Modal>
          </Fragment>
        )}
        sourceCode={(p, s) => (`
<Fragment>
  <Button
    type="primary"
    onClick={this.handleOpenModal}>
    Open modal
  </Button>
  <Modal
    isOpen={${s.isOpen}}
    showClose={${p.showClose}}
    onClose={this.handleOnCloseModal}
    onAfterOpen={() => console.log('Open')}
    onAfterClose={() => console.log('Close')}>
    <p>Modal Content</p>
    <Button
      type="destructive"
      size="sm"
      onClick={this.handleOnCloseModal}>
      Close modal
    </Button>
  </Modal>
</Fragment>
`)}
      />
    )
  }

  handleOpenModal = () => {
    this.setState({ isOpen: true })
  }

  handleOnCloseModal = () => {
    this.setState({ isOpen: false })
  }
}
