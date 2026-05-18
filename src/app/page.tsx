"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function KREWEXLandingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-[#001C5D] selection:bg-[#00CFFF] selection:text-[#001C5D]">
      
      {/* Navigation Bar */}
      <nav className="fixed w-full top-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="KREWEX Logo" 
              width={400} 
              height={100} 
              className="w-40 sm:w-52 h-auto object-contain scale-[1.1] origin-left"
              priority 
            />
          </div>
          <a 
            href="#waitlist-form" 
            className="bg-[#00CFFF] hover:bg-[#00b8e6] text-[#001C5D] px-6 py-2.5 rounded-md font-semibold text-sm transition-colors duration-200"
          >
            Request Access
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <section className="py-20 lg:py-28 flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-[#001C5D] leading-[1.1] mb-8">
            The Centralized Infrastructure for Global Human Capital.
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed">
            KREWEX is the master data exchange connecting verified human capital with the world's most critical mega-projects. Private Beta access now live.
          </p>
          
          {isSubmitted ? (
            <div className="w-full max-w-md bg-[#00CFFF]/10 border border-[#00CFFF]/30 text-[#001C5D] px-6 py-4 rounded-md text-center shadow-sm">
              <p className="font-semibold text-lg mb-1">You're on the list.</p>
              <p className="text-sm text-[#001C5D]/80">We'll notify you when Beta access opens.</p>
            </div>
          ) : (
            <form 
              id="waitlist-form" 
              className="w-full max-w-md flex flex-col sm:flex-row gap-3 scroll-mt-32"
              onSubmit={(e) => {
                e.preventDefault();
                setIsSubmitted(true);
              }}
            >
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="flex-1 px-4 py-3.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#00CFFF] focus:border-transparent bg-white text-slate-900 placeholder:text-slate-400 shadow-sm transition-shadow"
                required
              />
              <button 
                type="submit" 
                className="bg-[#00CFFF] hover:bg-[#00b8e6] text-[#001C5D] px-8 py-3.5 rounded-md font-semibold transition-all duration-200 shadow-[0_0_15px_rgba(0,207,255,0.3)] hover:shadow-[0_0_25px_rgba(0,207,255,0.5)] whitespace-nowrap"
              >
                Join the Waitlist
              </button>
            </form>
          )}
          <p className="mt-5 text-xs font-medium text-slate-500 uppercase tracking-widest">
            Institutional-Grade Logistics
          </p>
        </section>

        {/* The Infrastructure Grid */}
        <section className="py-20 border-t border-slate-200 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Column 1 */}
            <div className="flex flex-col">
              <div className="h-1.5 w-12 bg-[#00CFFF] mb-6 rounded-full"></div>
              <h3 className="text-xl font-bold text-[#001C5D] mb-4">Borderless Scale</h3>
              <p className="text-slate-600 leading-relaxed">
                Routing verified heavy-industry talent from global supply nodes directly to mega-contractors.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col">
              <div className="h-1.5 w-12 bg-[#00CFFF] mb-6 rounded-full"></div>
              <h3 className="text-xl font-bold text-[#001C5D] mb-4">Frictionless Deployment</h3>
              <p className="text-slate-600 leading-relaxed">
                Bypassing fragmented sub-agent networks with centralized data matching.
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col">
              <div className="h-1.5 w-12 bg-[#00CFFF] mb-6 rounded-full"></div>
              <h3 className="text-xl font-bold text-[#001C5D] mb-4">Unshakeable Compliance</h3>
              <p className="text-slate-600 leading-relaxed">
                Executing volume mobilization with absolute legal and skill verification.
              </p>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © 2026 KREWEX. The Global Workforce Logistics Grid.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/company/krewexco" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#001C5D] transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://x.com/KREWEXC0" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#001C5D] transition-colors" aria-label="X (Twitter)">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://facebook.com/krewexco" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#001C5D] transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://instagram.com/krewexco" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#001C5D] transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
