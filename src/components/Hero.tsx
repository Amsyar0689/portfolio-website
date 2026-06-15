import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'SWE Intern @ Maxis',
    'AISO Intern @ Maxis',
  ];

  useEffect(() => {
    setIsVisible(true);
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Amsyar0689', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammadamsyarluqmanbin-mdhanif/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:muhammadamsyarluqman.mdhanif@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse`}
            style={{
              background: ['bg-emerald-400', 'bg-amber-400', 'bg-blue-400'][i],
              top: `${20 + i * 20}%`,
              left: `${20 + i * 30}%`,
              animationDelay: `${i * 1000}ms`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-800 mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Amsyar Md Hanif
              </span>
            </h1>

            <div className="h-16 mb-6">
              <p className="text-xl sm:text-2xl text-gray-600 transition-all duration-500">
                <span className="inline-block animate-pulse">
                  {roles[currentRole]}
                </span>
                {' | B.S. in Computer Science & Data Science @ UW-Madison'}
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-start text-gray-500 mb-8">
              <MapPin size={18} className="mr-2 animate-bounce" />
              <span>Madison, WI</span>
            </div>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
              I turn data into meaningful stories using machine learning and analytics.
              Passionate about building intelligent systems that drive impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="group-hover:mr-2 transition-all duration-200">View My Work</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 justify-center lg:justify-start">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : '_self'}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 hover:text-emerald-600 transform hover:scale-110"
                  style={{ animationDelay: `${index * 100}ms` }}
                  aria-label={label}
                >
                  <Icon size={20} className="group-hover:rotate-12 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              <div className="w-80 h-80 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full p-1 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src="/images/new-profile.jpg"
                    alt="Picture of Amsyar Md Hanif"
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToNext}>
          <ChevronDown size={32} className="text-gray-400 hover:text-emerald-600 transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default Hero;