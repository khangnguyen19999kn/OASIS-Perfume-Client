import { createStyles } from '@mantine/core'

import {
  animationContent,
  slide1Ipad,
  slideIn1Screen1279x1919,
  slideIn1Screen1920,
  slideIn2
} from './animation'

const img1 = '../../assets/imageCarousel/home2-slide1-bg.jpg'
const img2 = '../../assets/imageCarousel/home2-slide2-bg.jpg'

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
      animation: `${slideIn1Screen1279x1919} 2s ease-in-out`
    },
    position: 'absolute',
    bottom: '0',
    left: '5%',
    width: '800px',
    height: '700px',
    transition: 'all 0.5s ease-in-out',
    '@media (min-width: 640px) and (max-width: 1279px)': {
      height: '300px',
      width: '300px',
      left: '0',
      animation: `${slide1Ipad} 2s ease-in-out`
    },
    '@media (min-width: 1279px) and (max-width: 1919px)': {
      left: '-15%'
    },
    '@media (min-width: 1920px)': {
      left: '0%',
      animation: `${slideIn1Screen1920} 2s ease-in-out`
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
    }
  },
  grpContentSlide1: {
    '@media (min-width: 640px)': {
      animation: `${animationContent} 2s ease-in-out`
    }
  },
  grpContentSlide2: {
    '@media (min-width: 640px)': {
      animation: `${animationContent} 2s ease-in-out`
    }
  }
}))
