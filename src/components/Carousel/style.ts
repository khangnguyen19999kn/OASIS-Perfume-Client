import { createStyles, keyframes } from '@mantine/core'

const img1 = '../../assets/imageCarousel/home2-slide1-bg.jpg'
const img2 = '../../assets/imageCarousel/home2-slide2-bg.jpg'
const slideIn2 = keyframes({
  '0%': {
    opacity: 0,
    right: '-100px'
  },
  '100%': {
    opacity: 1,
    right: '0'
  }
})
const slideIn1 = keyframes({
  '0%': {
    opacity: 0,
    left: '0%'
  },
  '100%': {
    opacity: 1,
    left: '5%'
  }
})
const animationContent = keyframes({
  '0%': {
    opacity: 0,
    top: '45%'
  },
  '100%': {
    opacity: 1,
    top: '30%'
  }
})

export const useStyles = createStyles(() => ({
  slide1: {
    backgroundImage: `url(${img1})`,
    width: '100%',
    height: '700px',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    '@media (min-width: 320px) and (max-width: 639px)': {
      height: '250px'
    },
    '@media (min-width: 640px) and (max-width: 1279px)': {
      height: '350px'
    }
  },
  slide2: {
    backgroundImage: `url(${img2})`,
    width: '100%',
    height: '700px',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    '@media (min-width: 320px) and (max-width: 639px)': {
      height: '250px'
    },
    '@media (min-width: 640px) and (max-width: 1279px)': {
      height: '350px'
    }
  },
  wrapperimg1Slide2: {
    zIndex: 2,
    width: '100%',
    height: '100%'
  },
  wrapperimg1Slide1: {
    zIndex: 2,
    width: '100%',
    height: '100%'
  },
  img1Slide2: {
    width: '100%',
    height: '100%'
  },
  img1Slide1: {
    width: '100%',
    height: '100%'
  },
  grpImgSlide1: {
    '@media (min-width: 640px)': {
      animation: `${slideIn1} 2s ease-in-out`
    },
    position: 'absolute',
    bottom: '0',
    left: '5%',
    width: '800px',
    height: '700px',
    '@media (min-width: 640px) and (max-width: 1279px)': {
      height: '300px',
      width: '300px',
      left: '0'
    },
    '@media (min-width: 1279px) and (max-width: 1919px)': {
      left: '-15%'
    },
    '@media (min-width: 1920px)': {
      left: '-20%'
    }
  },
  grpImgSlide2: {
    '@media (min-width: 640px)': {
      animation: `${slideIn2} 2s ease-in-out`
    },
    position: 'absolute',
    bottom: '0',
    right: '0',
    width: '800px',
    height: '700px',
    '@media (min-width: 640px) and (max-width: 1279px)': {
      height: '300px',
      width: '300px',
      left: '0'
    },
 
  },
  grpContentSlide1: {
    '@media (min-width: 1280px)': {
      animation: `${animationContent} 2s ease-in-out`
    }
  },
  grpContentSlide2: {
    '@media (min-width: 1280px)': {
      animation: `${animationContent} 2s ease-in-out`
    }
  }
}))
