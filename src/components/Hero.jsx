import React, { useState } from 'react';
import { ArrowRight, ShoppingBag, Settings, ShieldCheck } from 'lucide-react';
import heroGif from '../assets/download.gif';
import commerce1 from '../assets/icons/commerce1.svg';
import commerce2 from '../assets/icons/commerce2.svg';
import commerce3 from '../assets/icons/commerce3.svg';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Normalize mouse position from -1 to 1 based on window width/height
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section 
      className="relative pt-20 pb-12 lg:pt-28 lg:pb-20 overflow-hidden bg-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Interactive X-Ray Reveal Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-slate-50">
        
        {/* --- HIDDEN VIBRANT LAYER (Revealed by Mouse) --- */}
        <div className="absolute inset-0">
           {/* Vibrant bright gradient background */}
           <div className="absolute inset-0 bg-white"></div>
           {/* Bright tech grid */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f650_1px,transparent_1px),linear-gradient(to_bottom,#3b82f650_1px,transparent_1px)] bg-[size:40px_40px]"></div>
           {/* Animated bright colorful orbs */}
           <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-blue-400/40 rounded-full blur-[100px] animate-[pulse_10s_ease-in-out_infinite]"></div>
           <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-purple-400/30 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite]"></div>
           <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] bg-cyan-300/40 rounded-full blur-[80px] animate-[pulse_10s_ease-in-out_infinite]"></div>
           
           {/* Inner rotating tech ring */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-[2px] border-dashed border-blue-500/50 rounded-full animate-[spin_20s_linear_infinite]"></div>
        </div>

        {/* --- MASKING OVERLAY (The clean surface) --- */}
        <div 
          className="absolute inset-0 bg-slate-50 transition-opacity duration-300"
          style={{ 
             maskImage: `radial-gradient(circle 500px at ${(mousePos.x + 1) * 50}vw ${(mousePos.y + 1) * 50}vh, transparent 0%, black 100%)`,
             WebkitMaskImage: `radial-gradient(circle 500px at ${(mousePos.x + 1) * 50}vw ${(mousePos.y + 1) * 50}vh, transparent 0%, black 100%)`
          }}
        >
           {/* Subtle dot grid on the top surface */}
           <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
        </div>

      </div>
      
      {/* Smooth transition to the next light section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-slate-50 z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Floating Icons from User Request with Parallax Mouse Move Effect */}
        {/* Top Left Area - Moved further left and slightly up */}
        {/* Top Left Area - Moved further left and slightly up */}
        <div className="absolute hidden md:block -top-4 md:-left-8 lg:-left-20 xl:-left-16 animate-hover-float z-10">
           <img 
             src={commerce1} 
             alt="Commerce Feature" 
             className="w-20 h-20 lg:w-24 lg:h-24 drop-shadow-xl transition-transform duration-200 ease-out" 
             style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
           />
        </div>
        
        {/* Middle Left Area (Near buttons) - Moved from top center to left side based on user request */}
        <div className="absolute hidden md:block top-[28%] lg:top-[32%] md:left-8 lg:left-20 xl:left-[15%] animate-hover-float hover-delay-1 z-10">
           <img 
             src={commerce2} 
             alt="Commerce Tool" 
             className="w-20 h-20 lg:w-24 lg:h-24 drop-shadow-xl transition-transform duration-200 ease-out" 
             style={{ transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)` }}
           />
        </div>
        
        {/* Right Area - Moved further right */}
        <div className="absolute hidden md:block top-[10%] md:-right-8 lg:-right-20 xl:-right-16 animate-hover-float hover-delay-2 z-10">
           <img 
             src={commerce3} 
             alt="Commerce Integration" 
             className="w-24 h-24 lg:w-28 lg:h-28 drop-shadow-xl transition-transform duration-200 ease-out" 
             style={{ transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)` }}
           />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200 backdrop-blur-sm text-sm font-semibold text-slate-700 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
          Premium E-commerce Solution
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8 relative z-20">
          Do Business your way with the ultimate <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Accessories Store.</span>
        </h1>
        
        <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed relative z-20">
          The all-in-one portal designed exclusively for premium car accessories. 
          Manage your inventory, process secure checkouts, and run promotional campaigns with ease.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 relative z-30">
          <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-[0_0_20px_rgba(15,23,42,0.2)] hover:-translate-y-1 flex items-center justify-center gap-2">
            Launch Your Store
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/80 text-slate-900 border border-slate-200 backdrop-blur-sm rounded-full font-bold text-lg hover:bg-slate-50 transition-all hover:-translate-y-1">
            View Live Demo
          </button>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative mx-auto max-w-5xl">
          <div className="rounded-2xl bg-white p-2 sm:p-4 shadow-2xl border border-slate-100 ring-1 ring-slate-900/5">
            <div className="rounded-xl overflow-hidden bg-slate-50 border border-slate-100 relative aspect-video flex items-center justify-center">
               <img src={heroGif} alt="Portal Dashboard Demo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
