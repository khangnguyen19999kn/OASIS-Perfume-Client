import { useState } from 'react'

import Navbar from './Navbar'

export type ActiveResponsive = {
  tog: string
  setTog: (value: string) => void
}
export default function Header() {
  const [tog, setTog] = useState('disable')

  return (
    <div className={tog === 'responsive' ? 'header-responsive ' : 'header '}>
      <Navbar tog={tog} setTog={setTog} />
    </div>
  )
}
