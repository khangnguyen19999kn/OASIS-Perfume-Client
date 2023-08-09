import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  title: {
    fontSize: '45px',
    lineHeight: '30px',
    fontWeight: 500,
    fontFamily: "'Quentin', sans-serif",
    '@media (max-width: 639px)': {
      fontSize: '35px'
    }
  },
  button: {
    backgroundColor: '#000000!important',
    borderRadius: '5px',
    color: theme.colorScheme === 'dark' ? '#ffffff' : '#ffffff',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#000000b3!important'
    }
  },
  orderSumarySide: {
    backgroundColor: `${theme.colorScheme === 'dark' ? '#1a1b1e' : '#ffffff'}`
  },
  discountTitle: {
    color: `${theme.colorScheme === 'dark' ? '#fff' : '#000'}`
  }
}))
