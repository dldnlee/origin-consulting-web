'use client'
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image, { StaticImageData } from 'next/image';
import rightArrow from '@/app/assets/icons/right-arrow.png'
import lightbulbImage from '@/app/assets/images/startup-lightbulb.png';

const slideContent = [
  {
    heading: "Startup Advisory",
    image: lightbulbImage,
    alt: 'Light Bulb',
    subheading: "We provide comprehensive support to startups, guiding them from concept to market with services including...",
  }, 
  {
    heading: "Startup Advisory",
    image: lightbulbImage,
    alt: 'Light Bulb',
    subheading: "We provide comprehensive support to startups, guiding them from concept to market with services including...",
  },
  {
    heading: "Startup Advisory",
    image: lightbulbImage,
    alt: 'Light Bulb',
    subheading: "We provide comprehensive support to startups, guiding them from concept to market with services including...",
  },
  {
    heading: "Startup Advisory",
    image: lightbulbImage,
    alt: 'Light Bulb',
    subheading: "We provide comprehensive support to startups, guiding them from concept to market with services including...",
  }
]

interface SlideProps {
  heading: string;
  img: StaticImageData;
  alt: string;
  subheading: string;
}

function Slide({heading, img, alt, subheading} : SlideProps) {
  return (
    <div className='bg-white m-2 mx-auto w-[384px] h-[409px] p-4 flex flex-col justify-between text-start rounded-lg'>
      <h2 className='font-extrabold text-[21px]'>{heading}</h2>
      <Image src={img} alt={alt} className='w-[350px] h-[165px] object-contain'/>
      <p className=' font-sm text-[17px]'>{subheading}</p>
      <a href="/about" className='group text-[17px] font-bold '>Learn More <Image src={rightArrow} width={16} alt="Right Arrow" className='inline-block ml-4 group-hover:translate-x-1 transition-transform'/></a>
    </div>
  )
}

function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1.5}
      spaceBetween={0}
      centeredSlides={true}
      navigation={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
        clickable: true
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='w-[600px] h-[450px] bg-gray-4'
    >
        {slideContent.map((item, index) => (
          <SwiperSlide key={index}>
            <Slide heading={item.heading} img={item.image} alt={item.alt} subheading={item.subheading}/>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default function ServiceSlider() {
  return (
    <div className="w-full p-default-padding text-center flex flex-col justify-center items-center bg-white gap-5">
      <h1 className="font-extrabold text-2xl">Services we offer for you</h1>
      <p className="max-w-[589px]">By partnering with us, you gain access to expert advice tailored to the unique challenges and opportunities faced by startups.</p>
      <Slider /> 
    </div>
  )
}