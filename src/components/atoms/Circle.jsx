import styled from "styled-components"
import * as PropTypes from 'prop-types'


const Circle = styled.div`
  display: inline-block;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  border: 1px solid ${props => props.active ? props.theme.colors.primary : props.theme.colors.secondary};
  border-radius: 100%;
  margin-right: 10px;
  background: ${props => props.active ? props.theme.colors.primary : 'transparent'}
`

Circle.propTypes = {
  active: PropTypes.bool
}

Circle.defaultProps = {
  active: false
}

export default Circle
