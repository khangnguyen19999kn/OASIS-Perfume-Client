import { Carousel } from '@mantine/carousel'
import { Text } from '@mantine/core'
import Image from 'next/image'
import { useState } from 'react'

import IconNext from '@/constant/icons/IconNext'
import IconPrevius from '@/constant/icons/IconPrevius'
import slide1Img from '@/public/assets/imageCarousel/home2-slide1-img1-2.png'
import slide2Img from '@/public/assets/imageCarousel/home2-slide2-img1-2.png'

import ButtonBlob from '../ButtonBlob'
import { useStyles } from './style'

export default function CarouselComponet() {
  const { classes, cx } = useStyles()
  const [activeSlide, setActiveSlide] = useState(0)

  const handleSlideChange = (newSlide: number) => {
    setActiveSlide(newSlide)
  }
  return (
    <div className="mobile:h-[250px] desktop:h-[fit-content] desktop:w-[100%] ">
      <Carousel
        maw="100%"
        mx="auto"
        loop={true}
        controlSize={50}
        nextControlIcon={
          <div>
            <IconNext className="h-[20px] w-[20px]" />
          </div>
        }
        previousControlIcon={
          <div>
            <IconPrevius className="h-[20px] w-[20px]" />
          </div>
        }
        onSlideChange={newSlide => handleSlideChange(newSlide)}
      >
        <Carousel.Slide className="mobile:h-[250px]">
          <div className={classes.slide1}>
            <div
              className={cx(
                activeSlide === 0 ? classes.grpImgSlide1 : '',
                'mobile:hidden'
              )}
            >
              <div className={classes.wrapperimg1Slide1}>
                <Image
                  className={classes.img1Slide1}
                  src={slide1Img}
                  width={400}
                  height={400}
                  alt="slide2"
                />
              </div>
            </div>
            <div
              className={cx(
                activeSlide === 0 ? classes.grpContentSlide1 : '',
                'absolute left-[45%] top-[35%] tablet:w-[500px] w-[650px] mobile:w-full mobile:top-[10px] mobile:left-[15px] p-3 mobile:z-10'
              )}
            >
              <div>
                <Text className="font-[Kurale, sans-serif] text-[64px] font-extralight leading-[18px] mobile:text-[24px] tablet:text-[40px]">
                  Fragrance Journey
                </Text>
              </div>
              <div className="mt-[45px] w-[fit-content] pl-3 text-[#616161] mobile:mt-4 mobile:w-full mobile:pl-0 tablet:mt-[20px] tablet:p-0">
                <Text>
                  Welcome to OASIS Fragrance, your ultimate destination for
                  exquisite fragrances. Indulge in the world of scents and
                  embark on a captivating fragrance journey through our wide
                  range of perfumes.
                </Text>
              </div>
              <div className="mt-5 mobile:mt-3">
                <ButtonBlob url="#" text="See more" />
              </div>
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide className="mobile:h-[250px]">
          <div className={classes.slide2}>
            <div
              className={cx(
                activeSlide === 1 ? classes.grpImgSlide2 : '',
                'mobile:hidden'
              )}
            >
              <div className={classes.wrapperimg1Slide2}>
                <Image
                  className={classes.img1Slide2}
                  src={slide2Img}
                  width={400}
                  height={400}
                  alt="slide2"
                />
              </div>
            </div>
            <div
              className={cx(
                activeSlide === 1 ? classes.grpContentSlide2 : '',
                'absolute laptop:left-[10%] laptop:top-[35%] left-[40%] top-[35%] tablet:w-[500px] w-[650px] mobile:w-full mobile:top-[10px] mobile:left-[15px] p-3 mobile:z-10 bigDesktop:left-[25%] '
              )}
            >
              <div>
                <Text className="font-[Kurale, sans-serif] text-[64px] font-extralight leading-[18px] mobile:text-[24px]">
                  For Your Charm
                </Text>
              </div>
              <div className="mt-[45px] w-2/3 pl-3 text-[#616161] mobile:mt-3 mobile:w-full mobile:pl-0 bigDesktop:text-[30px]">
                <Text>
                  Electric ray demoiselle squeaker unicorn fish Kafue pike bango
                  temperate ocean-bass, yellow bass coffinfish yellowfin
                  customers.
                </Text>
              </div>
              <div className="mt-5">
                <ButtonBlob url="#" text="See more" />
              </div>
            </div>
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  )
}
