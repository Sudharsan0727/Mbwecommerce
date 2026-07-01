import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/mbwcommerce.png';

const Navbar = ({ onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={logo} alt="MBW Commerce Logo" className="h-10 w-auto object-contain" />
          </div>

          {/* Desktop Menu - Changed to lg:flex to ensure it fits, using smaller text and spacing */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-5">
            <a href="#showcase" className="text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap">Showcase</a>
            <a href="#pricing" className="text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap">Pricing</a>
            <a href="#why" className="text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap">Why Us</a>
            <a href="#platform" className="text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap">Platform</a>
            <a href="#tech-stack" className="text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap">Tech</a>
            <a href="#testimonials" className="text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap">Reviews</a>
            <a href="#faq" className="text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap">FAQ</a>
            <button onClick={onOpenDemo} className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-base font-semibold transition-all shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 whitespace-nowrap ml-1 xl:ml-2">
              Start Free Demo
            </button>
          </div>

          {/* Mobile Menu Button - Show below lg */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-900 p-2">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xl py-4 px-4 flex flex-col gap-3 max-h-[80vh] overflow-y-auto">
          <a href="#showcase" className="text-base font-semibold text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>Showcase</a>
          <a href="#pricing" className="text-base font-semibold text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
          <a href="#why" className="text-base font-semibold text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>Why Us</a>
          <a href="#platform" className="text-base font-semibold text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>Platform</a>
          <a href="#tech-stack" className="text-base font-semibold text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>Tech Stack</a>
          <a href="#testimonials" className="text-base font-semibold text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
          <a href="#faq" className="text-base font-semibold text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          <button onClick={() => { onOpenDemo(); setIsMobileMenuOpen(false); }} className="bg-slate-900 text-white px-5 py-3 rounded-xl text-base font-semibold w-full mt-2">
            Start Free Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
