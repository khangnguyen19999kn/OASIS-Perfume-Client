import { createStyles, getStylesRef, keyframes } from '@mantine/core'

const zoomInAnimation = keyframes({
  '0%': { backgroundSize: 'cover' },
  '1%': { backgroundSize: '110%' },
  '100%': { backgroundSize: '120%' }
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
      transition: 'transform 0.3s',
      zIndex: 1
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
      fontFamily: "'Raleway', sans-serif",
      marginBottom: '20px'
    },
    title: {
      fontSize: '60px',
      fontWeight: 400,
      color: '#33999487',
      fontFamily: "'Quentin', sans-serif",
      '@media (max-width: 639px)': {
        fontSize: '50px'
      },
      '@media (min-width: 1279px) ': {
        fontSize: '50px'
      },
      '@media (min-width: 640px)': {
        fontSize: '50px'
      }
    }
  })
)
