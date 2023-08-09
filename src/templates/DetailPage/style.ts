import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  tittleNameDetail: {
    fontSize: '45px',
    lineHeight: '30px',
    fontWeight: 500,
    marginBottom: '15px',
    fontFamily: "'Quentin', sans-serif",
    '@media (max-width: 639px)': {
      fontSize: '40px'
    }
  },
  priceDetail: {
    fontSize: '30px',
    lineHeight: '30px',
    fontWeight: 500,
    marginBottom: '50px'
  },
  rootSelectQuantity: {
    position: 'relative',
    zIndex: 1,
    ':before': {
      content: "'QTY'",
      position: 'absolute',
      top: '-2px',
      left: '30px',
      transform: 'translateY(-50%)',
      zIndex: 2,
      backgroundColor: '#ffffff',
      display: `${theme.colorScheme === 'dark' ? 'none' : 'block'}`
    }
  },
  rootSelectSize: {
    position: 'relative',
    zIndex: 1,
    ':before': {
      content: "'Size'",
      position: 'absolute',
      top: '-2px',
      left: '30px',
      transform: 'translateY(-50%)',
      zIndex: 2,
      backgroundColor: '#ffffff',
      display: `${theme.colorScheme === 'dark' ? 'none' : 'block'}`
    }
  },
  buttonWriteReview: {
    backgroundColor: `${
      theme.colorScheme === 'dark' ? '#ffffff!important' : '#000000!important'
    }`,
    color: `${theme.colorScheme === 'dark' ? '#000000' : '#ffffff'}`,
    '&:hover': {
      backgroundColor: 'transparent!important',
      border: `1px solid ${
        theme.colorScheme === 'dark' ? '#ffffff' : '#000000'
      }`,
      color: `${theme.colorScheme === 'dark' ? '#ffffff' : '#000000'}`
    }
  },
  reviewSide: {
    width: '50%',
    backgroundColor: `${
      theme.colorScheme === 'dark' ? '#202226' : 'aliceblue'
    }`,
    padding: '20px',
    '@media (max-width: 639px)': {
      width: '100%'
    }
  },
  titlePanel: {
    color: `${theme.colorScheme === 'dark' ? '#ffffff' : '#000000'}`
  },
  contentCollapseSide: {
    color: `${theme.colorScheme === 'dark' ? '#ffffff' : '#202226'}`
  },
  iconHeaderCollapse: {
    color: `${theme.colorScheme === 'dark' ? '#ffffff' : '#000000'}`
  }
}))
