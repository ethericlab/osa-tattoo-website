import React from "react"
import * as PropTypes from "prop-types"
import styled from "styled-components"
import Box from "./Box"

export const VStack = styled(Box).attrs({ flex: true, direction: 'column', m: 0, p: 0 })`
  && > * + * {
    margin-top: ${props => props.spacing};
  }
`

export const HStack = styled(Box).attrs({ flex: true, direction: 'row', m: 0, p: 0 })`
  && > * + * {
    margin-left: ${props => props.spacing};
  }
`

HStack.propTypes = VStack.propTypes = {
  spacing: PropTypes.string,
}

HStack.defaultProps = VStack.defaultProps = {
  spacing: "8px",
}
