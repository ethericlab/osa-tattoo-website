const colors = {
  gray: {
    light: '#BFBFBF',
    lighter: '#D9D9D9'
  },
  black: {
    default: '#0A0A0A'
  },
  red: {
    default: '#F30016'
  },
}

export const dark = {
  colors: {
    background: '#070707',
    primary: '#D9D9D9',
    secondary: '#BFBFBF',
    active: '#F30016',
      ...colors
  }
}

export const light = {
  colors: {
    background: '#E5E5E5',
    primary: '#0A0A0A',
    secondary: '#BFBFBF',
    active: '#F30016',
    ...colors
  }
}
