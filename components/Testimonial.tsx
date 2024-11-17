"use client";

import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa';
import Image from "next/image";
import { TESTIMONIAL } from "@/constants";
import Accordion from './Accordion';
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Testimonial = () => {
     var settings = {
       arrows: false,
       infinite: true,
       autoplay: true,
       slidesToScroll: 1,
       reponsive: [
         {
           breakpoint: 700,
           settings: {
             slidesToShow: 1,
           },
         },
         
       
       ],
    };
    
    return (
      <section
        className="max_padd_container py-16 bg-white relative"
        id="testimonials"
      >
        <div className="flex flex-col lg:flex-row gap-y-8">
          {/* LEFT */}
          <div>
            <h4 className="bold-18 text-secondary">HAPPY CUSTOMER</h4>
            <h3 className="h3 max-w-lg">Testimonials</h3>
            <div className="max-w-[666px]">
              <Slider {...settings}>
                {TESTIMONIAL.map((tesimonial) => (
                  <TestimonialItem
                    key={tesimonial.title}
                    URL={tesimonial.URL}
                    title={tesimonial.title}
                    profession={tesimonial.profession}
                    desc={tesimonial.desc}
                  />
                ))}
              </Slider>
            </div>
                </div>
                
                {/* RIGHT */}

                <div className='lg:pl-10'>
                    <Accordion />
                </div>
        </div>
      </section>
    );
};

type TestimonialItem = {
  URL: string;
    title: string;
  profession :string,
  desc: string;
};

const TestimonialItem = ({ title, URL, profession, desc}: TestimonialItem) => {
    
    return (
        <div className='my-8 rounded-md z-10'>
            <div className='pb-6'>
                <Image src={URL} alt={title} height={77} width={77} className = "rounded-full mb-4" />
                <div>
                    <div className='medium-20 text-secondary'>{ title }</div>
                    <div className='text-gray-20 regular-14'>{ profession}</div>
                </div>
            </div>
            <span className='text-3xl -z-10'> <FaQuoteLeft/> </span>
            <p>{desc}</p>
</div>


    )


}

export default Testimonial
