import React from 'react';
import '../../assets/css/Projects.css';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

// ✅ Load all images from folder
const imagesDay1 = import.meta.glob('../../assets/img/Harvest2025/Day1/*.{avif,png,jpg,jpeg,svg}', { eager: true });

const Images = () => {
  // ✅ Convert the imported object into an array of image paths
  const imageList = Object.values(imagesDay1).map((img, idx) => img.default);

  return (
    <section className="projects" id="projects">
      <h2>Image Gallery</h2>
      <div className="project-container">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
        >
          {/* ✅ Render each image as a SwiperSlide */}
          {imageList.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="project-content">
                <img
                  src={src}
                  alt={`Project ${index + 1}`}
                  className="project-img"
                />
              </div>
            </SwiperSlide>
          ))}

          {/* Swiper navigation */}
          <div className="swiper-button-prev">
            <ChevronLeft />
          </div>
          <div className="swiper-button-next">
            <ChevronRight />
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Images;
