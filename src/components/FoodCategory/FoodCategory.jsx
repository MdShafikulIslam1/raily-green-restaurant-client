import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from 'swiper/modules';
import img1 from '../../assets/home/slide1.jpg'
import img2 from '../../assets/home/slide2.jpg'
import img3 from '../../assets/home/slide3.jpg'
import img4 from '../../assets/home/slide4.jpg'
import img5 from '../../assets/home/slide5.jpg'

const FoodCategory = () => {
    const data = [
        {
            img:img1,
            title:"Pizza"
        },
        {
            img:img2,
            title:"Pizza"
        },
        {
            img:img3,
            title:"Pizza"
        },
        {
            img:img4,
            title:"Pizza"
        },
        {
            img:img5,
            title:"Pizza"
        },
    ]
  return (
    <Swiper
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {
        data.map((item,i) => <SwiperSlide key={i}>
        <img src={item.img} alt="" />
      </SwiperSlide>)
      }
    </Swiper>
  );
};

export default FoodCategory;
