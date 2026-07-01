import React, { useEffect, useRef, useState } from 'react';

const cards = [
  {
    title: "Grounded in truth.",
    content: "Every answer comes from your own data, not from hallucinated guesses. Hugo connects to the systems that define your business, keeping responses accurate and trustworthy.",
    x: -360,
    y: -120,
    rotation: -12,
  },
  {
    title: "Engineered for longevity.",
    content: "Hugo isn't built for trends. It's built to be fast, modular, and designed to evolve with how businesses support their customers in the next decade.",
    x: -380,
    y: 100,
    rotation: -8,
  },
  {
    title: "Built for the real world.",
    content: "AI doesn't live in slides or sandboxes. Hugo was designed to handle real conversations, real data, and real customers, without breaking when things get complex.",
    x: 0,
    y: -140,
    rotation: -3,
  },
  {
    title: "Transparent by design.",
    content: "You deserve to understand how your AI works. Hugo's logic is visible, editable, and accountable, so you can always stay in control.",
    x: 360,
    y: -80,
    rotation: 8,
  },
  {
    title: "Autonomy with responsibility.",
    content: "Automation should serve people, not erase them. Hugo handles the routine, learns from outcomes, and involves humans if required.",
    x: 340,
    y: 120,
    rotation: -5,
  }
];

const WhySection = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start opening when the section enters the bottom of the viewport
      // Finish opening when it reaches the top of the viewport
      let progress = 1 - (rect.top / windowHeight);
      
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Let the expansion take up the full scroll distance for a smooth, slow opening effect
  let rawExpansion = scrollProgress;

  // Smooth ease-out cubic curve so it gently settles at the end
  const easeOutCubic = 1 - Math.pow(1 - rawExpansion, 3);
  
  // Calculate maximum safe scale factor so cards never clip off the screen
  const isMobile = windowWidth < 768;
  const isLg = windowWidth >= 1024;
  const cardWidth = isLg ? 420 : (isMobile ? 300 : 380);
  
  // Max base X coordinate in our array is 380
  // Safe spread distance = (Half screen width) - (Half card width) - (Padding)
  const safeScale = (windowWidth / 2 - (cardWidth / 2) - 20) / 380;
  const scaleFactor = isMobile ? 0.45 : Math.max(0.6, Math.min(1.3, safeScale));

  return (
    <section ref={containerRef} className="relative w-full py-24 md:py-32 bg-white text-slate-900 overflow-hidden min-h-screen flex items-center justify-center">
        
        {/* Diagonal Moving Stripes / Conveyor Belt Animation */}
        <style>
          {`
            @keyframes slide-stripes {
              0% { background-position: 0 0; }
              100% { background-position: 100px 100px; }
            }
            @keyframes float-card {
              0% { transform: translateY(0px); }
              100% { transform: translateY(-15px); }
            }
          `}
        </style>
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Base background color */}
          <div className="absolute inset-0 bg-slate-50"></div>
          
          {/* Moving diagonal stripes */}
          <div 
            className="absolute inset-[-50%] w-[200%] h-[200%] opacity-20"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #64748b 0px, #64748b 2px, transparent 2px, transparent 30px)',
              animation: 'slide-stripes 3s linear infinite'
            }}
          ></div>

          {/* Radial gradient mask to fade out the stripes in the center and edges, keeping it subtle */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,white_30%,transparent_100%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        </div>

        {/* Ambient light glow at the bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-50/20 rounded-t-full blur-[80px] pointer-events-none"></div>

        {/* Massive "Why?" Text */}
        <h2 
          className="text-[11rem] md:text-[20rem] font-serif tracking-tighter text-transparent bg-clip-text pointer-events-none select-none z-0 leading-[0.8] pb-2 md:pb-4 transition-all duration-100 ease-out"
          style={{ 
            backgroundImage: 'linear-gradient(to bottom, #0f172a 0%, #1e3a8a 100%)',
            opacity: 0.9 - easeOutCubic * 0.4, 
            transform: `scale(${0.9 + easeOutCubic * 0.05})`,
            filter: `blur(${easeOutCubic * 8}px)`
          }}
        >
          Why?
        </h2>

        {/* Floating Cards Container */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          {cards.map((card, index) => {
            const currentX = card.x * easeOutCubic * scaleFactor;
            const currentY = card.y * easeOutCubic; 
            const currentRot = card.rotation * easeOutCubic;
            const scale = isMobile ? 0.85 : 1;
            
            return (
              <div 
                key={index}
                className="absolute z-10 hover:z-30 pointer-events-none transition-transform duration-75"
                style={{
                  transform: `translate(${currentX}px, ${currentY}px) rotate(${currentRot}deg) scale(${scale})`,
                  opacity: Math.min(1, easeOutCubic * 3), 
                }}
              >
                <div 
                  className="relative w-[300px] md:w-[380px] lg:w-[420px] rounded-[1.25rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] pointer-events-auto transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden group"
                  style={{
                    animation: easeOutCubic > 0.95 ? `float-card ${3 + index}s ease-in-out infinite alternate` : 'none'
                  }}
                >
                  {/* Base soft border */}
                  <div 
                    className="absolute inset-0 border border-slate-200 rounded-[1.25rem] z-20 pointer-events-none transition-opacity duration-300"
                    style={{ opacity: easeOutCubic }}
                  ></div>

                  {/* Animated glowing border line */}
                  <div 
                    className="absolute inset-[-150%] z-0 transition-opacity duration-[1500ms]"
                    style={{ 
                      opacity: easeOutCubic > 0.95 ? 1 : 0,
                      backgroundImage: 'conic-gradient(from 0deg, transparent 60%, #3b82f6 100%)',
                      animation: `spin ${3 + index * 1.5}s linear infinite ${index % 2 === 0 ? 'normal' : 'reverse'}`
                    }}
                  ></div>

                  {/* Inner white background to mask the gradient into a border */}
                  <div className="absolute inset-[1.5px] bg-white rounded-[calc(1.25rem-1.5px)] z-10 transition-colors duration-300"></div>

                  {/* Card Content */}
                  <div className="relative z-20 p-6 md:p-8 h-full">
                    <h3 className="text-slate-900 font-bold text-lg md:text-xl mb-3">{card.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{card.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </section>
  );
};

export default WhySection;
