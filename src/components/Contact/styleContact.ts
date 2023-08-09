import { createStyles, getStylesRef } from '@mantine/core'

export const useStyles = createStyles(() => ({
  infoContact: {
    width: 'fit-content',
    cursor: 'pointer',
    [`&:hover .${getStylesRef('logoInfoContact')}`]: {
      fill: '#9ccdcb'
    },
    [`&:hover .${getStylesRef('infoContactTittle')}`]: {
      color: '#9ccdcb'
    }
  },
  logoInfoContact: {
    ref: getStylesRef('logoInfoContact')
  },
  infoContactTittle: {
    ref: getStylesRef('infoContactTittle')
  }
}))
