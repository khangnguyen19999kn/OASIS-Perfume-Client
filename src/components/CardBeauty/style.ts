import { createStyles, getStylesRef, keyframes } from '@mantine/core'

const zoomInAnimation = keyframes({
  '0%': { backgroundSize: 'cover' },
  '1%': { backgroundSize: '110%' },
  '100%': { backgroundSize: '120%' }
})
type CardBeautyStyleProps = {
  image: string
}
// const img1 = '../../assets/BeautyBlog/blog1.jpg'
export const useStyles = createStyles(
  (theme, { image }: CardBeautyStyleProps) => ({
    cardBeautyBlog: {
      width: '25%',
      border: '1px solid #E5E5E5',
      display: 'flex',
      flexDirection: 'column',
      padding: '15px 20px',
      cursor: 'pointer',
      '&:hover': {
        border: '1px solid #000000',
        transition: 'border-color 0.3s'
      },
      [`&:hover .${getStylesRef('imgCardBeautyBlog')}`]: {
        animation: `${zoomInAnimation} 1s forwards`
      },
      '@media (max-width: 768px)': {
        width: '90%',
        marginBottom: '10px',
        marginRight: '10px'
      }
    },
    imgCardBeautyBlog: {
      ref: getStylesRef('imgCardBeautyBlog'),
      width: '100%',
      height: '300px',
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    },
    timeAndAuthor: {
      display: 'flex',
      color: '#969696',
      justifyContent: 'center',
      marginTop: '10px'
    },
    btnReadMore: {
      background: 'none!important',
      padding: '0',
      borderRadius: '0',
      color: '#93c9c6',
      borderBottom: '1px solid #93c9c6',
      '&:hover': {
        border: 'none',
        transition: 'border 0.3s'
      }
    },
    tittleBlog: {
      color: theme.colorScheme === 'dark' ? '#ffffffa8' : '#232323',
      marginTop: '10px',
      lineHeight: '1.5em',
      fontWeight: 400,
      fontFamily: '"Raleway", sans-serif',
      fontSize: '24px'
    }
  })
)
