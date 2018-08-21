/**
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
* UI - Button
* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

import { pickColorFromObj, pickSizeFromObj } from '../../helpers/utils'
import {
  colorText,
  colorBg,
  buttonFontSize,
  buttonPadding,
} from './ButtonSettings'


const Button = styled.button`
  display: ${props => props.block ? 'block' : 'inline-block'};
  width: ${props => props.block ? '100%' : 'auto'};
  margin-right: 4px;
  color: ${props => pickColorFromObj(colorText, props.type)};
  font-size: ${props => pickSizeFromObj(buttonFontSize, props.size)};
  opacity: ${props => props.disabled ? '.6' : null};
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  transition: .2s;

  ${({ type, size }) => {
    if (type === 'link') {
      return css`
        padding: 0;
        border: 1px solid transparent;
        background-color: transparent;
      `
    }
    else {
      return css`
        padding: ${pickSizeFromObj(buttonPadding, size)};
        border: 1px solid ${darken(.2, pickColorFromObj(colorBg, type))};
        background-color: ${pickColorFromObj(colorBg, type)};

        &:hover {
          background-color: ${props => darken(.1, pickColorFromObj(colorBg, props.type))};
        }
      `
    }
  }}
`

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
}

export default Button
