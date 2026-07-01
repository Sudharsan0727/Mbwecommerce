import React, { useState } from 'react';
import { User, Megaphone, Users, HardDrive, List, DollarSign, Check, Info, Sparkles, ChevronDown } from 'lucide-react';
import Star1 from '../assets/icons/Star1.svg';
import Star2 from '../assets/icons/Star2.svg';
import Star3 from '../assets/icons/Star3.svg';

const plans = [
  {
    name: "Standard",
    description: "To start strong in ecommerce",
    monthlyPrice: "₹999",
    yearlyPrice: "₹9,999",
    specs: [
      { icon: <User className="w-4 h-4" />, text: "2 users + 1 contributor" },
      { icon: <Megaphone className="w-4 h-4" />, text: "10 Campaign pages" },
      { icon: <Users className="w-4 h-4" />, text: "2000 Customer accounts" },
      { icon: <HardDrive className="w-4 h-4" />, text: "50 GB File Storage" },
      { icon: <List className="w-4 h-4" />, text: "500 product listings" },
      { icon: <DollarSign className="w-4 h-4" />, text: "0% transaction fee" }
    ],
    featuresSubtitle: "",
    features: [
      "Free hosting",
      "Unlimited bandwidth",
      "Custom domain",
      "Mega menu",
      "Blogs",
      "Returns",
      "Basic coupons",
      "Product reviews",
      "Pickup locations",
      "Customer portal",
      "Abandoned carts",
      "Product recommendations",
      "Product filters"
    ],
    popular: false
  },
  {
    name: "Professional",
    description: "As you grow big in ecommerce",
    monthlyPrice: "₹2,999",
    yearlyPrice: "₹29,999",
    specs: [
      { icon: <User className="w-4 h-4" />, text: "5 users + 3 contributors" },
      { icon: <Megaphone className="w-4 h-4" />, text: "200 Campaign pages" },
      { icon: <Users className="w-4 h-4" />, text: "Unlimited Customer accounts" },
      { icon: <HardDrive className="w-4 h-4" />, text: "100 GB File Storage" },
      { icon: <List className="w-4 h-4" />, text: "2500 Product Listings" },
      { icon: <DollarSign className="w-4 h-4" />, text: "0% transaction fee" }
    ],
    featuresSubtitle: "Includes all features in Standard +",
    features: [
      "Wishlist",
      "Live shipping rates",
      "Digital Downloads",
      "Automatic discounts",
      "WhatsApp Commerce",
      "Advanced coupons",
      "Assembly/Kit items",
      "Member-only access",
      "Customize business workflows",
      "Free expert onboarding assistance ⓘ",
      "Custom fields"
    ],
    popular: true
  },
  {
    name: "Premium",
    description: "For the B2B ecommerce businesses",
    monthlyPrice: "₹6,999",
    yearlyPrice: "₹69,999",
    specs: [
      { icon: <User className="w-4 h-4" />, text: "10 users + 5 contributors" },
      { icon: <Megaphone className="w-4 h-4" />, text: "500 Campaign pages" },
      { icon: <Users className="w-4 h-4" />, text: "Unlimited Customer accounts" },
      { icon: <HardDrive className="w-4 h-4" />, text: "Unmetered File Storage" },
      { icon: <List className="w-4 h-4" />, text: "10000 Product Listings" },
      { icon: <DollarSign className="w-4 h-4" />, text: "0% transaction fee" }
    ],
    featuresSubtitle: "Includes all features in Professional +",
    features: [
      "Price lists",
      "Quote Requests",
      "3 Inventory locations",
      "Create business-specific custom modules",
      "Manage custom functions",
      "Serial number and batch tracking",
      "Credit Limit for B2B customers",
      "Product recommendations rules",
      "Free expert onboarding assistance ⓘ"
    ],
    popular: false
  }
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="pricing">
      {/* Decorative Orbs for Glass Effect */}
      <div className="absolute -top-[20%] left-1/4 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] mix-blend-multiply pointer-events-none animate-blob"></div>
      <div className="absolute -bottom-[20%] right-1/4 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-[100px] mix-blend-multiply pointer-events-none animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Heading */}
        <div className="relative text-center max-w-4xl mx-auto mb-16 pt-10">
          {/* Background Watermark */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[6rem] md:text-[10rem] font-black text-slate-200/60 uppercase tracking-tighter select-none z-0 whitespace-nowrap pointer-events-none">
            PRICING
          </div>
          {/* Foreground Content */}
          <div className="relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-lg bg-slate-900 text-white text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-xl">
              Simple Plans
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Transparent pricing.
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Choose the plan that best fits your business needs. No hidden fees, ever.
            </p>
          </div>
        </div>

        {/* Toggle & Controls */}
        <div className="flex flex-col items-center justify-center mb-12 relative max-w-6xl mx-auto">
          <div className="flex bg-white/50 backdrop-blur-md border border-white/60 rounded-full overflow-hidden p-0.5 shadow-sm">
            <button 
              onClick={() => setIsYearly(false)}
              className={`text-xs font-bold tracking-wider px-6 py-2 rounded-full transition-colors ${!isYearly ? 'bg-[#2563b0] text-white' : 'text-slate-700 hover:bg-white/50'}`}
            >
              MONTHLY
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`text-xs font-bold tracking-wider px-6 py-2 rounded-full transition-colors ${isYearly ? 'bg-[#2563b0] text-white' : 'text-slate-700 hover:bg-white/50'}`}
            >
              YEARLY
            </button>
          </div>

        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular 
                  ? 'bg-white/80 backdrop-blur-xl border-[1.5px] border-[#2563b0] shadow-xl lg:scale-[1.02] z-10' 
                  : 'bg-white/40 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-6 bg-[#2563b0] text-white text-[11px] font-medium px-3 py-1.5 rounded flex items-center gap-1.5 shadow-sm tracking-wide">
                  <Sparkles className="w-3 h-3 fill-current" /> Most popular
                </div>
              )}
              
              {/* Header */}
              <div className="flex justify-between items-start mb-2 mt-2">
                <h4 className="text-2xl font-bold text-slate-900 tracking-tight">{plan.name}</h4>
                <img src={[Star1, Star2, Star3][idx]} alt="Star icon" className="w-8 h-8 object-contain" />
              </div>
              <p className="text-sm font-medium text-slate-500 mb-8 pb-8 border-b border-slate-100">{plan.description}</p>
              
              {/* Price */}
              <div className="mb-2 flex items-center">
                <span className="text-5xl font-medium tracking-tight text-slate-900">{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
              </div>
              <p className="text-sm font-semibold text-slate-400 mb-6">{isYearly ? "/year billed annually" : "/month billed monthly"}</p>
              
              {/* Button */}
              <button className="w-full py-3.5 rounded-full font-bold text-sm bg-[#2563b0] text-white hover:bg-[#1e5296] transition-colors mb-8 shadow-lg shadow-blue-900/20">
                Get Started
              </button>
              
              {/* Specs */}
              <ul className="space-y-3.5 mb-8">
                {plan.specs.map((spec, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3.5 text-slate-800">
                    <span className="text-slate-600">{spec.icon}</span>
                    <span className="text-sm font-semibold tracking-tight">{spec.text}</span>
                  </li>
                ))}
              </ul>
              
              <div className="w-full h-px bg-slate-100 mb-8"></div>
              
              {/* Features */}
              <div className="flex-grow">
                {plan.featuresSubtitle && (
                  <p className="text-xs font-bold uppercase text-slate-900 mb-4 tracking-widest">{plan.featuresSubtitle}</p>
                )}
                <ul className="space-y-3">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check className="w-3.5 h-3.5 text-slate-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-sm font-medium text-slate-700 flex items-center gap-1 leading-relaxed">
                        {feature.replace(' ⓘ', '')}
                        {feature.includes('ⓘ') && <Info className="w-3.5 h-3.5 text-slate-400 ml-1" />}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
