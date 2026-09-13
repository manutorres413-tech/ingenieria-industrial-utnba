import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SteppedStudyPlan from './components/SteppedStudyPlan';
import CareerProfile from './components/CareerProfile';
import CareerQuiz from './components/CareerQuiz';
import WhyUTN from './components/WhyUTN';
import AdmissionSection from './components/AdmissionSection';
import CampusLocations from './components/CampusLocations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F6F8]">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <SteppedStudyPlan />
        <CareerProfile />
        <CareerQuiz />
        <WhyUTN />
        <AdmissionSection />
        <CampusLocations />
      </main>

      <Footer />
    </div>
  );
}

export default App;
