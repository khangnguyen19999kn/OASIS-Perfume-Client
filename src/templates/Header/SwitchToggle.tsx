import { Switch, useMantineColorScheme } from '@mantine/core'

import IconMoon from '@/constant/icons/IconMoon'
import IconSun from '@/constant/icons/IconSun'

export default function SwitchToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <Switch
      checked={colorScheme === 'dark'}
      onChange={() => toggleColorScheme()}
      size="lg"
      onLabel={<IconSun className="h-[10px] w-[10px]" />}
      offLabel={<IconMoon className="h-[10px] w-[10px]" />}
    />
  )
}
