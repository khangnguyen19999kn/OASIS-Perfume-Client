import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  icon: {
    fill: theme.colorScheme === 'dark' ? '#fff' : '#15232d'
  }
}))
