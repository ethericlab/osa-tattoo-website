import styled from "styled-components"
import * as PropTypes from 'prop-types'


const Indicator = styled.div.attrs(({ active = false }) => ({
  style: {
    background: active ? '#fff' : 'transparent'
  }
}))`
  display: inline-block;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  border: 1px solid #fff;
  border-radius: 100%;
  margin-right: 10px;
`

Indicator.propTypes = {
  active: PropTypes.bool
}

Indicator.defaultProps = {
  active: false
}

export default Indicator
