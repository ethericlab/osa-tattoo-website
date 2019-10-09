import { css } from 'styled-components'

export const h1 = css`
  font-style: normal;
  font-weight: normal;
  font-size: 110px;
  line-height: 90px;
  letter-spacing: -4px;
  margin: 0;
  color: #FFFFFF;
`

export const h3 = css`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 23px;
  letter-spacing: -1px;
  margin: 0;
  color: #FFFFFF;
`

export const h4 = css`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -1px;
  margin: 0;
  color: #FFFFFF;
`

export const underline = (distance = 3, { height = 1, color } = {}) => css`
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: ${-distance}px;
    height: ${height}px;
    background: ${props => color || props.theme.colors.primary};
  }
`
