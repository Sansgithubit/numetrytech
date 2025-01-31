import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function TestimonialSlider() {
  const testimonials = ["Great service!", "Loved it!", "Highly recommended!"];

  return (
    <Swiper pagination={true} modules={[Pagination]} className="w-3/4">
      {testimonials.map((testimonial, i) => (
        <SwiperSlide key={i} className="p-4 bg-white shadow-lg rounded-lg">
          {testimonial}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
