import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import Header from '../components/Header';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import { Pagination, Navigation } from "swiper";
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';
const App  = () => {
  const BasicTabs = dynamic(()=>import('../components/TabPageHome'),{ssr:false})
  return (<>

  <Header/>
  <Swiper 
 
 style={{width:"70%",height:"400px",marginTop:"22px"}}
 spaceBetween={50}
 loop={true}
 pagination={{ clickable: true,}}
 navigation={true}
 className="mySwiper"
 slidesPerView={1}
 modules={[Pagination, Navigation]}
 >
  <SwiperSlide     style={{background:"red"}}>Slide 1</SwiperSlide>
      <SwiperSlide style={{background:"aqua"}}>Slide 2</SwiperSlide>
      <SwiperSlide style={{background:"green"}}>Slide 3</SwiperSlide>
      <SwiperSlide style={{background:"blue"}}>Slide 4</SwiperSlide>
  </Swiper>
 <BasicTabs/>
 <Footer />
  </>  );
}

 
export default App ;