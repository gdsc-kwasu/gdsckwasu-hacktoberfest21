import styled from 'styled-components'
import Profile from './Profile'
import { Swiper, SwiperSlide } from 'swiper/react'
import { students } from '../students'

import 'swiper/css'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import NavButtons from './NavButtons'
import { AppThemeContext } from '../context/AppTheme'

export default function Main() {
  const maxCount = students.length
  const { setTheme } = useContext(AppThemeContext)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const swiperRef = useRef(null)

  useEffect(() => {
    setTheme(students[currentSlideIndex].card_theme || '#ffffff')
  }, [currentSlideIndex, setTheme])

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
    <div>
      <Swiper
        onInit={(swiper) => {
          swiperRef.current = swiper
        }}
        onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
      >
        {students.map((student, index) => (
          <SwiperSlide key={index}>
            <Profile details={student} />
          </SwiperSlide>
        ))}
      </Swiper>
      <NavButtons
        enableNext={currentSlideIndex < maxCount - 1}
        enablePrev={currentSlideIndex > 0}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  )
}
