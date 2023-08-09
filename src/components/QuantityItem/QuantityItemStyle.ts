import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  buttonQuantity: {
    width: '50px',
    height: '50px',
    backgroundColor: 'none!important',
    borderRadius: '0px',
    padding: '0px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: 'transparent!important'
    },
    '@media (max-width: 639px)': {
      width: '20px',
      height: '20px'
    }
  },
  buttonQuantityLabel: {
    color: theme.colorScheme === 'dark' ? '#ffffff' : '#000000',
    fontSize: '16px',
    fontWeight: 500,
    fontFamily: "'Nunito Sans', sans-serif",
    '@media (max-width: 639px)': {
      width: '12px',
      height: '20px',
      fontSize: '16px'
    }
  }
}))
