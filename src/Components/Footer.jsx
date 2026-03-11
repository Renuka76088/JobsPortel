import React from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  const container = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-sky-50 pt-24 pb-14">

      <div className="max-w-7xl mx-auto px-6">

        {/* CTA CARD */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-14 mb-20 flex flex-col lg:flex-row items-center justify-between gap-10"
        >

          <motion.div variants={item}>
            <h2 className="text-5xl font-bold leading-tight mb-4">
              Ready to grow your <br />
              <span className="text-sky-600">career or business?</span>
            </h2>

            <p className="text-gray-500 text-lg max-w-md">
              Join thousands of professionals and companies building the
              future with Digital India Biz.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="flex gap-5 flex-wrap"
          >
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition">
              Post a Job
            </button>

            <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-10 py-4 rounded-xl text-lg font-semibold transition">
              Find Jobs <ArrowUpRight size={20}/>
            </button>
          </motion.div>

        </motion.div>


        {/* FOOTER CONTENT */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-14 bg-white rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.07)] p-12"
        >

          {/* BRAND */}

          <motion.div variants={item}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-sky-600 rounded-xl"></div>
              <span className="text-2xl font-bold">
                Digital India
              </span>
            </div>

            <p className="text-gray-500 text-base leading-relaxed mb-6">
              A modern tech and hiring platform helping companies
              connect with top digital talent across India.
            </p>

            <div className="flex gap-4 text-gray-500">
              <Facebook className="cursor-pointer hover:text-sky-600 transition"/>
              <Instagram className="cursor-pointer hover:text-sky-600 transition"/>
              <Twitter className="cursor-pointer hover:text-sky-600 transition"/>
              <Linkedin className="cursor-pointer hover:text-sky-600 transition"/>
            </div>
          </motion.div>


          {/* LINKS */}

          <motion.div variants={item}>
            <h4 className="text-xl font-semibold mb-6">
              Job Categories
            </h4>

            <ul className="space-y-4 text-gray-500 text-base">
              <li className="hover:text-sky-600 cursor-pointer">Engineering</li>
              <li className="hover:text-sky-600 cursor-pointer">Marketing</li>
              <li className="hover:text-sky-600 cursor-pointer">UI/UX Design</li>
              <li className="hover:text-sky-600 cursor-pointer">Sales</li>
            </ul>
          </motion.div>


          {/* COMPANY */}

          <motion.div variants={item}>
            <h4 className="text-xl font-semibold mb-6">
              Company
            </h4>

            <ul className="space-y-4 text-gray-500 text-base">
              <li className="hover:text-sky-600 cursor-pointer">About Us</li>
              <li className="hover:text-sky-600 cursor-pointer">Careers</li>
              <li className="hover:text-sky-600 cursor-pointer">Blog</li>
              <li className="hover:text-sky-600 cursor-pointer">Contact</li>
            </ul>
          </motion.div>


          {/* CONTACT */}

          <motion.div variants={item}>
            <h4 className="text-xl font-semibold mb-6">
              Contact
            </h4>

            <div className="space-y-5 text-gray-500">

              <div className="flex items-start gap-3">
                <MapPin className="text-sky-600"/>
                <p>118 Regus AB Road<br/>Indore, MP 452001</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-sky-600"/>
                <p>+91 9302057620</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-sky-600"/>
                <p className="text-sky-600 font-semibold">
                  hello@digitalindia.biz
                </p>
              </div>

            </div>
          </motion.div>

        </motion.div>


        {/* BOTTOM */}

        <div className="mt-10 text-center text-gray-400 text-sm">
          © 2026 Digital India Biz — Crafted with ❤️ Excellence
        </div>

      </div>

    </footer>
  );
};

export default Footer;
