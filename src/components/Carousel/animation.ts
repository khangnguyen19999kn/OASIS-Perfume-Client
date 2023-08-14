import { keyframes } from '@mantine/core'

export const slideIn2 = keyframes({
  '0%': {
    opacity: 0,
    right: '-100px'
  },
  '100%': {
    opacity: 1,
    right: '0'
  }
})
// for screen @media (min-width: 1279px) and (max-width: 1919px)
export const slideIn1Screen1279x1919 = keyframes({
  '0%': {
    opacity: 0,
    left: '-20%'
  },
  '100%': {
    opacity: 1,
    left: '-15%'
  }
})
export const slideIn1Screen1920 = keyframes({
  '0%': {
    opacity: 0,
    left: '-20%'
  },
  '100%': {
    opacity: 1,
    left: '0%'
  }
})
export const slide1Ipad = keyframes({
  '0%': {
    opacity: 0,
    left: '-20%'
  },
  '100%': {
    opacity: 1,
    left: '0'
  }
})
export const animationContent = keyframes({
  '0%': {
    opacity: 0,
    top: '45%'
  },
  '100%': {
    opacity: 1,
    top: '35%'
  }
})
