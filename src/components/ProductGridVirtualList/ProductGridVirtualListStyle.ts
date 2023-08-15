import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  listItem: {
    gap: '10px',
    position: 'absolute',
    top: 0,
    left: 0,
    '@media (min-width: 640px) and (max-width: 1279px)': {
      gap: '15px'
    }
  }
}))
