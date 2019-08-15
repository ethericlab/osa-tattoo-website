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

export const topDown = css`
  text-transform: uppercase;
  text-align: right;
  transform-origin: top right;
  transform: translateX(-100%) rotate(-90deg);
`

export const bottomUp = css`
  text-transform: uppercase;
  transform-origin: top left;
  transform: translateY(100%) rotate(-90deg);
`

export const underline = (distance = 3, { height = 1, color = '#fff'} = {}) => css`
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: ${-distance}px;
    height: ${height}px;
    background: ${color};
  }
`
