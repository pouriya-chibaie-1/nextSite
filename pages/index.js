import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import Header from '../components/Header';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import { Pagination, Navigation } from "swiper";
import styles from "../styles/Home.module.css"
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';
const App = () => {
  const BasicTabs = dynamic(() => import('../components/TabPageHome'), { ssr: false })
  return (<>

    <Header />
    <Swiper

      spaceBetween={50}
      loop={true}
      pagination={{ clickable: true, }}
      navigation={true}
      style={{ width: "100%", height: "31.5vw" }}
      className={`mySwiper ${styles.homeSider}`}
      slidesPerView={1}
      modules={[Pagination, Navigation]}
    >
      <SwiperSlide style={{ background: "red" }}>Slide 1</SwiperSlide>
      <SwiperSlide style={{ background: "aqua" }}>Slide 2</SwiperSlide>
      <SwiperSlide style={{ background: "green" }}>Slide 3</SwiperSlide>
      <SwiperSlide style={{ background: "blue" }}>Slide 4</SwiperSlide>
    </Swiper>
    <div className={styles.divContentGrid}>
      <div className={styles.gridItem}></div>
      <div className={styles.gridItem}></div>
      <div className={styles.gridItem}></div>
      <div className={styles.gridItem}></div>
    </div>
    <div>
      <Swiper

        spaceBetween={50}
        loop={true}
        navigation={true}
        style={{ width: "86%", height: "21.5vw",margin:"auto" ,display:"flex",justifyContent:"space-between"}}
        className={`mySwiper ${styles.homeSider}`}
        slidesPerView={3}
      >
        <SwiperSlide style={{ background: "white",textAlign:"center",border:"1px solid black" }}>Slide 1</SwiperSlide>
        <SwiperSlide style={{ background: "white",textAlign:"center",border:"1px solid black" }}>Slide 2</SwiperSlide>
        <SwiperSlide style={{ background: "white",textAlign:"center",border:"1px solid black" }}>Slide 3</SwiperSlide>
      </Swiper>
    </div>
    <Footer />
  </>);
}


export default App;