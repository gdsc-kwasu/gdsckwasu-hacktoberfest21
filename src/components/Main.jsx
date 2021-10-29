import Profile from './Profile'
import { Swiper, SwiperSlide } from 'swiper/react'
import { students } from '../students'

import 'swiper/css'
import { useCallback, useContext, useRef, useState } from 'react'
import NavButtons from './NavButtons'
import { AppThemeContext } from '../context/AppTheme'
import Progressbar from './Progressbar'

export default function Main() {
  const { setTheme } = useContext(AppThemeContext) // setTheme method provided by AppThemeContext
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0) // state for keeping track of active profile index
  const swiperRef = useRef(null) // Swiper Object ref

  const handleNext = useCallback(() => {
    const swiper = swiperRef.current
    // swipe on if swiper libary as been initialized
    if (swiper) {
      swiper.slideNext()
    }
  }, [])

  const handlePrev = useCallback(() => {
    const swiper = swiperRef.current
    // swipe on if swiper libary as been initialized
    if (swiper) {
      swiper.slidePrev()
    }
  }, [])

  return (
    <main>
      <Swiper
        onInit={(swiper) => {
          // swiper library initialized

          // keep a reference of the swiper object (for nav buttons)
          swiperRef.current = swiper
          setTheme(students[swiper.activeIndex].theme) // set theme to active slide profile theme color
        }}
        onSlideChange={(swiper) => {
          // on slide change, set current slide state
          setCurrentSlideIndex(swiper.activeIndex)
        }}
        onTransitionEnd={(swiper) => {
          // on slide transition (called after slide transition as ended)
          // set theme to active slide profile theme color (to achieve transition effect)
          setTheme(students[swiper.activeIndex].theme)
        }}
      >
        {students.map((student, index) => (
          <SwiperSlide key={index}>
            <Profile {...student} />
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
