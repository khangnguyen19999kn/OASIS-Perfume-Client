import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

import IconBook from '@/constant/icons/IconBook'
import Logo from '@/public/assets/imageGlobal/LogoVer2.png'

import type { ActiveResponsive } from '.'
import SearchAuto from './SearchAuto'
import SideBar from './SideBar'
import { useStyles } from './style/FullNavStyle'
import TopHeader from './TopHeader'

export default function Navbar({ tog, setTog }: ActiveResponsive) {
  const { classes, cx } = useStyles()
  const toogle = () => {
    if (tog === 'disable') {
      setTog('responsive')
    } else setTog('disable')
  }

  const ref = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const { deltaY } = event
      if (deltaY > 0) {
        if (ref.current) {
          ref.current.classList.add('hidden')
          ref.current.classList.remove('full-Nav')
        }
      } else if (deltaY < 0) {
        if (ref.current) {
          ref.current.classList.remove('hidden')
          ref.current.classList.add('full-Nav')
        }
      }
    }

    window.addEventListener('wheel', handleScroll)

    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, [])
  const whenSelectLink = () => {
    setTimeout(() => {
      setTog('disable')
    }, 100)
  }
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const handleOpenSidebar = () => {
    setIsSidebarOpen(true)
  }

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false)
  }
  return (
    <div className={cx('full-Nav', classes.fullNav)} ref={ref}>
      <div className="relative flex w-1/6 justify-center mobile:hidden tablet:w-[10%]">
        <div onMouseDown={handleOpenSidebar}>
          <IconBook
            className={cx(
              'h-[30px] w-[30px] hover:fill-[#33c1ec]',
              classes.icon
            )}
          />
        </div>
        <div>
          <SideBar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
        </div>
      </div>
      <div
        className={`respon-logo${tog === 'responsive' ? ' disable-item' : ''}`}
      >
        <Link href="/">
          <Image className="img-logo h-[100%] w-[100%]" src={Logo} alt="asd" />
        </Link>
      </div>
      <div className={`topnav ${tog}`} id="myTopnav">
        <Link
          className="respon-logo2"
          onMouseDown={() => {
            whenSelectLink()
          }}
          href="/"
        >
          <Image className="img-logo h-[100%] w-[100%]" src={Logo} alt="asd" />
        </Link>
        <span className="search-Side">
          <SearchAuto />
        </span>
        <Link
          href="/"
          onMouseDown={() => {
            whenSelectLink()
          }}
          className={classes.textTopNav}
        >
          Home
        </Link>
        <div className="dropdown">
          <button type="button" className={cx(classes.textTopNav, 'dropbtn')}>
            Products
          </button>
          <div className="dropdown-content">
            <Link
              href="/menCollection"
              onMouseDown={() => {
                whenSelectLink()
              }}
            >
              Men Collection
            </Link>
            <Link
              href="/womenCollection"
              onMouseDown={() => {
                whenSelectLink()
              }}
            >
              Women Collection
            </Link>
            <Link
              href="/unisexCollection"
              onMouseDown={() => {
                whenSelectLink()
              }}
            >
              Unisex Collection
            </Link>
          </div>
        </div>
        <div className="Logo-top-header mobile:hidden">
          <h4 className="m-0">
            <Link href="/">
              <Image src={Logo} alt="logo" width={250} height={100} />
            </Link>
          </h4>
        </div>
        <Link
          href="/store"
          onMouseDown={() => {
            whenSelectLink()
          }}
          className={classes.textTopNav}
        >
          Store
        </Link>

        <Link href="/contact" className={classes.textTopNav}>
          Contact
        </Link>
      </div>
      <div className="w-1/6 tablet:invisible tablet:w-0">
        <TopHeader />
      </div>
      <div className="relative h-[50px] w-[50px] tablet:invisible tablet:w-0">
        <div className="absolute right-5 top-3">
          <button
            className="icon laptop:hidden desktop:hidden "
            type="button"
            onClick={e => {
              toogle()
              e.preventDefault()
            }}
          >
            <a className={classes.textTopNav} href="#">
              {tog === 'disable' ? '☰' : 'X'}
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}
