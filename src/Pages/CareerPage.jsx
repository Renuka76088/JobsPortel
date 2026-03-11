import React, { useState } from 'react';

import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Filter, 
  ChevronRight, 
  Search,
  Zap,
  ArrowRight,
  ShieldCheck,
  Code
} from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";


const CareerPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const jobs = [
    {
      id: 1,
      role: "Senior Full Stack Developer",
      company: "LabelzAI Core",
      type: "Full-Time",
      location: "Remote / Indore",
      salary: "₹18L - ₹24L",
      stack: ["React", "Node.js", "AWS"],
      category: "Engineering",
      posted: "2 days ago"
    },
    {
      id: 2,
      role: "AI Model Trainer",
      company: "Inphora IT Solutions",
      type: "Contract",
      location: "Hybrid",
      salary: "₹12L - ₹15L",
      stack: ["Python", "PyTorch", "NLP"],
      category: "AI/ML",
      posted: "5 days ago"
    },
    {
      id: 3,
      role: "Technical UI/UX Designer",
      company: "SkinnVeda Projects",
      type: "Full-Time",
      location: "Remote",
      salary: "₹10L - ₹14L",
      stack: ["Figma", "Framer", "CSS"],
      category: "Design",
      posted: "1 week ago"
    },
    {
      id: 4,
      role: "DevOps Architect",
      company: "LabelzAI Tech",
      type: "Full-Time",
      location: "Indore HQ",
      salary: "₹22L - ₹30L",
      stack: ["Docker", "K8s", "CI/CD"],
      category: "Engineering",
      posted: "3 days ago"
    }
  ];

  const categories = ["All", "Engineering", "Design", "AI/ML", "Management"];

  const filteredJobs = selectedCategory === "All" 
    ? jobs 
    : jobs.filter(job => job.category === selectedCategory);

  return (
    <div className="bg-white pt-20 relative min-h-screen">
      
      {/* --- Background Square Grid --- */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)`, 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- Hero / Header Section --- */}
        <header className="py-16 md:py-24 border-b-4 border-black mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-8 h-8 bg-sky-500 flex items-center justify-center border-2 border-black">
              <Briefcase size={16} fill="currentColor" />
            </div>
            <span className="font-black uppercase tracking-[0.3em] text-[10px]">Open Protocols</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8"
          >
            Find Your <br />
            <span className="text-sky-500 italic">Technical Edge.</span>
          </motion.h1>

          <div className="flex flex-col md:flex-row gap-4 max-w-2xl">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by role or tech stack..." 
                className="w-full bg-slate-50 border-[3px] border-black p-4 pl-12 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(14,165,233,1)] transition-all"
              />
            </div>
            <button className="bg-black text-white px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-sky-500 transition-all shadow-[6px_6px_0px_0px_rgba(14,165,233,1)]">
              Search
            </button>
          </div>
        </header>

        {/* --- Main Portal Body --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-24">
          
          {/* Sidebar: Filters */}
          <aside className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="flex items-center gap-2 font-black uppercase text-xs tracking-widest mb-6 border-b-2 border-black pb-2">
                <Filter size={14} /> Categories
              </h3>
              <div className="flex flex-col gap-2">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left px-4 py-3 font-black text-[11px] uppercase tracking-widest border-2 transition-all
                      ${selectedCategory === cat 
                        ? 'bg-black text-white border-black translate-x-1 shadow-[4px_4px_0px_0px_rgba(14,165,233,1)]' 
                        : 'bg-white text-slate-400 border-slate-100 hover:border-black hover:text-black'}
                    `}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 bg-sky-50 border-2 border-sky-200">
               <Zap className="text-sky-500 mb-4" size={24} fill="currentColor" />
               <h4 className="font-black text-xs uppercase mb-2">Priority Alerts</h4>
               <p className="text-[10px] font-bold text-slate-600 mb-4 uppercase tracking-tighter">Get zero-latency notifications for elite job openings.</p>
               <button className="w-full bg-black text-white py-3 text-[10px] font-black uppercase tracking-widest">Enable Signals</button>
            </div>
          </aside>

          {/* Main List: Job Cards */}
          <main className="lg:col-span-3 space-y-6">
            <AnimatePresence mode="wait">
              {filteredJobs.map((job) => (
                <motion.div 
                  key={job.id}
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group relative bg-white border-[3px] border-black p-6 md:p-8 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="bg-sky-500 text-black px-2 py-1 text-[9px] font-black uppercase tracking-tighter border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          {job.type}
                        </span>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">
                          <Clock size={12}/> {job.posted}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter group-hover:text-sky-600 transition-colors">
                        {job.role}
                      </h2>

                      <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-500">
                        <div className="flex items-center gap-1"><MapPin size={14} className="text-black" /> {job.location}</div>
                        <div className="flex items-center gap-1"><DollarSign size={14} className="text-black" /> {job.salary}</div>
                        <div className="flex items-center gap-1"><Code size={14} className="text-black" /> {job.stack.join(", ")}</div>
                      </div>
                    </div>

                    <button className="flex items-center gap-3 bg-black text-white px-8 py-4 font-black uppercase text-[10px] tracking-widest hover:bg-sky-500 transition-all border-2 border-black">
                      Apply Now <ChevronRight size={16} />
                    </button>
                  </div>
                  
                  {/* Hover Decoration */}
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                     <ShieldCheck className="text-sky-500" size={30} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </main>
        </div>

        {/* --- Protocol Section (Why Join Us) --- */}
        <section className="py-20 border-t-4 border-black mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none">
              The <span className="text-sky-500 italic">Hiring</span> <br /> Protocol.
            </h2>
            <div className="space-y-8">
               {[
                 { title: "Direct Pipeline", desc: "Skip the recruiters. Talk directly to the technical architects leading the projects." },
                 { title: "Indore Tech Hub", desc: "Be part of the growing ecosystem in Central India's cleanest and smartest city." },
                 { title: "Equity & Ownership", desc: "Elite roles come with skin in the game. We value long-term technical contributions." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 border-2 border-black flex-shrink-0 flex items-center justify-center font-black text-lg bg-slate-50">0{i+1}</div>
                    <div>
                       <h4 className="font-black uppercase text-sm mb-1 tracking-widest">{item.title}</h4>
                       <p className="text-slate-500 text-sm font-bold tracking-tight">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
          <div className="bg-sky-500 border-4 border-black p-12 md:p-20 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
             <Zap className="absolute -right-10 -bottom-10 opacity-20 text-black" size={300} />
             <h3 className="text-3xl font-black uppercase mb-6 text-black relative z-10 italic">Can't find a role?</h3>
             <p className="text-black font-bold mb-10 relative z-10">Send us your technical portfolio. We are always looking for rogue talent in the MERN stack and AI space.</p>
             <button className="bg-black text-white px-12 py-5 font-black uppercase tracking-widest text-sm relative z-10 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                General Application <ArrowRight size={18} className="inline ml-2" />
             </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CareerPage;