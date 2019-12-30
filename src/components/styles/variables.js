export const colors = {
  bg: '#283952',
  grey: '#dadada',
  grey2: '#bbbbbb',
  darkGrey: '#a4a4a4',
  white: '#fafafa',
  blue: '#004daa',
  lightBlue: '#A4BBD7',
  brightBlue: '#206ac6',
  darkBlue: '#2E3F57',
  darkBg: '#0e1724',
  bgGrey: '#24334a',
  disabled: '#22436a75',
  shadow: 'rgba(30, 30, 30, 0.3)',
  textBgLowOpacity: 'rgba(35, 50, 71, 0.3)',
  textBgMidOpacity: 'rgba(35, 50, 71, 0.5)',
  textBgHighOpacity: 'rgba(35, 50, 71, 0.8)',
  red: '#c10606',
  // social colors
  gh: '#24292e',
  fb: '#1778f2',
  ig: '#c536a4',
  li: '#0a66c2',
}

export const z = {
  top: 200,
  middle: 100,
  back: -100,
}

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
  tabletOrMobile: '1023px', // for burger menu
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
  tabletOrMobile: `(max-width: ${size.tabletOrMobile})`, // for burger menu
}
