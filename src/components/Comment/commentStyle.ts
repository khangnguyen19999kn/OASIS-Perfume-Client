import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  rateReview: {
    color: `${theme.colorScheme === 'dark' ? '#ffffff' : '#000000'}`,
    marginBottom: '30px'
  }
}))
