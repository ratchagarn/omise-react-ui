/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* UI - Table
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const Table = ({ heads, rows, ...props }) => {
  const Heads = heads.map((data, i) => (
    <HCol key={i} align={data.align}>{data.label}</HCol>
  ))

  const Columns = rows.map((data, j) => {
    const cols = data.map((col, k) => {
      const column = (
        typeof col.column === 'function'
        ? col.column(props)
        : col.column
      )
      return <Col key={k} align={col.align}>{column}</Col>
    })

    return (
      <Row key={j}>
        {cols}
      </Row>
    )
  })

  return (
    <TableContainer>
      {Heads && (
        <Head>
          <Row>{Heads}</Row>
        </Head>
      )}
      <Body>
        {Columns}
      </Body>
    </TableContainer>
  )
}

Table.defaultProps = {
  heads: [],
  rows: [],
}

export default Table


/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */
const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;

  tr:nth-child(odd) > td {
    background-color: white;
  }

  tr:nth-child(even) > td {
    background-color: #F6F6F6;
  }
`

const Head = styled.thead`
  border-bottom: 1px solid #E9E9E9;
`
const Body = styled.tbody``

const Row = styled.tr``

const HCol = styled.th`
  padding: 8px;
  text-align: ${props => props.align ? props.align : 'left'};
`

const Col = styled.td`
  padding: 8px 16px;
  border-top: 1px solid #E9E9E9;
  border-bottom: 1px solid #E9E9E9;
  text-align: ${props => props.align ? props.align : 'left'};
`
