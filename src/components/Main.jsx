import styled from 'styled-components'
import Profile from './Profile'
import { Swiper, SwiperSlide } from 'swiper/react'
import { students } from '../students'

import 'swiper/css'
import { useCallback, useContext, useRef, useState } from 'react'
import NavButtons from './NavButtons'
import { AppThemeContext } from '../context/AppTheme'
import Progressbar from './Progressbar'

export default function Main() {
  const { setTheme } = useContext(AppThemeContext)
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
    <main>
      <Swiper
        onInit={(swiper) => {
          swiperRef.current = swiper
          setTheme(students[swiper.activeIndex].card_theme || '#ffffff')
        }}
        onSlideChange={(swiper) => {
          setCurrentSlideIndex(swiper.activeIndex)
        }}
        onTransitionEnd={(swiper) => {
          setTheme(students[swiper.activeIndex].card_theme || '#ffffff')
        }}
      >
        {students.map((student, index) => (
          <SwiperSlide key={index}>
            <Profile details={student} />
          </SwiperSlide>
        ))}
      </Swiper>
      <NavButtons
        enableNext={currentSlideIndex < students.length - 1}
        enablePrev={currentSlideIndex > 0}
        onNext={handleNext}
        onPrev={handlePrev}
      />
      <Progressbar progress={currentSlideIndex + 1} total={students.length} />
    </main>
  )
}
