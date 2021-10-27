import styled from 'styled-components'
import Profile from './Profile'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import { useCallback, useRef, useState } from 'react'
import NavButtons from './NavButtons'

const MainContainer = styled.main``

export default function Main() {
  const maxCount = 4 // just dummy for testing
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const swiperRef = useRef(null)

  const handleNext = useCallback(() => {
    const swiper = swiperRef.current
    if (swiper) {
      swiper.slideNext()
    }
  }, [])

  const handlePrev = useCallback(() => {
    const swiper = swiperRef.current
    if (swiper) {
      swiper.slidePrev()
    }
  }, [])

  return (
    <MainContainer>
      <Swiper
        onInit={(swiper) => {
          swiperRef.current = swiper
        }}
        onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
      >
        {Array.from({ length: maxCount }).map((_, index) => (
          <SwiperSlide key={index}>
            <Profile />
          </SwiperSlide>
        ))}
      </Swiper>
      <NavButtons
        enableNext={currentSlideIndex < maxCount - 1}
        enablePrev={currentSlideIndex > 0}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </MainContainer>
  )
}
