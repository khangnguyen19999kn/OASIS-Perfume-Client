import { createStyles } from '@mantine/core'

type SocialNetworkGroupStyleProps = {
  color?: string
  hoverColor?: string
}

export const useStyles = createStyles(
  (theme, { color, hoverColor }: SocialNetworkGroupStyleProps) => ({
    icon: {
      width: '30px',
      height: '30px',
      fill: `${
        theme.colorScheme === 'dark' ? '#ffffff' : `${color || '#ffffff'}`
      }`,
      '&:hover': {
        fill: `${hoverColor || '#9ccdcb'}`
      }
    }
  })
)
