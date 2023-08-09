import { createStyles, keyframes } from '@mantine/core'

const zoomInAnimation = keyframes({
  '0%': { width: '95%', padding: '20px 0' },
  '100%': { width: '100%', padding: '10px 0 ' }
})
export const useStyles = createStyles(theme => ({
  cardItem: {
    width: '270px',
    height: 'fit-content',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    '@media (max-width: 639px)': {
      width: '200px'
    }
  },
  wrapImgItem: {
    width: '95%',
    height: '270px',
    border: `1px solid ${theme.colorScheme === 'dark' ? '#ffffff' : '#000000'}`,
    marginBottom: '10px',
    marginTop: '10px',
    padding: '10px 0',
    '&:hover': {
      animation: `${zoomInAnimation} 0.8s forwards`
    },
    '@media (max-width: 639px)': {
      border: 'none'
    }
  },
  ImgItem: {
    display: 'flex',
    justifyContent: 'center'
  },
  btnAddToCart: {
    backgroundColor: '#ffffff!important',
    width: '100%',
    color: '#000000!important',
    border: '1px solid #33999487!important',
    '&:hover': {
      backgroundColor: '#33999487!important',
      color: '#ffffff!important'
    }
  },
  nameProduct: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: '16px',
    fontWeight: 500,
    marginTop: '10px',
    color: theme.colorScheme === 'dark' ? '#ffffff' : '#000000',
    textAlign: 'center',
    '&:hover': {
      color: '#33999487'
    }
  },
  priceProduct: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: '16px',
    fontWeight: 500,
    color: 'red',
    textAlign: 'center'
  }
}))
