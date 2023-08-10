import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  containerFooter: {
    width: '100%',
    height: '300px',
    backgroundColor: '#1e1e1e',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 639px)': {
      height: 'fit-content',
      paddingBottom: '10px'
    }
  },
  mainFooter: {
    width: '50%',
    height: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 639px)': {
      width: '90%',
      // flexDirection: 'column',
      height: '100%'
    },
    '@media (min-width: 1279px)': {
      width: '80%'
    },
    '@media (min-width: 767px)': {
      width: '80%'
    }
  },
  logoContact: {
    width: '300px',
    height: '100px'
  },
  subscribeTittle: {
    color: '#ffffff',
    fontWeight: 400,
    fontFamily: '"Raleway", sans-serif',
    marginBottom: '20px'
  },
  inputsubcribe: {
    marginBottom: '20px',
    background: '#00000003',
    border: 'none',
    color: '#9ccdcb'
  },
  miniFooter: {
    width: '100%',
    height: '100px',
    backgroundColor: '#1e1e1e',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '1px solid #ffffff1a'
  },
  mainMiniFooter: {
    width: '50%',
    height: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 639px)': {
      width: '90%'
    }
  },
  tittleAuthor: {
    color: '#b1b0b0'
  }
}))
