import React, { useEffect, useRef } from 'react';

const faqs = [
  {
    q: "What is the best commerce platform for scaling businesses?",
    a: "MBW Commerce combines high-performance headless architecture with intuitive management tools. It offers the flexibility of custom development without the massive overhead, allowing you to scale seamlessly."
  },
  {
    q: "How difficult is the migration process?",
    a: "We make migration effortless. Our dedicated onboarding team handles the heavy lifting of data transfer, catalog mapping, and integration setup so you can focus on running your business."
  },
  {
    q: "Does MBW support multi-channel selling?",
    a: "Yes, natively. You can manage your web storefront, mobile app, B2B portal, and point-of-sale inventory all from a single, unified backend."
  },
  {
    q: "Is it secure and compliant?",
    a: "Security is built into our core. MBW is SOC 2 Type II certified, fully PCI-DSS compliant, and adheres to strict data privacy regulations like GDPR and CCPA."
  }
];

const FaqSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer to trigger slide-up animation when scrolling into view
    // It will reset when scrolling out of view so the animation replays
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-24');
          entry.target.classList.add('opacity-100', 'translate-y-0');
        } else {
          entry.target.classList.add('opacity-0', 'translate-y-24');
          entry.target.classList.remove('opacity-100', 'translate-y-0');
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: "0px 0px -5% 0px" 
    });

    const items = containerRef.current.querySelectorAll('.faq-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-24 md:py-32 w-full relative" id="faq">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8" ref={containerRef}>
        
        {/* Left Column (Sticky Headers) */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-40 h-fit">
            <h2 className="text-5xl md:text-6xl font-serif tracking-tight text-slate-900 mb-2">
              Got questions?
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif tracking-tight text-slate-400 mb-10">
              We have the answers.
            </h3>
            
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3.5 px-6 rounded-xl shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2 group">
              Got more questions? Ask MBW 
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column (Chat Bubbles) */}
        <div className="lg:col-span-7 flex flex-col gap-16 lg:gap-20">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="faq-item flex flex-col gap-6 opacity-0 translate-y-24 transition-all duration-1000 ease-out"
              style={{ transitionDelay: '100ms' }}
            >
              {/* Question Bubble (Right aligned, dark) */}
              <div className="self-end bg-slate-900 text-white p-5 md:p-6 rounded-[1.5rem] rounded-tr-sm max-w-[90%] md:max-w-[80%] shadow-md border border-slate-800">
                <p className="text-base md:text-lg font-medium leading-snug">
                  {faq.q}
                </p>
              </div>
              
              {/* Answer Bubble (Left aligned, light) */}
              <div className="self-start bg-slate-50 text-slate-700 p-6 md:p-8 rounded-[1.5rem] rounded-tl-sm max-w-[95%] md:max-w-[85%] shadow-sm border border-slate-200 relative">
                {/* Little decorative dot indicating the "agent" typing/status */}
                <div className="absolute -left-3 top-6 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <p className="text-base md:text-lg leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
