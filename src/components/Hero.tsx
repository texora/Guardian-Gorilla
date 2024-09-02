'use client';

import React, { useEffect } from 'react';
import Image from 'next/image'; 

const Hero: React.FC = () => {
  useEffect(() => {
    const heroImage = document.querySelector('.hero') as HTMLElement;
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const speed = 0.5;
      const yPos = -(scrollY * speed);
      heroImage.style.backgroundPosition = `center ${yPos}px`;
      lastScrollY = scrollY;
    });

    const heroContent = document.querySelector('.hero-content') as HTMLElement;
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    setTimeout(() => {
      heroContent.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 300);
  }, []);

  return (
    <section id="home" className="hero h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/img/ACOM-Guardian_Gorilla-AT-GATE-02.jpg')" }}>
      <div className="hero-content text-center z-20">
        <h1 className="text-6xl mb-5 text-white font-bold shadow-lg animate-fadeInUp">Guardian Gorilla</h1>
        <p className="text-xl mb-8 text-white shadow-md animate-fadeInUp">Protector of the ACOMUnity DAO</p>
        <a href="#about" className="cta-button inline-block py-3 px-6 bg-green-600 text-white font-bold rounded-lg transition-all hover:bg-green-700 hover:transform hover:translate-y-[-3px] shadow-md animate-fadeInUp">Discover My Mission</a>
      </div>
      <Image 
        src="/img/ACOM-Guardian_Gorilla-AT-GATE-05.jpg" 
        alt="Futuristic gorilla with digital armor and visor"
        className="floating-image absolute top-1/2 right-[-150px] transform translate-y-[-50%] w-72 h-auto animate-floatLeftRight"
        width={300}
        height={200}
      />
    </section>
  );
};

export default Hero;
