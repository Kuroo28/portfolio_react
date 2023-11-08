import React from 'react';
import './ProjectSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.webp';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project5.jpg';
import project6 from '../assets/project6.webp';

const ProjectSection = () => {
  return (
    <>
    <div className='main-text'>
      <h2>Some of my recent works <br/><span>Projects</span></h2>
    </div>
    <div className='main-container'>
      <Swiper        
        spaceBetween={54}
        slidesPerView={3}
        loop={true} // Use a boolean, not a string
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true,
        }}
      >
        <SwiperSlide>
            <img src={project1} />
            <div className='text-container'>
              <div className='title'>
                title
              </div>
              <div className='description'>
                Description
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={project2} />
            <div className='text-container'>
              <div className='title'>
                title
              </div>
              <div className='description'>
                Description
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={project3} />
            <div className='text-container'>
              <div className='title'>
                title
              </div>
              <div className='description'>
                Description
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={project4 }/>
            <div className='text-container'>
              <div className='title'>
                title
              </div>
              <div className='description'>
                Description
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={project5} />
            <div className='text-container'>
              <div className='title'>
                title
              </div>
              <div className='description'>
                Description
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={project6} />
            <div className='text-container'>
              <div className='title'>
                title
              </div>
              <div className='description'>
                Description
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
      </>
    );
};
export default ProjectSection;
