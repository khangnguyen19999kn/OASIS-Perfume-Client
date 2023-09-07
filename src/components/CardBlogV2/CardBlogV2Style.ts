import { createStyles, getStylesRef, keyframes } from '@mantine/core'

type CardBeautyStyleProps = {
  image: string
}
const fadeInAnimation = keyframes({
  '0%': { opacity: 0, transform: 'translateY(0px)' },
  '100%': { opacity: 1, transform: 'translateY(-50px)' }
})
export const useStyles = createStyles(
  (_theme, { image }: CardBeautyStyleProps) => ({
    cardBeautyBlog: {
      width: '25%',
      height: '500px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
      '&:hover': {
        boxShadow: '3px 3px 20px #00000080',
        transition: 'box-shadow 0.3s'
      },
      [`&:hover .${getStylesRef('content')}`]: {
        background: '#54686ecc',
        transition: 'all 0.3s ease-in-out'
      },
      [`&:hover .${getStylesRef('tittleBlog')}`]: {
        transform: 'translateY(-50px)',
        transition: 'transform 0.3s ease-in-out'
      },
      [`&:hover .${getStylesRef('lineUnderTitle')}`]: {
        width: '30%',
        transition: 'width 1s ease-in-out'
      },
      [`&:hover .${getStylesRef('BtnReadMore')}`]: {
        display: 'flex',
        justifyContent: 'center',
        animation: `${fadeInAnimation} 1s forwards`,
        transition: 'all 1s ease-in-out'
      },
      '@media (max-width: 768px)': {
        width: '90%',
        height: '300px',
        margin: '5px 3px'
      }
    },
    imgCardBeautyBlog: {
      ref: getStylesRef('imgCardBeautyBlog'),
      width: '100%',
      height: '100%',
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    },
    wrapperContent: {
      position: 'relative',
      width: '100%',
      height: '100%'
    },
    content: {
      display: 'flex',
      color: '#969696',
      justifyContent: 'center',
      position: 'absolute',
      flexDirection: 'column',
      background: '#40545e80',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      ref: getStylesRef('content')
    },
    wrapperBtnReadMore: {
      display: 'none',
      position: 'absolute',
      top: '60%',
      width: '100%',
      '@media (min-width: 640px) and (max-width: 1279px)': {
        top: '70%'
      },
      ref: getStylesRef('BtnReadMore')
    },
    btnReadMore: {
      background: 'none!important',
      padding: '0',
      borderRadius: '0',
      color: '#93c9c6',
      borderBottom: '1px solid #93c9c6',
      '&:hover': {
        border: 'none',
        transition: 'border .5s'
      }
    },
    wrappertittleBlog: {
      position: 'absolute',
      top: '40%',
      textAlign: 'center',
      width: '100%',
      '@media (min-width: 640px) and (max-width: 1279px)': {
        top: '35%'
      },
      ref: getStylesRef('tittleBlog')
    },
    lineUnderTitle: {
      height: '2px',
      width: '0px',
      background: '#93c9c6',
      marginTop: '10px',
      ref: getStylesRef('lineUnderTitle')
    },
    tittleBlog: {
      color: '#ffffff',
      marginTop: '10px',
      lineHeight: '1.5em',
      fontWeight: 400,
      fontFamily: '"Kurale", sans-serif',
      fontSize: '24px',
      wordWrap: 'break-word',
      width: '100%'
    }
  })
)
