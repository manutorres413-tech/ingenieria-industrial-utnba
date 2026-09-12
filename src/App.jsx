import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SteppedStudyPlan from './components/SteppedStudyPlan';
import CareerProfile from './components/CareerProfile';
import WhyUTN from './components/WhyUTN';
import AdmissionSection from './components/AdmissionSection';
import CampusLocations from './components/CampusLocations';
import Footer from './components/Footer';
import { BookOpen, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F6F8]">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <SteppedStudyPlan />
        <CareerProfile />
        <WhyUTN />
        <AdmissionSection />
        <CampusLocations />
      </main>

      <Footer />

      {/* Floating mobile quick access button (No-print) */}
      <div className="fixed bottom-4 right-4 z-40 sm:hidden no-print flex items-center space-x-2">
        <a
          href="#plan-estudios"
          className="bg-[#2F3336] text-white px-3.5 py-2.5 rounded-full shadow-lg text-xs font-bold flex items-center space-x-1.5 border border-white/20"
        >
          <BookOpen className="w-3.5 h-3.5 text-[#A31235]" />
          <span>Plan</span>
        </a>
        <a
          href="https://frba.utn.edu.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#A31235] text-white px-3.5 py-2.5 rounded-full shadow-lg text-xs font-bold flex items-center space-x-1.5"
        >
          <span>Web UTN</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

export default App;
