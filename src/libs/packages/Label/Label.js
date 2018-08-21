/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - Label
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'


const styleInline = css`
  display: inline;
  margin-right: 4px;
`

const styleBlock = css`
  display: block;
`

const Label = styled.label`
  ${props => props.block ? styleBlock : styleInline};
  cursor: ${props => props.cursor};
`

Label.defaultProps = {
  cursor: 'pointer',
}

Label.propTypes = {
  htmlFor: PropTypes.string,
  cursor: PropTypes.string,
}

export default Label
