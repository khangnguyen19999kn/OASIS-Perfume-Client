import { createStyles, getStylesRef, keyframes } from '@mantine/core'

const zoomInAnimation = keyframes({
  '0%': { backgroundSize: '100%' },
  // '1%': { backgroundSize: '110%' },
  '100%': { backgroundSize: '120%' }
})
const zoomOutAnimation = keyframes({
  '0%': { backgroundSize: '120%' },
  // '99%': { backgroundSize: '101%' },
  '100%': { backgroundSize: '100%' }
})
type BannerStyleParams = {
  backgroundUrl: string
}
export const useStyles = createStyles(
  (theme, { backgroundUrl }: BannerStyleParams) => ({
    banner: {
      ref: getStylesRef('banner'),
      width: '100%',
      height: '100%',
      backgroundImage: `url(${backgroundUrl})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      transition: 'all 0.3s ease',
      zIndex: 1,
      animation: `${zoomOutAnimation} 0.8s forwards`
    },
    wrapperBanner: {
      position: 'relative',
      width: '100%',
      height: '100%',
      zIndex: 2,
      ':hover': {
        [`& .${getStylesRef('banner')}`]: {
          animation: `${zoomInAnimation} 0.8s forwards`
        }
      },
      pointerEvents: 'auto',
      ':before': {
        content: '""',
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        width: '100%',
        height: '100%',
        border: `1px solid ${theme.colorScheme === 'dark' ? '#fff' : '#000'}`,
        zIndex: 2,
        pointerEvents: 'auto'
      },
      '@media (max-width: 639px)': {
        [`& .${getStylesRef('banner')}`]: {
          animation: 'none!important'
        }
      }
    },
    grpContent: {
      position: 'absolute',
      zIndex: 3,
      top: '20%',
      left: '10%',
      '@media (max-width: 639px)': {
        top: '10%'
      }
    },
    textContent: {
      fontSize: '20px',
      fontWeight: 500,
      fontFamily: "'Kurale', sans-serif",
      marginBottom: '20px'
    },
    title: {
      fontSize: '60px',
      fontWeight: 400,
      color: '#33999487',
      fontFamily: "'Marck Script', sans-serif",
      '@media (min-width: 640px) and (max-width: 1279px)': {
        fontSize: '45px'
      },
      '@media (min-width: 1280px) ': {
        fontSize: '50px'
      }
    }
  })
)
