import { whishes } from '../constants'
import Wish from '../components/Wish'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './app.module.css'

// Import Swiper styles
import 'swiper/css/pagination'
import 'swiper/css'

function App() {
  return (
    <Swiper modules={[Pagination]} spaceBetween={0} slidesPerView={1} centeredSlides={true} pagination={true}>
      {whishes.map((congratulation, index) => (
        <SwiperSlide key={index}>
          <Wish congratulation={congratulation} />
        </SwiperSlide>
      ))}
      <SwiperSlide>
        <div className={styles.hb}>
          <span>C днем рождения! ❤️</span>
          <span>(с днем очка)</span>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default App
