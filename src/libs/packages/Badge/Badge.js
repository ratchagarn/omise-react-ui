/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* UI - Badge
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { pickDataFromObj } from '../../helpers/utils'
import { color, size } from './settings'

const pickColor = pickDataFromObj(color, 'gray')
const pickSize = pickDataFromObj(size, 'md')


const Badge = styled.span`
  display: inline-block;
  margin-right: 4px;
  padding: ${props => pickSize(props.size).padding};
  background-color: ${props => pickColor(props.color).bg};
  color: ${props => pickColor(props.color).color};
  font-size: ${props => pickSize(props.size).font};
  text-transform: uppercase;
  border-radius: ${props => pickSize(props.size).radius};
  transition: background-color .2s, color .2s;
`

Badge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
}

export default Badge
