import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);

  // Nav Items with their respective Page Slugs
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Insights", path: "#" }, // This has a dropdown
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" }
  ];

  const insightLinks = [
    { name: "Blogs", path: "/insights/blogs" },
    { name: "Case Studies", path: "/insights/case-studies" }
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Redirects to Home */}
            <a href="/" className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white shadow-xl group-hover:bg-sky-500 transition-colors">
                <Briefcase size={20} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-black uppercase">
                Labelz<span className="text-sky-500">AI</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-10">
              {navItems.map((item) => (
                item.name === "Insights" ? (
                  <div 
                    key={item.name} 
                    className="relative py-2 group cursor-pointer"
                    onMouseEnter={() => setIsInsightsOpen(true)}
                    onMouseLeave={() => setIsInsightsOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-[13px] font-bold text-slate-500 hover:text-black uppercase tracking-widest transition-all">
                      {item.name} <ChevronDown size={14} className={`transition-transform ${isInsightsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isInsightsOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 w-48 bg-white border border-slate-100 shadow-xl py-4 z-[110]"
                        >
                          {insightLinks.map((subItem) => (
                            <a 
                              key={subItem.name} 
                              href={subItem.path} 
                              className="block px-6 py-2 text-[12px] font-bold text-slate-500 hover:text-sky-500 hover:bg-slate-50 uppercase tracking-widest"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a 
                    key={item.name} 
                    href={item.path} 
                    className="text-[13px] font-bold text-slate-500 hover:text-black uppercase tracking-widest transition-all relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-sky-500 transition-all group-hover:w-full"></span>
                  </a>
                )
              ))}
              {/* CTA Redirect to Contact or Login/Register */}
              <button 
                onClick={() => window.location.href = '/contact'}
                className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-none font-bold text-xs uppercase tracking-[0.2em] hover:bg-sky-500 transition-all shadow-lg"
              >
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
              onClick={() => { setIsOpen(false); setIsInsightsOpen(false); }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
            />
            <motion.div 
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-[120] p-10 shadow-2xl overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-black uppercase">Menu</span>
                <button onClick={() => { setIsOpen(false); setIsInsightsOpen(false); }} className="p-2 bg-slate-100 rounded-full">
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-col gap-6">
                {navItems.map((item, i) => (
                  <div key={item.name}>
                    {item.name === "Insights" ? (
                      <div className="flex flex-col">
                        <button 
                          onClick={() => setIsInsightsOpen(!isInsightsOpen)}
                          className="text-3xl font-bold text-black flex items-center justify-between"
                        >
                          {item.name} <ChevronDown className={`transition-transform ${isInsightsOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isInsightsOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden flex flex-col gap-4 mt-4 ml-4 border-l-2 border-sky-500 pl-4"
                            >
                              {insightLinks.map((sub) => (
                                <a 
                                  key={sub.name} 
                                  href={sub.path} 
                                  className="text-xl font-bold text-slate-500 hover:text-sky-500"
                                >
                                  {sub.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.a 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        href={item.path} 
                        className="text-3xl font-bold text-black hover:text-sky-500 transition-colors block"
                      >
                        {item.name}
                      </motion.a>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-16">
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="w-full bg-black text-white py-5 font-bold uppercase tracking-widest shadow-xl active:bg-sky-500 transition-colors"
                >
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