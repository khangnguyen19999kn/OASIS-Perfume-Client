import { Image } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import React from 'react'

import { useStyles } from './carouselThumpStyle'

type Carousel = {
  img: string[]
  setActive: (index: number) => void
  active: number
}
export default function CarouselThump({ img, setActive, active }: Carousel) {
  const { classes, cx } = useStyles()
  const { width } = useViewportSize()

  const slides = img.map((item, index) => (
    <div
      key={index}
      className={active === index ? 'mySlide active' : 'mySlides'}
    >
      <Image src={item} className={classes.mainImg} alt="imgthump" />
    </div>
  ))
  const changeSlide = (slideActive: number) => {
    setActive(slideActive)
  }
  const nextPrevSlide = (type: string) => {
    if (type === 'next') {
      if (active === slides.length - 1) {
        setActive(0)
      } else {
        setActive(active + 1)
      }
    } else if (active === 0) {
      setActive(slides.length - 1)
    } else {
      setActive(active - 1)
    }
  }
  const checkThump = () => {
    if (img.length < 4 && width > 1440) {
      return 'justify-center'
    }
    return 'justify-normal'
  }
  const showThum = img.map((item, numberSlideThump) => (
    <div
      key={numberSlideThump}
      onClick={() => {
        changeSlide(numberSlideThump)
      }}
      className={
        active === numberSlideThump ? 'column activeThum mr-1' : 'column mr-1'
      }
    >
      <Image width={120} height={100} src={item} alt="Norway" />
    </div>
  ))
  return (
    <div>
      <div className="main-slide relative ">
        {slides}
        <div className="sideNextPrev">
          <a
            className="prev"
            onClick={() => {
              nextPrevSlide('prev')
            }}
            href="#"
          >
            &#10094;
          </a>
          <a
            className="next"
            onClick={() => {
              nextPrevSlide('next')
            }}
            href="#"
          >
            &#10095;
          </a>
        </div>
      </div>
      <div
        className={cx(
          `row mt-5 flex overflow-auto  ${checkThump()}`,
          classes.thumpSlide
        )}
      >
        {showThum}
      </div>
    </div>
  )
}
