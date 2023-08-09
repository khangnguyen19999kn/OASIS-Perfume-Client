import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  mainImg: {
    width: '100%!important',
    height: '500px!important',
    '@media (max-width: 639px)': {
      height: 'fit-content!important'
    }
  },
  thumpSlide: {
    '&::-webkit-scrollbar': {
      width: '10px',
      backgroundColor: '#F5F5F5',
      height: '8px'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundImage:
        '-webkit-gradient(linear,left bottom,left top,color-stop(0.44, rgb(122,153,217)),color-stop(0.72, rgb(73,125,189)),color-stop(0.86, rgb(28,58,148)))',
      borderRadius: '10px'
    },
    '&::-webkit-scrollbar-track': {
      // border: '1px solid black',
      backgroundColor: '#F5F5F5'
    }
  }
}))
