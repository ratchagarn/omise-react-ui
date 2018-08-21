/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - Text
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const fontSize = {
  sm: '10px',
  md: '14px',
  lg: '18px',
}

const Text = styled.span`
  display: ${props => props.block ? 'block' : 'inline'};
  font-size: ${({ size }) => (
    fontSize[size] ? fontSize[size] : fontSize['md']
  )};
  user-select: ${props => props.userSelect ? 'auto' : 'none'};
`

Text.defaultProps = {
  size: 'md',
  userSelect: true,
}

Text.propTypes = {
  size: PropTypes.string,
  userSelect: PropTypes.bool,
}

export default Text
