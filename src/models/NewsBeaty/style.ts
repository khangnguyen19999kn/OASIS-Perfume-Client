import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  grptittle: {
    width: '100%',
    height: '100%',
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column'
  },
  tittle: {
    fontSize: '60px',
    fontWeight: 400,
    color: '#33999487',
    fontFamily: "'Marck Script', sans-serif",
    '@media (max-width: 639px)': {
      fontSize: '45px'
    }
  },
  textContentTittle: {
    fontSize: '20px',
    fontWeight: 500,
    fontFamily: "'Kurale', sans-serif",
    marginBottom: '20px'
  },
  textDecriptionTittle: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: '16px',
    fontWeight: 400,
    color: '#9A9A9A'
  }
}))
