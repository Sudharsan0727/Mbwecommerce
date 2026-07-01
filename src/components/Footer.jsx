import React from 'react';
import { Globe, Mail, MessageCircle } from 'lucide-react';
import logo from '../assets/mbwcommerce.png';
import commerce2 from '../assets/icons/commerce2.svg';

const Footer = ({ onOpenDemo }) => {
  return (
    <footer className="bg-slate-950 pt-24 pb-10 relative overflow-x-clip overflow-y-visible text-slate-300">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
      
      {/* Animated Ocean Waves & Sliding Icon CSS */}
      <style>
        {`
          @keyframes wave-move {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes slide-across {
            0% { left: -100px; }
            100% { left: 100%; }
          }
        `}
      </style>

      {/* Sliding Icon above Footer */}
      <div className="absolute bottom-full left-0 w-full h-20 pointer-events-none z-20">
        <img 
          src={commerce2} 
          alt="Floating Icon" 
          className="absolute -bottom-3 w-20 h-20 drop-shadow-[0_0_15px_rgba(37,99,235,0.5)] opacity-100"
          style={{ animation: 'slide-across 20s linear infinite' }}
        />
      </div>

      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none overflow-hidden">
        {/* Layer 1 - Back wave */}
        <svg className="absolute w-[200%] h-full bottom-0 left-0 animate-[wave-move_15s_linear_infinite]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#1d4ed8" fillOpacity="0.4" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          {/* Duplicate path shifted right for seamless loop */}
          <path transform="translate(1440, 0)" fill="#1d4ed8" fillOpacity="0.4" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        
        {/* Layer 2 - Middle wave */}
        <svg className="absolute w-[200%] h-[80%] bottom-0 left-0 animate-[wave-move_20s_linear_infinite]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#2563eb" fillOpacity="0.5" d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,149.3C672,139,768,117,864,133.3C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          {/* Duplicate path shifted right for seamless loop */}
          <path transform="translate(1440, 0)" fill="#2563eb" fillOpacity="0.5" d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,149.3C672,139,768,117,864,133.3C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        {/* Layer 3 - Front wave */}
        <svg className="absolute w-[200%] h-[60%] bottom-0 left-0 animate-[wave-move_12s_linear_infinite]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#3b82f6" fillOpacity="0.6" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          {/* Duplicate path shifted right for seamless loop */}
          <path transform="translate(1440, 0)" fill="#3b82f6" fillOpacity="0.6" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Massive CTA Section inside Footer */}
        <div className="flex flex-col items-center text-center mb-24 pb-20 border-b border-slate-800/60">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Ready to upgrade your business?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Join hundreds of merchants selling premium car accessories on a platform built for growth and speed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={onOpenDemo} className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:-translate-y-1">
              Start Your Free Demo
            </button>
            <button className="px-8 py-4 bg-slate-900 text-white border border-slate-700 rounded-full font-bold text-lg hover:bg-slate-800 transition-all hover:-translate-y-1">
              Talk to Sales
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              {/* Force logo to have white filter/brightness since it's on dark bg */}
              <img src={logo} alt="MBW Commerce Logo" className="h-10 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-sm">
              The premium e-commerce solution for car accessory merchants. Build, manage, and scale your business with zero limits.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Product</h4>
            <ul className="space-y-4">
              <li><a href="#storefront" className="text-slate-400 hover:text-white transition-colors">Storefront</a></li>
              <li><a href="#admin" className="text-slate-400 hover:text-white transition-colors">Admin Console</a></li>
              <li><a href="#pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#showcase" className="text-slate-400 hover:text-white transition-colors">Showcase</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4">
              <li className="text-slate-400 hover:text-white transition-colors cursor-pointer">Sales: +1 (800) 123-4567</li>
              <li className="text-slate-400 hover:text-white transition-colors cursor-pointer">Support: WhatsApp Chat</li>
              <li className="text-slate-400 hover:text-white transition-colors cursor-pointer">Email: hello@mbwcommerce.com</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-300 text-sm">
            © {new Date().getFullYear()} MBW Commerce. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
