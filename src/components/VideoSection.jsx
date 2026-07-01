import React from 'react';
import { 
  ContainerAnimated,
  ContainerInset,
  ContainerScroll,
  ContainerStagger 
} from "./ui/hero-video";

import videosectionGif from '../assets/videosection.gif';

const VideoSection = () => {
  return (
    <section id="demo" className="relative overflow-x-clip">
      <ContainerScroll className="bg-slate-50 text-center text-slate-900 pb-16">
        <ContainerStagger viewport={{ once: false }} className="relative max-w-4xl mx-auto px-4 pt-12 md:pt-20">
          
          {/* Background Watermark */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[5rem] md:text-[8rem] lg:text-[10rem] font-black text-slate-200/60 uppercase tracking-tighter select-none z-0 whitespace-nowrap pointer-events-none">
            PREVIEW
          </div>

          <div className="relative z-10">
            <ContainerAnimated animation="top">
              <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter mb-2">
                The ultimate platform
              </h2>
            </ContainerAnimated>
            <ContainerAnimated animation="bottom">
              <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter text-blue-600">
                for car accessories.
              </h2>
            </ContainerAnimated>
          </div>

          <ContainerAnimated animation="blur" className="my-8">
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed tracking-tight max-w-4xl mx-auto">
              MBW Commerce isn't just a storefront. It's a complete, end-to-end commerce engine designed specifically for the automotive parts industry. Watch how it transforms your business.
            </p>
          </ContainerAnimated>
        </ContainerStagger>

        <ContainerInset 
          translateYRange={["0%", "0%"]}
          className="mx-4 md:mx-12 lg:mx-20 mt-16 lg:mt-24 shadow-2xl rounded-3xl border border-slate-200 bg-white overflow-hidden"
        >
          <img
            src={videosectionGif}
            alt="Platform Preview"
            className="relative z-10 block h-auto max-h-[80vh] w-full object-cover align-middle opacity-100"
          />
        </ContainerInset>
      </ContainerScroll>
    </section>
  )
}

export default VideoSection;
