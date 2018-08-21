/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - DatePicker/ExampleLive
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'

import {
  LiveExampleEditor,
  DocContainer,
} from '../../components'

import DatePicker from '../../libs/packages/DatePicker'


const scope = {
  DatePicker,
}

const code = `
class Example extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedDate: false,
    }

    this.handleOnDateChange = this.handleOnDateChange.bind(this)
  }

  render() {
    const { selectedDate } = this.state

    return (
      <DatePicker
        disabled={false}
        placeholderText="Placeholder text"
        selected={selectedDate}
        onChange={this.handleOnDateChange}
      />
    )
  }

  handleOnDateChange(date) {
    this.setState({ selectedDate: date })
  }
}
`


const ExampleLive = () => (
  <DocContainer>
    <LiveExampleEditor header="DatePicker - Live example" code={code} scope={scope} />
  </DocContainer>
)

export default ExampleLive
