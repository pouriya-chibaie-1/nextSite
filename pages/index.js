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
const  App  = () => {
  const BasicTabs = dynamic(()=>import('../components/TabPageHome'),{ssr:false})
  return (<>

  <Header/>
  <Swiper 
 
 spaceBetween={50}
 loop={true}
 pagination={{ clickable: true,}}
 navigation={true}
 style={{width:"70%",height:"calc(70vw / 1000 * 500)","@media (max-width: 500px)":{ ".homeSider":{
  width: "90%"
  }}}}
 className={`mySwiper ${styles.homeSider}`}
 slidesPerView={1}
 modules={[Pagination, Navigation]}
 >
      <SwiperSlide style={{background:"red"}}>Slide 1</SwiperSlide>
      <SwiperSlide style={{background:"aqua"}}>Slide 2</SwiperSlide>
      <SwiperSlide style={{background:"green"}}>Slide 3</SwiperSlide>
      <SwiperSlide style={{background:"blue"}}>Slide 4</SwiperSlide>
  </Swiper>
 <BasicTabs/>
 <Footer />
  </>  );
}

 
export default App ;