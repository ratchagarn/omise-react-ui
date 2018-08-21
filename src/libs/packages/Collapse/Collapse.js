/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* UI - Collapse
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React, { Component } from 'react'
import styled from 'styled-components'


const Collapse = ({ open, children }) => (
  <Container open={open}>{children}</Container>
)

Collapse.defaultProps = {
  open: false,
}

export default Collapse


const Container = styled.div`
  display: ${props => props.open ? 'block' : 'none'};
`
