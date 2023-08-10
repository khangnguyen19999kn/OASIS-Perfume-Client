import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  title: {
    fontSize: '45px',
    lineHeight: '30px',
    fontWeight: 500,
    fontFamily: "'Quentin', sans-serif",
    '@media (max-width: 639px)': {
      fontSize: '35px'
    }
  },
  subtitle: {
    fontSize: '20px',
    lineHeight: '30px',
    fontWeight: 500,
    margin: '10px 0px'
  },
  buttonSubmit: {
    backgroundColor: 'none!important',
    margin: '20px 0px',
    width: '100px',
    border: '1px solid #228be6',
    color: '#228be6',
    '&:hover': {
      backgroundColor: '#228be6',
      color: 'white',
      border: 'none'
    }
  },
  cartSide: {
    height: '300px',
    '@media (max-width: 639px)': {
      height: '250px',
      marginBottom: '20px'
    },
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: '10px',
      backgroundColor: '#F5F5F5',
      height: '8px'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundImage:
        '-webkit-gradient(linear,left bottom,left top,color-stop(0.44, #7a99d9),color-stop(0.72, #497dbd),color-stop(0.86, #1c3a94))',
      borderRadius: '10px'
    },
    '&::-webkit-scrollbar-track': {
      // border: '1px solid black',
      backgroundColor: '#F5F5F5'
    }
  }
}))
