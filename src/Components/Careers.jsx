import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, MapPin, Briefcase, Globe, ArrowRight, 
  Sparkles, Upload, Clock, ChevronRight, Building2, Laptop 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All Jobs");
  const [searchTerm, setSearchTerm] = useState("");
  const fileInputRef = useRef(null);

  const jobCategories = ["All Jobs", "Software Engineering", "Data Science", "Marketing", "Product"];

  // --- API Fetching ---
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://astrologer-backend-wrbe.onrender.com/api/jobs/jobs');
        const result = await response.json();
        if (result.success) {
          setJobs(result.data);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // --- Filtering Logic (Category matches Title Keywords) ---
  const filteredJobs = jobs.filter(job => {
    const matchesCategory = activeCategory === "All Jobs" || 
      job.title.toLowerCase().includes(activeCategory.toLowerCase().split(' ')[0]); // e.g. "Software" match karega
    
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.location.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleCVClick = () => {
    fileInputRef.current.click();
  };

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
      <input type="file" ref={fileInputRef} className="hidden" onChange={(e) => alert(`Selected: ${e.target.files[0].name}`)} />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-100/40 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto text-center md:text-left">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center justify-center md:justify-start gap-2 text-sky-600 font-semibold text-xs uppercase tracking-widest mb-6">
            <Sparkles size={16} /> <span>Join Our Innovation Hub</span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
            Find your next <br /> <span className="text-sky-500">career move.</span>
          </motion.h1>

          {/* SEARCH BOX */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-12 bg-white p-2 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 flex items-center px-6 gap-3 w-full border-b md:border-b-0 md:border-r border-slate-100">
              <Search className="text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Job title or keywords" 
                className="w-full py-5 text-base focus:outline-none placeholder:text-slate-400"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex-1 flex items-center px-6 gap-3 w-full">
              <MapPin className="text-slate-400" size={20} />
              <input type="text" placeholder="Location" className="w-full py-5 text-base focus:outline-none placeholder:text-slate-400" />
            </div>
            <button className="w-full md:w-auto bg-slate-900 hover:bg-sky-600 text-white px-10 py-5 rounded-[18px] font-semibold transition-all shadow-lg">
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

        {/* JOB LISTING */}
        <div className="grid gap-6">
          {loading ? (
            <div className="text-center py-20 font-bold text-slate-400 animate-pulse">Scanning the universe for jobs...</div>
          ) : (
            <AnimatePresence mode='popLayout'>
              {filteredJobs.length > 0 ? filteredJobs.map((job) => (
                <motion.div
                  key={job._id}
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
                          {job.jobType?.includes('Remote') ? <Laptop size={18} /> : <Building2 size={18} />}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors tracking-tight">{job.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-y-2 gap-x-6 text-[15px] font-medium text-slate-400">
                      <span className="flex items-center gap-2"><MapPin size={18} /> {job.location}</span>
                      <span className="flex items-center gap-2"><Briefcase size={18} /> {job.experience}</span>
                      <span className="flex items-center gap-2"><Clock size={18} /> {new Date(job.createdAt).toLocaleDateString()}</span>
                    </div>

                    <div className="flex gap-2 mt-2">
                       <span className="text-xs bg-slate-50 text-slate-500 px-4 py-1.5 rounded-full border border-slate-100 font-bold uppercase tracking-wider group-hover:bg-sky-50">
                        {job.jobType || "Full Time"}
                       </span>
                       <span className="text-xs bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full border border-emerald-100 font-bold">
                        {job.salary}
                       </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 w-full md:w-auto border-t md:border-0 pt-6 md:pt-0">
                 // Is line ko Job Card ke andar update karein:
<Link to={`/job-details/${job._id}`} className="flex-1 md:flex-none">
  <button className="w-full border border-slate-200 text-slate-600 px-8 py-3.5 rounded-2xl font-semibold hover:bg-slate-50 transition-all">
    Details
  </button>
</Link>
                    <button className="flex-1 md:flex-none bg-sky-500 text-white px-8 py-3.5 rounded-2xl font-semibold hover:bg-sky-600 shadow-md shadow-sky-100 flex items-center justify-center gap-2">
                      Apply <ChevronRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )) : (
                <div className="text-center py-20 text-slate-400 font-medium">No jobs found in this category.</div>
              )}
            </AnimatePresence>
          )}
        </div>

        {/* UPLOAD SECTION (Wahi Purana) */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="mt-24 bg-slate-900 rounded-[40px] p-12 text-center relative overflow-hidden">
          <div className="relative z-10 text-white">
            <Upload size={32} className="mx-auto mb-6 text-sky-400" />
            <h2 className="text-3xl font-bold mb-4">Drop your CV</h2>
            <button onClick={handleCVClick} className="bg-sky-500 text-white px-12 py-5 rounded-[20px] font-bold hover:bg-sky-400 transition-all">Send us your CV</button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Careers;