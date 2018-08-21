/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - AdvanceSearch/partials/TypeText
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Input } from './UI'


const TypeText = ({ placeholder, value, onChange }) => (
  <Input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={(event) => onChange(event.target.value)}
  />
)

export default TypeText
