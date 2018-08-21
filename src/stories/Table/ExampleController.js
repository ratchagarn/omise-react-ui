/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Table/ExampleController
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component, Fragment } from 'react'

import Playground from '../../components/Playground/Playground'

import Table from '../../libs/packages/Table'
import README from '../../libs/packages/Table/README.md'


const data = [
  {
    amount: '1,234',
    amountInfo: 'Captured',
    currency: 'THB',
    chargeId: 'chrg_test_00001',
    detail: 'detail 01',
    payment: {
      sources: 'Credit card',
      lastDigit: '1234',
      brand: 'Mastercard'
    },
    createdAt: {
      string: 'Today',
      time: '11:04',
    }
  },
  {
    amount: '5,678',
    amountInfo: 'Insufficient fund',
    currency: 'JPY',
    charge_id: 'chrg_test_00002',
    detail: 'detail 02',
    payment: {
      sources: 'Credit card',
      lastDigit: '6789',
      brand: 'JCB'
    },
    createdAt: {
      string: 'Today',
      time: '23:17',
    }
  },
]

const heads = [
  { label: 'AMOUNT', align: 'center', },
  { label: 'DETAIL', },
  { label: 'PAYMENT', },
  { label: 'CREATE AT', align: 'center', },
]

const rows = data.map((item) => {
  return [
    {
      column: (props) => (
        <Fragment>
          <h3
            style={{ marginTop: 0 }}
            onClick={props.handleAmountClick(item.amount)}>
            {`${item.amount} ${item.currency}`}
          </h3>
          <span>{item.amountInfo}</span>
        </Fragment>
      ),
      align: 'right',
    },
    {
      column: (
        <Fragment>
          <p style={{ marginTop: 0 }}>{item.chargeId}</p>
          <span>{item.detail}</span>
        </Fragment>
      ),
    },
    {
      column: (
        <Fragment>
          <p style={{ marginTop: 0 }}>{item.payment.sources}</p>
          <span>{`${item.payment.brand} ${item.payment.lastDigit}`}</span>
        </Fragment>
      ),
    },
    {
      column: (
        <Fragment>
          <p style={{ marginTop: 0 }}>{item.createdAt.string}</p>
          <span>{item.createdAt.time}</span>
        </Fragment>
      ),
      align: 'center',
    },
  ]
})

export default () => (
  <Playground
    hidePropsSection={true}
    README={README}
    render={() => (
      <Table
        heads={heads}
        rows={rows}
        handleAmountClick={(amount) => () => alert(`You click amount ${amount}`)}
      />
    )}
    sourceCode={(p) => (`
const data = ${JSON.stringify(data, null, 2)}

const heads = ${JSON.stringify(heads, null, 2)}

/* Please see live example for more detail. */
const rows = [ /* ... */ ]

<Table
  heads={heads}
  rows={rows}
  handleAmountClick={(amount) => () => alert(\`You click amount \${amount}\`)}
/>
    `)}
  />
)
