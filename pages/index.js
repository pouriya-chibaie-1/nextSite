import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import { Pagination, Navigation } from "swiper";
import styles from "../styles/Home.module.css"
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';
import useDeviceSize from '../components/useDeviceSize';
import { useState } from 'react';
import Image from 'next/image';
const App = () => {
  const [sliderPerView,setSliderPerView] = useState(1);
  const s = useDeviceSize()
console.log(s);
useEffect(()=>{
if(s[0]>=500){
  setSliderPerView(2)
}
if(s[0]>=800){
  setSliderPerView(3)
}
if(s[0]<=500){
  setSliderPerView(1)
}
},[s])
  const BasicTabs = dynamic(() => import('../components/TabPageHome'), { ssr: false })
  return (<>
<div style={{overflowX:"hidden"}}>

    <Header />
    <Swiper
     
      spaceBetween={0}
      loop={true}
      pagination={{ clickable: true, }}
      navigation={true} 
      style={{ width: "100%", height: "31.5vw" }}
      className={`${styles.homeSider}`}
      slidesPerView={1}
      modules={[Pagination, Navigation]}

    >
      <SwiperSlide ><Image src={`/image/slider1.jpg`} layout="fill" /></SwiperSlide>
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
    <div >
      <div style={{width:"100%" ,direction:"rtl" , marginBottom:"22px"}}>

      <h1 style={{textAlign:"right" , marginRight:"35px" ,width:"240px", borderBottom:"4px solid black"}}>اخبار و اطلاعیه ها</h1>
      </div>
      <Swiper
     slidesPerView={sliderPerView}
    spaceBetween={50}
        loop={true}
        navigation={true}
        style={{ width: "86%", height: "21.5vw",margin:"auto" ,display:"flex",justifyContent:"space-between"}}
      >
        <SwiperSlide style={{ background: "white",textAlign:"center",border:"1px solid black",backgroundColor:"red" }} >Slide 1</SwiperSlide>
        <SwiperSlide style={{ background: "white",textAlign:"center",border:"1px solid black",backgroundColor:"green" }}>Slide 2</SwiperSlide>
        <SwiperSlide style={{ background: "white",textAlign:"center",border:"1px solid black",backgroundColor:"blue" }}>Slide 3</SwiperSlide>
      </Swiper>
    </div>
    <Footer />
</div>

  </>);
}


export default App;







































