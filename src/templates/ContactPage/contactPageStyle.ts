import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  mainTextContent: {
    color: '#39928f',
    fontSize: '30px',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonLocation: {
    background: 'transparent',
    '&:hover': {
      background: 'transparent'
    }
  },
  iconLocation: {
    height: '30px',
    width: '30px',
    fill: `${theme.colorScheme === 'dark' ? '#fff' : '#000'}`,
    '&:hover': {
      fill: '#39928f'
    }
  },
  iconSocialNetwork: {
    height: '30px',
    width: '30px',
    fill: `${theme.colorScheme === 'dark' ? '#fff' : '#000'}`,
    '&:hover': {
      fill: '#39928f'
    }
  },
  iframe: {
    '@media (max-width: 639px)': {
      width: '100%'
    }
  }
}))
