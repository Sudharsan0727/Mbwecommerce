import React from 'react';
import Mysql from '../assets/icons/Mysql.svg';
import NextJs from '../assets/icons/next.js.svg';
import NodeJs from '../assets/icons/node.js.svg';
import PostgreSql from '../assets/icons/postgre sql.svg';
import ReactIcon from '../assets/icons/Reeact.svg';
import ServerIcon from '../assets/icons/server.svg';
import Shopify from '../assets/icons/shopify.svg';
import TailwindCss from '../assets/icons/tailwind css.svg';
import Wordpress from '../assets/icons/Wordpress.svg';
import Angular from '../assets/icons/Angular.svg';
import MbwLogo from '../assets/mbw.png';

const nodes = [
  // Left side
  { name: 'React', icon: ReactIcon, x: 150, y: 200 },
  { name: 'Next.js', icon: NextJs, x: 300, y: 350 },
  { name: 'Node.js', icon: NodeJs, x: 100, y: 500 },
  { name: 'Angular', icon: Angular, x: 300, y: 650 },
  { name: 'PostgreSQL', icon: PostgreSql, x: 150, y: 800 },
  
  // Right side
  { name: 'MySQL', icon: Mysql, x: 850, y: 200 },
  { name: 'Tailwind CSS', icon: TailwindCss, x: 700, y: 350 },
  { name: 'Server', icon: ServerIcon, x: 900, y: 500 },
  { name: 'Shopify', icon: Shopify, x: 700, y: 650 },
  { name: 'WordPress', icon: Wordpress, x: 850, y: 800 },
];

const TechStackSection = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden relative min-h-[800px] flex flex-col justify-center border-t border-slate-100" id="tech-stack">
      
      {/* Subtle center background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] pointer-events-none z-0"></div>
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#slate-200_1px,transparent_1px),linear-gradient(to_bottom,#slate-200_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0"></div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 w-full relative z-20">
        
        {/* Title */}
        <div className="relative text-center max-w-4xl mx-auto mb-12 z-30">
          {/* Background Watermark */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[6rem] md:text-[10rem] font-black text-slate-200/60 uppercase tracking-tighter select-none z-0 whitespace-nowrap pointer-events-none">
            ECOSYSTEM
          </div>
          {/* Foreground Content */}
          <div className="relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-lg bg-slate-900 text-white text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-xl">
              Integrations
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Works with your stack
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Integrate seamlessly with the tools and platforms you already use.
            </p>
          </div>
        </div>

        {/* Network Diagram */}
        <div className="relative w-full h-[600px] md:h-[700px] mx-auto mt-4">
          
          {/* SVG Connecting Lines (Circuit Traces) */}
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            {nodes.map((node, i) => {
              // Create a perfectly smooth S-curve from center to node
              // Exits horizontally from center (500,500) and enters horizontally into the node
              const midX = (500 + node.x) / 2;
              const d = `M 500 500 C ${midX} 500, ${midX} ${node.y}, ${node.x} ${node.y}`;
              
              return (
                <g key={`line-group-${i}`}>
                  {/* Faint static smooth curve background */}
                  <path 
                    d={d}
                    fill="none"
                    stroke="#e2e8f0" // slate-200
                    strokeWidth="1.5"
                  />
                  {/* Smooth glowing data flow */}
                  <path 
                    d={d}
                    fill="none"
                    stroke="#3b82f6" // blue-500
                    strokeWidth="3"
                    strokeDasharray="60 1000"
                    strokeLinecap="round"
                    style={{ 
                      animation: `smooth-beam ${5 + (i % 3)}s ease-in-out infinite`, 
                      animationDelay: `${i * 0.4}s`,
                      opacity: 0
                    }}
                  />
                </g>
              )
            })}
          </svg>

          {/* Center Hub (MBW Logo) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-white border border-slate-200 rounded-[2rem] shadow-[0_20px_80px_rgba(0,0,0,0.06)] flex items-center justify-center p-6 md:p-10 relative overflow-hidden group cursor-pointer hover:border-blue-300 hover:shadow-[0_20px_80px_rgba(59,130,246,0.15)] transition-all">
              {/* Inner glow effect on hover */}
              <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img src={MbwLogo} alt="MBW Commerce" className="w-full h-full object-contain relative z-10" />
            </div>
          </div>

          {/* Floating Technology Nodes */}
          {nodes.map((node, i) => (
            <div 
              key={`node-${i}`} 
              className="absolute z-10"
              style={{
                left: `${node.x / 10}%`,
                top: `${node.y / 10}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div 
                className="w-14 h-14 md:w-20 md:h-20 bg-white border border-slate-200 shadow-xl rounded-2xl flex items-center justify-center p-3 md:p-4 hover:scale-110 transition-transform cursor-pointer group hover:border-blue-400 hover:bg-slate-50 hover:shadow-2xl"
                style={{ animation: `float ${3 + (i % 3)}s ease-in-out infinite alternate`, animationDelay: `${i * 0.2}s` }}
              >
                {/* Custom Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg z-50">
                  {node.name}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                </div>

                {/* Hover Background */}
                <div className="absolute inset-0 bg-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* The Logo (elevated above hover background) */}
                <img src={node.icon} alt={node.name} className="w-full h-full object-contain transition-all relative z-10" />
              </div>
            </div>
          ))}

        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-12px); }
        }
        @keyframes smooth-beam {
          0% { stroke-dashoffset: 1060; opacity: 0; }
          20% { opacity: 0.9; }
          80% { opacity: 0.9; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default TechStackSection;
