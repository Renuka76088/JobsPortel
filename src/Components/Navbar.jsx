import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home", "About Us", "Services", "Industries", "Insights", "Careers", "Contact"
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white shadow-xl group-hover:bg-sky-500 transition-colors">
                <Briefcase size={20} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-black uppercase">
            Labelz<span className="text-sky-500">AI</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-10">
              {navItems.map((item) => (
                <a key={item} href="#" className="text-[13px] font-bold text-slate-500 hover:text-black uppercase tracking-widest transition-all relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-sky-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
              <button className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-none font-bold text-xs uppercase tracking-[0.2em] hover:bg-sky-500 transition-all shadow-lg">
                Get Started <ArrowRight size={14} />
              </button>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setIsOpen(true)} className="xl:hidden p-2 text-black">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Creative Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
            />
            <motion.div 
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white z-[120] p-10 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="text-xl font-black uppercase">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 rounded-full">
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-8">
                {navItems.map((item, i) => (
                  <motion.a 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={item} href="#" 
                    className="text-3xl font-bold text-black hover:text-sky-500 transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
              <div className="absolute bottom-10 left-10 right-10">
                <button className="w-full bg-black text-white py-5 font-bold uppercase tracking-widest">
                  Join Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;