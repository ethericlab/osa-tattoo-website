import React from "react"

const Box = ({
  tag: Component = 'div',
  children,
  style,
  flex,
  direction,
  mainAxis,
  crossAxis,
  m,
  mt,
  mb,
  ml,
  mr,
  p,
  pt,
  pb,
  pl,
  pr,
  gridArea,
  ...props
}) => (
  <Component
    {...props}
    style={{
      margin: m,
      padding: p,
      marginTop: mt,
      marginBottom: mb,
      marginLeft: ml,
      marginRight: mr,
      paddingTop: pt,
      paddingBottom: pb,
      paddingLeft: pl,
      paddingRight: pr,
      gridArea,
      display: flex ? "flex" : undefined,
      flexDirection: direction,
      justifyContent: mainAxis,
      alignItem: crossAxis,
      ...style,
    }}
  >
    {children}
  </Component>
)

export default Box
