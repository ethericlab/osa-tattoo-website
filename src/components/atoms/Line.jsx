import React from 'react'
import * as PropTypes from 'prop-types'
import styled from 'styled-components'
import Box from "./Box"

const Line = styled(Box).attrs(props => ({ as: props.tag }))`
  border-top: 1px solid ${props => props.secondary ? props.theme.colors.secondary : props.theme.colors.primary}; 
  width: 100%;
`

Line.propTypes = {
  secondary: PropTypes.bool
}

export default Line
