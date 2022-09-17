import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import Header from '../components/Header';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import StoreIcon from '@mui/icons-material/Store';
import { Pagination, Navigation } from "swiper";
import styles from "../styles/Home.module.css"
const App  = () => {
  return (<>
  <Header/>
  <Swiper 
 
  style={{width:"100%",height:"400px",marginTop:"22px"}}
      spaceBetween={50}
      loop={true}
        pagination={{ clickable: true,}}
        navigation={true}
        className="mySwiper"
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
        modules={[Pagination, Navigation]}
      onSwiper={(swiper) => console.log(swiper)}>
  <SwiperSlide style={{background:"red"}}>Slide 1</SwiperSlide>
      <SwiperSlide style={{background:"aqua"}}>Slide 2</SwiperSlide>
      <SwiperSlide style={{background:"green"}}>Slide 3</SwiperSlide>
      <SwiperSlide style={{background:"blue"}}>Slide 4</SwiperSlide>
  </Swiper>
  <div className={styles.divIcon3}>
    <div className={styles.iconInDiv3}>1</div>
    <div className={styles.iconInDiv3}>2</div>
    <div className={styles.iconInDiv3}><div><h3>+400</h3> <StoreIcon className={styles.icon}/></div></div>
  </div>
  </>  );
}
 
export default App ;