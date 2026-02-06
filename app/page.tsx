import React from 'react';
import { professionalProjects, techProjects, summary } from './data';
import ProfessionalProjectsTable from './components/ProfessionalProjectsTable';
import TechProjectsTable from './components/TechProjectsTable';
import ThemeToggle from './components/ThemeToggle';
import { Briefcase, Code2, User, Mail, ArrowRight, Phone } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800">
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-200 dark:border-primary-700 flex-shrink-0">
                <img 
                  src="https://media.discordapp.net/attachments/331464345789923331/1469437822552506419/6_10ab4d32-a2bc-4ee7-b51b-a3be745a9b781.jpg?ex=6987a81d&is=6986569d&hm=bdc612888bdd618db572245bfcab189be86a395299e6e6a8bcc29c495a4ab025&=&format=webp&width=808&height=807" 
                  alt="Morgan Ambrose Naranjo"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900 dark:text-white">Morgan Ambrose Naranjo</h1>
                <p className="text-xs text-slate-500 dark:text-slate-400">Corporate Sales Manager</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</a>
                <a href="#professional" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Professional Work</a>
                <a href="#tech" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Tech Projects</a>
                <a href="#contact" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                  Contact
                </a>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="pb-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100 dark:from-primary-900/30 via-white dark:via-slate-900 to-secondary-100 dark:to-secondary-900/30 opacity-50 dark:opacity-20" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200 dark:bg-primary-700/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary-200 dark:bg-secondary-700/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          
          <div className="section-container relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-slate-700 dark:text-slate-300">Open to Opportunities</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Building High-Performing
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Teams & Systems</span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Sales and Operations Leader with a proven record in competitive, regulated environments. 
                I turn strategy into consistent, meaningful execution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#professional" 
                  className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all hover:scale-105"
                >
                  View My Work
                  <ArrowRight size={20} />
                </a>
                <a 
                  href="tel:+13134667426" 
                  className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-xl font-semibold border-2 border-slate-200 dark:border-slate-700 hover:border-primary-600 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                >
                  <Phone size={20} />
                  Contact Me Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white dark:bg-slate-900">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <User className="text-primary-600" size={28} />
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">About Me</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg">
                    <img 
                      src="https://media.discordapp.net/attachments/331464345789923331/1469437829271654491/2_494fd3d4-422f-44dc-9edb-d1978ab2e85711.jpg?ex=6987a81f&is=6986569f&hm=e1c184b968ca61786725c914dac736c7da99586569491ac7aa873f19df270d3d&=&format=webp&width=808&height=808" 
                      alt="Morgan Ambrose Naranjo"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    {summary}
                  </p>
                  
                  <div className="bg-gradient-to-br from-primary-50 dark:from-primary-900/20 to-secondary-50 dark:to-secondary-900/20 p-8 rounded-2xl border border-primary-100 dark:border-primary-800">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Key Highlights</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary-600 dark:text-primary-300 text-sm font-bold">1</span>
                        </div>
                        <span className="text-slate-700 dark:text-slate-300">Led team of 24 to top 10 enterprise ranking (14 of 16 months)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary-600 dark:text-primary-300 text-sm font-bold">2</span>
                        </div>
                        <span className="text-slate-700 dark:text-slate-300">Managed $8M+ in revenue retention through crisis management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary-600 dark:text-primary-300 text-sm font-bold">3</span>
                        </div>
                        <span className="text-slate-700 dark:text-slate-300">Built AI-driven tools accelerating sales decision cycles</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-primary-600 dark:text-primary-300 text-sm font-bold">4</span>
                        </div>
                        <span className="text-slate-700 dark:text-slate-300">Created training programs resulting in $2.66M average ARR growth</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Career Section */}
        <section id="professional" className="py-16 bg-slate-50 dark:bg-slate-950">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-primary-600" size={28} />
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Professional Career</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
                Key initiatives and achievements from my career in sales leadership, operations, and team development across the last decade.
              </p>
              <ProfessionalProjectsTable projects={professionalProjects} />
            </div>
          </div>
        </section>

        {/* Tech Projects Section */}
        <section id="tech" className="py-16 bg-white dark:bg-slate-900">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-secondary-600" size={28} />
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Tech Projects</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
                Personal technology projects and side work exploring web development, automation,<br />
                AI-driven tools, and enterprise-scale systems. Separate from my professional career.
              </p>
              
              {/* Featured Project Card */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Featured Project</span>
                  </div>
                  <h3 className="text-2xl font-bold">Going Deep with Morgan</h3>
                  <p className="text-white/90 mt-2">A personal introspection project featuring a card-based conversation game</p>
                </div>
                <div className="p-6">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Designed to facilitate deeper connections and self-reflection through meaningful interactions.<br />
                    Built with a focus on user experience and thoughtful interaction design.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['JavaScript', 'HTML/CSS', 'UX Design', 'Interactive Media'].map((tech) => (
                      <span key={tech} className="text-xs bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href="https://going-deep.tmcb.tech/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    Visit Project
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
              
              <TechProjectsTable projects={techProjects} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Mail size={32} />
                <h2 className="text-3xl font-bold">Let's Connect</h2>
              </div>
              <p className="text-xl text-white/90 mb-8">
                Interested in discussing opportunities or want to learn more about my work?<br />
                I'd love to hear from you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:MorganAmbrose@proton.me"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-all"
                >
                  <Mail size={20} />
                  Send Email
                </a>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-white/70">
                  Morgan Ambrose Naranjo • Corporate Sales Manager
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Morgan Ambrose Naranjo. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#professional" className="hover:text-white transition-colors">Professional</a>
              <a href="#tech" className="hover:text-white transition-colors">Tech</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}