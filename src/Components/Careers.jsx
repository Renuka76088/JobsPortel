import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, MapPin, Briefcase, Globe, ArrowRight, 
  Sparkles, Upload, Clock, ChevronRight, Building2, Laptop 
} from 'lucide-react';

const Careers = () => {
  const [activeCategory, setActiveCategory] = useState("All Jobs");
  const fileInputRef = useRef(null);

  const jobCategories = ["All Jobs", "Software Engineering", "Data Science", "Marketing", "Product"];

  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      category: "Software Engineering",
      location: "Indore, India",
      type: "Hybrid",
      experience: "4-6 Years",
      posted: "2 days ago",
      tags: ["React", "Node.js", "AWS"],
    },
    {
      id: 2,
      title: "Performance Marketing Lead",
      category: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "3-5 Years",
      posted: "5 days ago",
      tags: ["Growth", "Analytics", "Ads"],
    },
    {
      id: 3,
      title: "Junior Data Analyst",
      category: "Data Science",
      location: "Indore Office",
      type: "On-site",
      experience: "1-2 Years",
      posted: "Just now",
      tags: ["Python", "SQL", "Tableau"],
    },
    {
        id: 4,
        title: "Product Designer",
        category: "Product",
        location: "Indore, India",
        type: "Remote",
        experience: "2-4 Years",
        posted: "3 days ago",
        tags: ["Figma", "UI/UX", "Prototyping"],
      }
  ];

  const filteredJobs = activeCategory === "All Jobs" 
    ? jobs 
    : jobs.filter(job => job.category === activeCategory);

  const handleCVClick = () => {
    fileInputRef.current.click();
  };

  // Scroll Animation Variant
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <div className="bg-[#fcfdfe] min-h-screen font-sans text-slate-600 selection:bg-sky-100">
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        onChange={(e) => alert(`Selected: ${e.target.files[0].name}`)} 
      />

      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-100/40 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-sky-600 font-semibold text-xs uppercase tracking-widest mb-6"
          >
            <Sparkles size={16} /> <span>Join Our Innovation Hub</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8"
          >
            Find your next <br /> <span className="text-sky-500">career move.</span>
          </motion.h1>

          {/* GLASSMORPHIC SEARCH BOX */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 bg-white p-2 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col md:flex-row items-center gap-2"
          >
            <div className="flex-1 flex items-center px-6 gap-3 w-full border-b md:border-b-0 md:border-r border-slate-100">
              <Search className="text-slate-400" size={20} />
              <input type="text" placeholder="Job title or keywords" className="w-full py-5 text-base focus:outline-none placeholder:text-slate-400" />
            </div>
            <div className="flex-1 flex items-center px-6 gap-3 w-full">
              <MapPin className="text-slate-400" size={20} />
              <input type="text" placeholder="Indore, India" className="w-full py-5 text-base focus:outline-none placeholder:text-slate-400" />
            </div>
            <button className="w-full md:w-auto bg-slate-900 hover:bg-sky-600 text-white px-10 py-5 rounded-[18px] font-semibold transition-all active:scale-95 shadow-lg">
              Search Jobs
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        
        {/* STICKY FILTER CHIPS */}
        <div className="sticky top-4 z-40 flex gap-2 mb-12 overflow-x-auto pb-4 scrollbar-hide bg-[#fcfdfe]/80 backdrop-blur-md py-2">
          {jobCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-2xl text-sm font-semibold transition-all border whitespace-nowrap
                ${activeCategory === cat 
                  ? 'bg-sky-500 text-white border-sky-500 shadow-lg shadow-sky-100' 
                  : 'bg-white text-slate-500 border-slate-200 hover:border-sky-300'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* JOB LISTING WITH SCROLL REVEAL */}
        <div className="grid gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                layout
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group bg-white border border-slate-100 p-8 rounded-[32px] flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:border-sky-100 transition-all duration-500 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-sky-50 text-sky-600 p-2 rounded-xl">
                        {job.type === 'Remote' ? <Laptop size={18} /> : <Building2 size={18} />}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors">{job.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-y-2 gap-x-6 text-[15px] font-medium text-slate-400">
                    <span className="flex items-center gap-2"><MapPin size={18} /> {job.location}</span>
                    <span className="flex items-center gap-2"><Briefcase size={18} /> {job.experience}</span>
                    <span className="flex items-center gap-2"><Clock size={18} /> {job.posted}</span>
                  </div>

                  <div className="flex gap-2 mt-2">
                    {job.tags.map(tag => (
                      <span key={tag} className="text-xs bg-slate-50 text-slate-500 px-4 py-1.5 rounded-full border border-slate-100 font-medium group-hover:bg-sky-50 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto border-t md:border-0 pt-6 md:pt-0">
                  <button className="flex-1 md:flex-none border border-slate-200 text-slate-600 px-8 py-3.5 rounded-2xl font-semibold hover:bg-slate-50 transition-all">
                    Details
                  </button>
                  <button className="flex-1 md:flex-none bg-sky-500 text-white px-8 py-3.5 rounded-2xl font-semibold hover:bg-sky-600 transition-all shadow-md shadow-sky-100 flex items-center justify-center gap-2">
                    Apply <ChevronRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* PREMIUM CV UPLOAD SECTION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-slate-900 rounded-[40px] p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 blur-[80px] rounded-full" />
          <div className="relative z-10">
            <div className="bg-white/10 w-20 h-20 rounded-[24px] flex items-center justify-center mx-auto mb-8 text-sky-400 backdrop-blur-md">
                <Upload size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Don't see the right role?</h2>
            <p className="text-slate-400 max-w-lg mx-auto mb-10 text-lg">
                Upload your CV and we'll reach out when a position opens up that matches your profile.
            </p>
            <button 
                onClick={handleCVClick}
                className="bg-sky-500 text-white px-12 py-5 rounded-[20px] font-bold hover:bg-sky-400 transition-all inline-flex items-center gap-3 shadow-2xl shadow-sky-500/20 active:scale-95"
            >
                Send us your CV <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </main>

      <footer className="py-16 border-t border-slate-100 text-center">
        <p className="text-slate-400 font-medium">© 2026 Your Company. Built for the future.</p>
      </footer>
    </div>
  );
};

export default Careers;