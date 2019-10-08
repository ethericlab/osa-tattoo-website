import React from 'react'
import * as PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Text = ({ variant = 'body', ...props }) => {
  switch (variant) {
    case "display": return <Display {...props} />
    case "headline": return <Headline {...props} />
    case "body": return <Body {...props} />
    case "caption": return <Caption {...props} />
    default: return <span {...props} />
  }
}

Text.propTypes = {
  variant: PropTypes.oneOf(['display', 'headline', 'body', 'caption'])
}

const common = css`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: normal;
  color: ${props => props.theme.colors.gray.lighter};
`

const Display = styled.h1`
  ${common};
  font-size: 110px;
  line-height: 90px;
  letter-spacing: -4px; 
`
const Headline = styled.h2`
  ${common};
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -1px;
`
const Body = styled.span`
  ${common};
  font-size: 16px;
  line-height: 20px;
`
const Caption = styled.span`
  ${common};
  font-size: 12px;
  line-height: 14px;
`

export default Text
