import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";

const FoodCategory = () => {
  const data = [
    {
      img: img1,
      title: "Pizza",
    },
    {
      img: img2,
      title: "Salads",
    },
    {
      img: img3,
      title: "Deserts",
    },
    {
      img: img4,
      title: "Sups",
    },
    {
      img: img5,
      title: "Pizza",
    },
  ];
  return (
    <section className="my-12">
      <SectionTitle
        subHeading={"From 11:00 AM to 10:00 PM"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-12"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <img src={item.img} alt="" className="rounded-lg relative" />
            <h2 className="uppercase text-center text-2xl absolute bottom-5 left-1/4 ">{item.title}</h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FoodCategory;
