import React from 'react';
import LoginImg from '../assets/Intergation/Login.PNG';
import DashboardImg from '../assets/Intergation/Dashboard.PNG';
import SettingImg from '../assets/Intergation/Setting_general.PNG';
import PrivilegesImg from '../assets/Intergation/User_privileges.PNG';
import StaffImg from '../assets/Intergation/Add_staff.PNG';

const features = [
  {
    title: "Secure Authentication",
    description: "Enterprise-grade login system to keep your storefront data protected.",
    image: LoginImg,
    gradient: "from-slate-800 to-slate-950" 
  },
  {
    title: "Command Center Dashboard",
    description: "Get a bird's eye view of your sales, inventory, and analytics in real-time.",
    image: DashboardImg,
    gradient: "from-orange-800 to-orange-950" 
  },
  {
    title: "Global Configuration",
    description: "Fine-tune your store's settings from taxes and shipping to regional preferences.",
    image: SettingImg,
    gradient: "from-rose-800 to-rose-950" 
  },
  {
    title: "Access Control",
    description: "Create custom roles and assign precise permissions to your team members.",
    image: PrivilegesImg,
    gradient: "from-violet-800 to-violet-950" 
  },
  {
    title: "Team Management",
    description: "Effortlessly invite staff, manage contributors, and scale your operations.",
    image: StaffImg,
    gradient: "from-blue-800 to-blue-950" 
  }
];

const FeatureStack = () => {
  return (
    <section id="platform" className="pt-25 pb-32 bg-gradient-to-b from-[#ddeafe] to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="relative text-center max-w-4xl mx-auto mb-24">
          {/* Background Watermark */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[6rem] md:text-[10rem] font-black text-slate-200/60 uppercase tracking-tighter select-none z-0 whitespace-nowrap pointer-events-none">
            FEATURES
          </div>
          {/* Foreground Content */}
          <div className="relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-lg bg-slate-900 text-white text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-xl">
              Platform Capabilities
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Built for performance,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">designed for growth.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Discover the powerful features that run your accessories empire.
            </p>
          </div>
        </div>

        {/* Stack Container */}
        <div className="flex flex-col gap-[15vh] relative z-10 pb-12">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className={`sticky w-full rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 bg-gradient-to-br ${feature.gradient} border border-white/10`}
              style={{
                top: `calc(15vh + ${idx * 30}px)`,
                height: '75vh',
                minHeight: '600px'
              }}
            >
              {/* Giant Background Number */}
              <div className="absolute -top-6 left-6 md:left-12 text-[10rem] md:text-[16rem] font-black text-white/[0.03] pointer-events-none select-none leading-none z-0 tracking-tighter">
                {String(idx + 1).padStart(2, '0')}
              </div>

              {/* Image Side - Bleeding off the right */}
              <div className="absolute top-12 bottom-12 right-[-5%] left-[10%] md:left-[45%] rounded-l-[2.5rem] shadow-[-20px_0_50px_rgba(0,0,0,0.3)] transition-transform duration-700 hover:-translate-x-2 p-[12px] pr-0 bg-gradient-to-b from-white/60 via-white/20 to-transparent z-10">
                <div className="w-full h-full rounded-l-3xl overflow-hidden bg-slate-900 shadow-inner">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover object-left-top opacity-90"
                  />
                </div>
              </div>

              {/* Bottom blur effect */}
              <div className="absolute bottom-0 left-0 w-full h-[60%] backdrop-blur-md [-webkit-mask-image:linear-gradient(to_top,black_20%,transparent)] [mask-image:linear-gradient(to_top,black_20%,transparent)] pointer-events-none z-10"></div>

              {/* Content Side - Positioned at Bottom Left */}
              <div className="absolute bottom-0 left-0 w-full md:w-[60%] p-10 md:p-16 flex flex-col justify-end z-20">
                <h3 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-normal max-w-lg">
                  {feature.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeatureStack;
