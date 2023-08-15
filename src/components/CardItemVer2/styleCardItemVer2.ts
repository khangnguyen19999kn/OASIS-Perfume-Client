import { createStyles, getStylesRef } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    width: '270px',
    height: '400px',
    position: 'relative',
    cursor: 'pointer',
    border: '1px solid #33999487',
    padding: '10px',
    borderRadius: '2px',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    [`&:hover .${getStylesRef('info')}`]: {
      height: '398px',
      bottom: '0',
      '@media (max-width: 639px)': {
        height: '320px'
      }
    },
    [`&:hover .${getStylesRef('description')}`]: {
      display: '-webkit-box',
      WebkitLineClamp: 6,
      '@media (max-width: 639px)': {
        display: '-webkit-box',
        WebkitLineClamp: 3
      }
    },
    [`&:hover .${getStylesRef('price')}`]: {
      display: 'block'
    },
    [`&:hover .${getStylesRef('name')}`]: {
      marginTop: '20px',
      display: 'block'
    },
    [`&:hover .${getStylesRef('btnAddToCart')}`]: {
      display: 'block'
    },
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    },
    transition: 'all 0.5s',
    overflow: 'hidden',
    '@media (max-width: 639px)': {
      width: '100%',
      height: '320px'
    }
  },
  wrapImage: {
    width: '100%',
    height: 'fit-content',
    '@media (max-width: 639px)': {
      height: '150px',
      width: '100%'
    }
  },
  Infomation: {
    position: 'absolute',
    height: '150px',
    width: '100%',
    bottom: '0',
    left: '0',
    backgroundColor: '#ffffff',
    transition: 'all 1s ease',
    ref: getStylesRef('info'),
    padding: '0 10px'
  },
  textName: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: '20px',
    fontWeight: 500,
    color: '#000000',
    textAlign: 'center',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    '@media (max-width: 639px)': {
      fontSize: '16px',
      fontWeight: 600
    },
    ref: getStylesRef('name')
  },
  textDescription: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: '16px',
    fontWeight: 500,
    marginTop: '10px',
    color: '#747a86',
    textAlign: 'center',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    ref: getStylesRef('description')
  },
  price: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: '16px',
    fontWeight: 600,
    marginTop: '10px',
    color: 'red',
    textAlign: 'center',
    display: 'none',
    ref: getStylesRef('price')
  },
  sidePriceRateButtonAdd: {
    display: 'none',
    ref: getStylesRef('btnAddToCart'),
    marginTop: '10px',
    '@media (max-width: 639px)': {
      marginTop: '0px'
    }
  }
}))
