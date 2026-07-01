import React from 'react';
import { ShoppingCart, LayoutDashboard, CreditCard, Box, TrendingUp, Paintbrush } from 'lucide-react';

const storefrontFeatures = [
  {
    icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
    title: "Cinematic Shopping",
    description: "Engage customers with high-resolution cinematic sliders and dynamic product showcases."
  },
  {
    icon: <CreditCard className="w-6 h-6 text-purple-600" />,
    title: "Secure 3-Step Checkout",
    description: "Frictionless checkout with Razorpay integration and automated tax calculations (CGST/IGST)."
  },
  {
    icon: <Box className="w-6 h-6 text-pink-600" />,
    title: "Smart Product Options",
    description: "Let customers customize accessories with dynamic pricing calculators and real-time stock checks."
  }
];

const adminFeatures = [
  {
    icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
    title: "Operations Dashboard",
    description: "Monitor total sales, order metrics, and get instant low-stock warnings at a glance."
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-amber-400" />,
    title: "Order Management",
    description: "Track shipments from 'Confirmed' to 'Arrived' and generate compliant tax invoices in one click."
  },
  {
    icon: <Paintbrush className="w-6 h-6 text-indigo-400" />,
    title: "Layout Customization",
    description: "Drag-and-drop homepage sections, manage promotional banners, and edit static pages without coding."
  }
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden">
    {/* Subtle gradient background on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:bg-white group-hover:shadow-md group-hover:scale-110 transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h3>
      <p className="text-lg text-slate-600 leading-relaxed flex-grow">{description}</p>
      
      {/* Decorative line that expands on hover */}
      <div className="h-1 w-8 bg-slate-200 rounded-full mt-8 group-hover:w-16 group-hover:bg-blue-500 transition-all duration-500"></div>
    </div>
  </div>
);

const FeatureSection = () => {
  return (
    <div className="pt-8 pb-24 bg-white overflow-x-clip relative z-20" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Storefront Section */}
        <div id="storefront" className="mb-32">
          <div className="relative text-center max-w-4xl mx-auto mb-20 pt-4">
            {/* Background Watermark */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[6rem] md:text-[10rem] font-black text-slate-200/60 uppercase tracking-tighter select-none z-0 whitespace-nowrap pointer-events-none">
              CUSTOMER
            </div>
            {/* Foreground Content */}
            <div className="relative z-10">
              <span className="inline-block py-1.5 px-4 rounded-lg bg-slate-900 text-white text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-xl">
                Storefront
              </span>
              <h3 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                A storefront that sells for you.
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Provide your customers with a premium browsing experience, featuring advanced filters, personal accounts, and secure checkout.
              </p>
            </div>
          </div>
          
          <div className="relative w-full overflow-hidden mt-16 py-4">
            <style>
              {`
                @keyframes scroll-left {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
              `}
            </style>
            
            {/* Gradient masks to fade out the left and right edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex gap-8 w-max animate-[scroll-left_30s_linear_infinite] hover:[animation-play-state:paused] px-4">
              {/* Duplicate the array multiple times for a seamless infinite scroll loop */}
              {[...storefrontFeatures, ...storefrontFeatures, ...storefrontFeatures, ...storefrontFeatures].map((feature, idx) => (
                <div key={idx} className="w-[300px] md:w-[400px] shrink-0">
                  <FeatureCard {...feature} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Admin Section */}
        <div id="admin" className="relative rounded-3xl bg-slate-900 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90"></div>
          {/* Subtle glow effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 px-4 py-12 sm:px-16 sm:py-16 lg:p-16">
            <div className="relative text-center max-w-4xl mx-auto mb-12 pt-4">
              {/* Background Watermark */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[6rem] md:text-[10rem] font-black text-slate-800/80 uppercase tracking-tighter select-none z-0 whitespace-nowrap pointer-events-none">
                MERCHANT
              </div>
              {/* Foreground Content */}
              <div className="relative z-10">
                <span className="inline-block py-1.5 px-4 rounded-lg bg-white text-slate-900 text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-xl">
                  Admin Console
                </span>
                <h3 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                  Total control at your fingertips.
                </h3>
                <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                  Manage inventory, fulfill orders, configure delivery zones, and run discount campaigns from a powerful admin console.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {adminFeatures.map((feature, idx) => (
                <div key={idx} className="bg-slate-800/40 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-slate-900/80 flex items-center justify-center mb-6 border border-slate-700/50">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeatureSection;
