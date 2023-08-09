import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  fullNav: {
    background: theme.colorScheme === 'dark' ? '#1a1b1e' : '#ffffff'
  },
  textTopNav: {
    color: theme.colorScheme === 'dark' ? '#fff' : '#15232d'
  },
  icon: {
    fill: theme.colorScheme === 'dark' ? '#fff' : '#15232d'
  }
}))
