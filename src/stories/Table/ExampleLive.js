/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* Storie - Table/ExampleLive
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'

import {
  LiveExampleEditor,
  DocContainer,
} from '../../components'

import Table from '../../libs/packages/Table'


const scope = {
  Table,
}

const code = `
() => {
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
          <React.Fragment>
            <h3
              style={{ marginTop: 0 }}
              onClick={props.handleAmountClick(item.amount)}>
              {item.amount} {item.currency}
            </h3>
            <span>{item.amountInfo}</span>
          </React.Fragment>
        ),
        align: 'right',
      },
      {
        column: (
          <React.Fragment>
            <p style={{ marginTop: 0 }}>{item.chargeId}</p>
            <span>{item.detail}</span>
          </React.Fragment>
        ),
      },
      {
        column: (
          <React.Fragment>
            <p style={{ marginTop: 0 }}>{item.payment.sources}</p>
            <span>{item.payment.brand} {item.payment.lastDigit}</span>
          </React.Fragment>
        ),
      },
      {
        column: (
          <React.Fragment>
            <p style={{ marginTop: 0 }}>{item.createdAt.string}</p>
            <span>{item.createdAt.time}</span>
          </React.Fragment>
        ),
        align: 'center',
      },
    ]
  })

  return (
    <Table
      heads={heads}
      rows={rows}
      handleAmountClick={(amount) => () => alert(\`You click amount \${amount}\`)}
    />
  )
}
`


const ExampleLive = () => (
  <DocContainer>
    <LiveExampleEditor header="Checkbox - Live example" code={code} scope={scope} />
  </DocContainer>
)

export default ExampleLive
