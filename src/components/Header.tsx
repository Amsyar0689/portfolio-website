import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = scrollPosition + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-slate-800' : 'text-white'
          }`}>
            Portfolio
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-all duration-200 group ${
                  activeSection === item.id
                    ? 'text-emerald-600'
                    : isScrolled 
                      ? 'text-gray-600 hover:text-emerald-600' 
                      : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 transform transition-transform duration-200 ${
                  activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-200 ${
              isScrolled 
                ? 'hover:bg-gray-100 text-slate-800' 
                : 'hover:bg-white/10 text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute transition-all duration-200 ${
                  isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`} 
              />
              <X 
                size={24} 
                className={`absolute transition-all duration-200 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 rounded-b-lg mx-4 mb-4">
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform ${
                    activeSection === item.id
                      ? 'text-emerald-600 bg-emerald-50 scale-105'
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50 hover:scale-105'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;