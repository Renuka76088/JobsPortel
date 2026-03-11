import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, Building2, Stethoscope, BarChart4, GraduationCap, Plus, Zap 
} from 'lucide-react';

const Industries = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const industries = [
    {
      id: "01",
      title: "Technology & IT",
      desc: "Architecting the future with elite talent in AI, Cloud, and Software Engineering for global tech giants.",
      icon: <Cpu size={28} />,
      accent: "bg-sky-500",
    },
    {
      id: "02",
      title: "Real Estate",
      desc: "Connecting visionary developers with experts in project management, sales, and urban planning.",
      icon: <Building2 size={28} />,
      accent: "bg-black",
    },
    {
      id: "03",
      title: "Healthcare",
      desc: "Empowering medical institutions with verified professionals in specialized care and hospital management.",
      icon: <Stethoscope size={28} />,
      accent: "bg-sky-600",
    },
    {
      id: "04",
      title: "FinTech",
      desc: "Bridging the gap in the financial sector with experts in risk management, trading, and digital banking.",
      icon: <BarChart4 size={28} />,
      accent: "bg-black",
    },
    {
      id: "05",
      title: "Education",
      desc: "Transforming the learning landscape by connecting institutions with innovative educators and trainers.",
      icon: <GraduationCap size={28} />,
      accent: "bg-sky-400",
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t-2 border-black">
      
      {/* Background Grid Pattern (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6"
            >
              <Zap size={12} className="text-sky-400" fill="currentColor" />
              Industry Verticals
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-black text-black tracking-tighter leading-[0.9]"
            >
              GLOBAL SECTORS. <br />
              <span className="text-sky-500 italic font-black">UNLIMITED REACH.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 font-bold uppercase text-[11px] tracking-[0.3em] border-b-2 border-black pb-2"
          >
            Protocol-driven recruitment
          </motion.p>
        </div>

        {/* --- Neubrutalist Interactive Accordion --- */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[550px] gap-4">
          {industries.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              className={`relative cursor-pointer transition-all duration-700 ease-[0.23, 1, 0.32, 1] border-[3px] border-black
                ${hoveredIndex === index 
                  ? 'lg:flex-[4] bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]' 
                  : 'lg:flex-1 bg-slate-50 opacity-60 grayscale hover:opacity-100'
                }
                min-h-[400px] lg:min-h-full p-8 lg:p-10 flex flex-col justify-between`}
            >
              
              {/* Card Top: ID & Icon */}
              <div className="flex items-center justify-between">
                <span className={`text-2xl font-black tracking-tighter transition-colors duration-500 ${hoveredIndex === index ? 'text-sky-500' : 'text-black/20'}`}>
                  {item.id}
                </span>
                <div className={`w-14 h-14 border-2 border-black flex items-center justify-center transition-all duration-500 
                  ${hoveredIndex === index ? 'bg-black text-white scale-110 shadow-[4px_4px_0px_0px_rgba(14,165,233,1)]' : 'bg-white text-black'}
                `}>
                  {item.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="relative">
                <h3 className={`font-black uppercase tracking-tighter transition-all duration-500 
                  ${hoveredIndex === index 
                    ? 'text-4xl text-black mb-6' 
                    : 'text-2xl text-black lg:rotate-[-90deg] lg:absolute lg:bottom-16 lg:left-[-80px] lg:w-[350px] lg:text-center'}
                `}>
                  {item.title}
                </h3>

                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p className="text-slate-600 font-bold leading-snug max-w-sm mb-10 text-lg">
                        {item.desc}
                      </p>
                      <button className="flex items-center gap-4 bg-black text-white px-8 py-4 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-sky-500 transition-all">
                        Explore Openings 
                        <Plus size={14} className="text-sky-400" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Decorative Accent on active card */}
              {hoveredIndex === index && (
                <div className="absolute top-0 left-0 w-full h-[6px] bg-sky-500"></div>
              )}
            </motion.div>
          ))}
        </div>

      

      </div>
    </section>
  );
};

export default Industries;