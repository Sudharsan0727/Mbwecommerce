import React from 'react';
import { ExternalLink, Car, Building, Flower } from 'lucide-react';
import project1 from '../assets/Project1.PNG';
import project2 from '../assets/Project2.PNG';
import project3 from '../assets/Project3.PNG';

const products = [
  {
    title: "Car Accessories Pro",
    description: "A high-performance e-commerce template optimized for automotive parts and accessories.",
    url: "https://caraccessories.mbwhost.in/",
    icon: <Car className="w-6 h-6 text-blue-500" />,
    color: "bg-blue-100 border-blue-200",
    image: project1
  },
  {
    title: "MBW Flower Shop",
    description: "A vibrant, visually-driven storefront perfect for florists and boutique gift shops.",
    url: "https://flowershopmbw.com/",
    icon: <Flower className="w-6 h-6 text-pink-500" />,
    color: "bg-pink-100 border-pink-200",
    image: project2
  },
  {
    title: "Hotel Booking Engine",
    description: "An elegant reservation system and showcase for luxury hotels and boutique stays.",
    url: "https://hotel.mbwhost.in/",
    icon: <Building className="w-6 h-6 text-amber-500" />,
    color: "bg-amber-100 border-amber-200",
    image: project3
  }
];

const Showcase = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200" id="showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center max-w-4xl mx-auto mb-20 pt-10">
          {/* Background Watermark */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[6rem] md:text-[10rem] font-black text-slate-200/60 uppercase tracking-tighter select-none z-0 whitespace-nowrap pointer-events-none">
            SHOWCASES
          </div>
          
          {/* Foreground Content */}
          <div className="relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-lg bg-slate-900 text-white text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-xl">
              Live Demos
            </span>
            <h3 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Explore our platform.
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              See our platform in action across different industries. Click any of the demos below to experience the premium storefronts.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <a 
              key={idx} 
              href={product.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Natural Image Container with Browser Mockup */}
              <div className={`w-full ${product.color.split(' ')[0]} bg-opacity-30 border-b border-slate-100 p-6 sm:p-8 flex items-center justify-center`}>
                 <div className="w-full rounded-xl overflow-hidden bg-white shadow-xl border border-slate-200/60 transform group-hover:-translate-y-1 group-hover:shadow-2xl transition-all duration-500">
                    {/* Browser Bar */}
                    <div className="w-full h-8 bg-slate-100/80 border-b border-slate-200/60 flex items-center px-3 gap-1.5 backdrop-blur-sm">
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-red-400 transition-colors"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-amber-400 transition-colors"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-green-400 transition-colors"></div>
                    </div>
                    {/* Uncropped Image */}
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-auto object-contain" 
                    />
                 </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${product.color} bg-white shadow-sm`}>
                    {product.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{product.title}</h4>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  {product.description}
                </p>
                
                <div className="flex items-center text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  View Live Site 
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;