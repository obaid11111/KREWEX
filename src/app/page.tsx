"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import KrewexFooter from '@/components/KrewexFooter';

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

      {/* Corporate Group Footer */}
      <KrewexFooter />
    </div>
  );
}
