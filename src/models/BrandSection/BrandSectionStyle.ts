import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  containerBrandSection: {
    width: '100%',
    height: '300px',
    backgroundImage: "url('./assets/imageGlobal/home2-bg-10.jpg')",
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    '@media (max-width: 639px)': {
      overflowX: 'auto',
      justifyContent: 'unset'
    }
  },

  logoBrandSection: {
    width: '200px',
    height: '200px',
    fill: '#69b4b0',
    cursor: 'pointer',
    '&:hover': {
      fill: '#9ccdcb',
      transition: 'fill 0.5s'
    },
    '@media (max-width: 639px)': {
      marginRight: '30px'
    }
  }
}))
