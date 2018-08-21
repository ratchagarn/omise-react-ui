/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - Label
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const maxWidth = (w) => w > 100 ? 100 : w

const ProgressBar = styled.div`
  position: relative;
  height: 10px;
  margin: ${props => props.margin ? props.margin : 'auto'};
  background-color: #EEE;
  border-radius: 4px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.value ? `${maxWidth(props.value)}%` : 0};
    height: 100%;
    background-color: blue;
    border-radius: 4px;
    transition: width .2s;
  }
`

export default ProgressBar
