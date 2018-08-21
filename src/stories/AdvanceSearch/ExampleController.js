/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - AdvanceSearch/ExampleController
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import Playground from '../../components/Playground/Playground'

import AdvanceSearch from '../../libs/packages/AdvanceSearch'
import defaultSchema from '../../libs/packages/AdvanceSearch/defaultSchema'
import README from '../../libs/packages/AdvanceSearch/README.md'


const propsSchema = []

const schema = [ ...defaultSchema ]
const suggestions = [
  {
    name: 'Suggest 1',
    filterItems: [
      {
        'id': 'captured_at',
        'type': 'date',
        'option': 'between',
        'value': '2018-07-24,2018-08-03',
      },
      {
        'id': 'source_type',
        'type': 'select',
        'option': null,
        'value': 'bill_payment_tesco_lotus',
      },
    ]
  },
  {
    name: 'Suggest 2',
    filterItems: [
      {
        'id': 'amount',
        'type': 'number',
        'option': 'between',
        'value': '100,300',
      },
      {
        'id': 'currency',
        'type': 'choices',
        'option': null,
        'value': 'SGD',
      },
      {
        'id': 'charge_id',
        'type': 'text',
        'option': null,
        'value': 'charge_id_1234567890',
      }
    ]
  }
]

export default class ExampleController extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: [],
      filterItems: [],
    }
  }

  render() {
    const { query, filterItems } = this.state

    return (
      <Fragment>
        <Playground
          propsSchema={propsSchema}
          hidePropsSection={true}
          README={README}
          render={props => (
            <Fragment>
              <AdvanceSearch
                {...props}
                schema={schema}
                suggestions={suggestions}
                expandedFilter={false}
                onChange={this.handleOnChange}
              />

              <h5>FilterItems</h5>
              <Pre>{JSON.stringify(filterItems, null, 2)}</Pre>

              <h5>Query</h5>
              <Pre>{JSON.stringify(query.join(','), null, 2)}</Pre>
            </Fragment>
          )}
          sourceCode={(p) => (`
const schema = ${JSON.stringify(schema, null, 2)}

const suggestions = ${JSON.stringify(suggestions, null, 2)}

<AdvanceSearch
  schema={schema}
  suggestions={suggestions}
  expandedFilter={false}
  onChange={this.handleOnChange}
/>
          `)}
        />
      </Fragment>
    )
  }

  handleOnChange = (query, filterItems) => {
    this.setState({ query, filterItems })
  }
}


const Pre = styled.pre`
  padding: 10px;
  border: 1px solid black;
  font-size: 12px;
  color: #E9E9E9;
  background-color: #333;
  border-radius: 4px;

  &:last-of-type {
    margin-bottom: 0;
  }
`
