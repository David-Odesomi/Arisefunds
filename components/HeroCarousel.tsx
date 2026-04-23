"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/Button"

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#011825] min-h-[600px] w-full text-white relative flex flex-col justify-center px-16 py-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[90%] w-[50%] z-0 flex items-center justify-end pointer-events-none pr-16">
        <div className="relative w-full h-full">
          <Image 
            src="/HeroPerson.png" 
            alt="Hero Background" 
            fill
            className="object-contain object-right"
            priority
          />
        </div>
      </div>

      {/* Decorative background elements (optional abstract shapes) */}
      <div className="absolute left-[20%] top-[20%] w-[300px] h-[300px] border border-[#149EED]/20 rounded-full blur-[2px] opacity-20 z-0"></div>
      
      {/* Carousel Indicators */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div 
            key={index}
            className={`h-1.5 rounded-full transition-all duration-500 ease-in-out ${
              currentSlide === index ? "w-10 bg-[#149EED]" : "w-4 bg-[#149EED]/30"
            }`}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full mt-8 relative z-10 overflow-hidden">
        <div 
          className="flex w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div key={index} className="w-full flex-shrink-0 grid grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="flex flex-col gap-6 max-w-xl pl-6">
                <h1 className="text-6xl font-bold leading-[1.1] tracking-wide">
                  Investing in the <br />
                  Infrastructure <br />
                  of <span className="text-[#149EED]">Work</span>
                </h1>
                
                <p className="text-gray-300 text-sm leading-loose mt-4">
                  Arise Funds is an impact investment firm. We deploy blended capital and operational<br />
                  infrastructure into workforce development and technology companies – building the<br />
                  institutional systems that generate returns and create employment at scale.
                </p>

                <Button></Button>
              </div>

              {/* Right Image Space */}
              <div className="w-full h-[500px]">
                {/* Space reserved to let the background image show through */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
