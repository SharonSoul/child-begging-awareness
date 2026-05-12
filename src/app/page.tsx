"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { MapPin, Users, Heart, BookOpen, AlertCircle, Phone, ArrowRight, Shield, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [reportState, setReportState] = useState({
    lga: "Egbeda",
    junction: "",
    count: "",
    time: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setReportState({
        lga: "Egbeda",
        junction: "",
        count: "",
        time: "",
        notes: "",
      });
    }, 4000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-brand-50">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 glassmorphism transition-all duration-300 shadow-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white shadow-soft">
                <Heart size={20} />
              </div>
              <span className="font-bold text-xl text-brand-900 tracking-tight">Hope for Egbeda</span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="text-foreground hover:text-brand-600 transition-colors font-medium">About</a>
              <a href="#impact" className="text-foreground hover:text-brand-600 transition-colors font-medium">The Impact</a>
              <a href="#initiatives" className="text-foreground hover:text-brand-600 transition-colors font-medium">Initiatives</a>
              <a href="#report" className="px-5 py-2.5 rounded-full bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors shadow-soft hover:shadow-lg flex items-center gap-2">
                <AlertCircle size={18} />
                Report Incident
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="text-brand-900 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-accent-clay rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-sage rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-800 text-sm font-semibold tracking-wider mb-6 border border-brand-200">
              EGBEDA LOCAL GOVERNMENT, IBADAN
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-brand-900 mb-8 leading-tight tracking-tight">
              A Future Off <br />The Streets
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              Combating child begging through digital awareness, community monitoring, and actionable reporting in our local community. Every child deserves education, not exploitation.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#report" className="px-8 py-4 rounded-full bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-all shadow-soft hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                <AlertCircle size={20} />
                Report a Sighting
              </a>
              <a href="#about" className="px-8 py-4 rounded-full bg-white text-brand-800 font-semibold hover:bg-brand-50 transition-all border border-brand-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 text-lg">
                Learn More
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-soft relative bg-brand-100 flex items-center justify-center border border-brand-200/50">
                 <Image
                   src="/african_child_begging.png"
                   alt="Realistic photo of an African child begging at a street junction"
                   fill
                   className="object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 to-transparent"></div>
                 <div className="absolute bottom-6 right-6 glassmorphism p-4 rounded-2xl shadow-glass">
                    <p className="text-brand-900 font-bold text-lg">Protecting Our Future</p>
                 </div>
              </div>
            </motion.div>
            
            <motion.div variants={staggerContainer}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-brand-900 mb-6">
                Understanding the Crisis in Egbeda
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-foreground/80 mb-6 text-lg leading-relaxed">
                Egbeda Local Government faces a complex challenge. The prevalence of child begging on major routes and public spaces highlights critical concerns about child welfare and human rights.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-foreground/80 mb-8 text-lg leading-relaxed">
                This isn't just about the act of begging. It represents broader vulnerabilities: exposure to health risks, exploitation, and missing out on crucial education. While some children are native to the area, others are brought in from neighboring regions.
              </motion.p>
              <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-sage/20 flex items-center justify-center text-accent-sage">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-900 mb-1">Child Protection</h4>
                    <p className="text-sm text-foreground/70">Safeguarding vulnerable minors from street dangers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-clay/20 flex items-center justify-center text-accent-clay">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-900 mb-1">Right to Education</h4>
                    <p className="text-sm text-foreground/70">Transitioning children from junctions to classrooms.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section id="impact" className="py-20 bg-brand-800 text-brand-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-700 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">The Cost of Inaction</h2>
            <p className="text-brand-200 text-lg">When a child is on the street begging, the community loses a piece of its future. The impact is profound and long-lasting.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: Users, title: "Loss of Potential", desc: "Every hour spent begging is an hour lost for learning, playing, and developing crucial life skills." },
              { icon: Shield, title: "High Vulnerability", desc: "Children on the streets are highly susceptible to trafficking, abuse, and recruitment into criminal activities." },
              { icon: Heart, title: "Health Risks", desc: "Prolonged exposure to harsh weather, traffic fumes, and lack of sanitation severely impacts physical development." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-brand-900/40 p-8 rounded-3xl border border-brand-700/50 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-brand-700 flex items-center justify-center text-brand-200 mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-brand-200 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Report Section - Core Feature */}
      <section id="report" className="py-24 bg-brand-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-clay/10 text-brand-800 text-sm font-semibold mb-6">
                <AlertCircle size={16} /> Community Action
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-brand-900 mb-6">
                Log a Sighting
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-foreground/80 mb-8 text-lg">
                Your report helps us map hotspots within Egbeda and coordinate with local authorities and NGOs to provide targeted interventions. We ensure all data is used solely for welfare purposes.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center text-brand-700 flex-shrink-0 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-900">Pinpoint Locations</h4>
                    <p className="text-foreground/70">Help us identify junctions and streets where intervention is needed most.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center text-brand-700 flex-shrink-0 mt-1">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-900">Estimate Numbers</h4>
                    <p className="text-foreground/70">Providing daily estimates helps us allocate the right resources.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-soft p-8 md:p-10 border border-brand-100 relative"
            >
              {submitted ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm rounded-3xl z-10 text-center p-8">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6">
                    <CheckCircle2 size={40} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-brand-900 mb-2">Report Submitted</h3>
                  <p className="text-foreground/70">Thank you for looking out for our community's children. Your report has been logged securely.</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-900 mb-2">Local Government Area</label>
                  <select 
                    value={reportState.lga}
                    onChange={(e) => setReportState({...reportState, lga: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-brand-200 bg-brand-50 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:bg-white transition-all text-brand-900"
                    required
                  >
                    <option value="Egbeda">Egbeda (Focus Area)</option>
                    <option value="Ibadan North">Ibadan North</option>
                    <option value="Ibadan North-East">Ibadan North-East</option>
                    <option value="Ibadan North-West">Ibadan North-West</option>
                    <option value="Ibadan South-East">Ibadan South-East</option>
                    <option value="Ibadan South-West">Ibadan South-West</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-900 mb-2">Junction / Street Name</label>
                  <input 
                    type="text" 
                    value={reportState.junction}
                    onChange={(e) => setReportState({...reportState, junction: e.target.value})}
                    placeholder="e.g. Iwo Road Interchange, New Gbagi..."
                    className="w-full px-4 py-3 rounded-xl border border-brand-200 bg-brand-50 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:bg-white transition-all text-brand-900 placeholder:text-brand-300"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-900 mb-2">Est. Number of Children</label>
                    <select 
                      value={reportState.count}
                      onChange={(e) => setReportState({...reportState, count: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-brand-200 bg-brand-50 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:bg-white transition-all text-brand-900"
                      required
                    >
                      <option value="" disabled>Select range</option>
                      <option value="1-3">1 - 3</option>
                      <option value="4-10">4 - 10</option>
                      <option value="10+">More than 10</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-900 mb-2">Time of Day</label>
                    <select 
                      value={reportState.time}
                      onChange={(e) => setReportState({...reportState, time: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-brand-200 bg-brand-50 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:bg-white transition-all text-brand-900"
                      required
                    >
                      <option value="" disabled>Select time</option>
                      <option value="Morning">Morning (6AM - 12PM)</option>
                      <option value="Afternoon">Afternoon (12PM - 4PM)</option>
                      <option value="Evening">Evening (4PM - 8PM)</option>
                      <option value="Night">Night (After 8PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-900 mb-2">Additional Context (Optional)</label>
                  <textarea 
                    value={reportState.notes}
                    onChange={(e) => setReportState({...reportState, notes: e.target.value})}
                    placeholder="Any specific observations? e.g. Accompanied by adults, physical condition..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-brand-200 bg-brand-50 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:bg-white transition-all resize-none text-brand-900 placeholder:text-brand-300"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-600 text-white font-bold hover:bg-brand-700 transition-colors shadow-soft hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <AlertCircle size={20} />
                  Submit Daily Log
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section id="initiatives" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-900">Our Interventions</h2>
            <p className="text-foreground/80 text-lg">Reporting is just the first step. Here is how we follow up to ensure these children find a better path.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Rehabilitation & Counseling",
                desc: "Partnering with social workers to provide psychological support and safe transit spaces for recovered children.",
                icon: Heart,
                color: "text-accent-clay",
                bg: "bg-accent-clay/10"
              },
              {
                title: "Educational Reintegration",
                desc: "Working with local schools in Egbeda to sponsor enrollments and provide basic learning materials.",
                icon: BookOpen,
                color: "text-brand-600",
                bg: "bg-brand-100"
              },
              {
                title: "Community Awareness",
                desc: "Educating residents on why giving to child beggars perpetuates the cycle, encouraging donations to verified NGOs instead.",
                icon: Users,
                color: "text-accent-sage",
                bg: "bg-accent-sage/10"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
                className="p-8 rounded-3xl bg-brand-50 border border-brand-100 hover:shadow-soft transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-900">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-900 text-brand-100 py-12 border-t border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Heart size={24} className="text-brand-400" />
                <span className="font-bold text-2xl text-white tracking-tight">Hope for Egbeda</span>
              </div>
              <p className="text-brand-200/80 max-w-sm mb-6">
                A digital awareness and monitoring initiative dedicated to combating child begging in Egbeda Local Government, Ibadan.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-brand-200/80 hover:text-white transition-colors">About the Issue</a></li>
                <li><a href="#impact" className="text-brand-200/80 hover:text-white transition-colors">The Impact</a></li>
                <li><a href="#report" className="text-brand-200/80 hover:text-white transition-colors">Report a Sighting</a></li>
                <li><a href="#initiatives" className="text-brand-200/80 hover:text-white transition-colors">Our Initiatives</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-brand-200/80">
                  <Phone size={16} />
                  <span>Emergency: 112</span>
                </li>
                <li className="flex items-center gap-2 text-brand-200/80">
                  <MapPin size={16} />
                  <span>Egbeda LGA Secretariat, Ibadan</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-brand-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-200/60">
            <p>&copy; {new Date().getFullYear()} Hope for Egbeda. All rights reserved.</p>
            <p>Designed with care for the community.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
