import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(0); // Default expand the first one
  const sectionRef = useRef<HTMLElement>(null);

  const educationData = [
    {
      institution: 'University of Wisconsin-Madison',
      degree: 'B.S. Computer Science & Data Science',
      period: 'Spetember 2022 - May 2026',
      location: 'Madison, WI',
      description: 'Graduated with double major specializing in AI/ML systems and Data Analytics. Actively involved in student leadership and academic discussions.',
      achievements: [
        'Awards and Honors: Dean\'s List for Spring 2023, Fall 2025 semesters, Wisonsin Union May 2025 Employee of The Month',
        'Projects: Built multiple FinTech solutions including a RAG-based Financial Analyst Chatbot and Credit Risk Scoring Engine',
        'Leadership: Logistics Assistant for Malaysian Student Association (MySA) & Event Setup Student Supervisor at Wisconsin Union',
      ],
      coursework: ['Machine Learning', 'Database Management', 'Econometrics', 'Big Data Systems', 'Statistical Modelling'],
      color: 'rose'
    },
    {
      institution: 'INTEC Education College',
      degree: 'American Degree Transfer Program',
      period: 'August 2021 - July 2022',
      location: 'Shah Alam, Selangor',
      description: 'Graduated in the top 20% of the Class. Actively involved in student leadership and volunteering opportunities.',
      achievements: [
        'Awards and Honors: Academic Director Award for Spring 2022 and Summer 2022, Chief Executive Award for graduating in top 20% of Graduating Class. ',
        'Projects: Built multiple small program applications using C++ and Python GUI libraries.',
        'Leadership: Active Member of the MyVolunteer Club',
      ],
      coursework: ['Introduction to C++', 'Information Technology', 'Python GUI', 'Academic Writing', 'Public Speaking'],
      color: 'purple'
    },
    {
      institution: 'SMK Taman Universiti',
      degree: 'Sijil Pelajaran Malaysia (SPM)',
      period: 'January 2016 - March 2021',
      location: 'Johor Bahru, Johor',
      description: 'Enrolled in Science Stream with Additional Coursework in Accounting and Engineering, actively involved in club and society co-curriculum.',
      achievements: [
        'Awards and Honors: Best Student for SPM 2020 and PT3 2018, Honorable Mentions in National and International Robotic Competitions',
        'Projects: Club and Organizational Accounting, Architectural Plan Drawing, Modifying and testing Robot setups before competitions', 
        'Leadership: President of Computer Club, General Associate for the Fire Cadet, Secretary for the Softball Club',
      ],
      coursework: ['Financial Accounting', 'Architecural Drawing', 'Basics of Sustainability', 'Computing Challenges', 'Robotic Competitions'],
      color: 'blue'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      rose: 'bg-rose-600 border-rose-200',
      emerald: 'bg-emerald-600 border-emerald-200',
      blue: 'bg-blue-600 border-blue-200',
      purple: 'bg-purple-600 border-purple-200',
    };
    return colors[color] || colors.rose;
  };

  const getTagColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      rose: 'bg-rose-100 text-rose-700',
      emerald: 'bg-emerald-100 text-emerald-700',
      blue: 'bg-blue-100 text-blue-700',
      purple: 'bg-purple-100 text-purple-700',
    };
    return colors[color] || colors.rose;
  };

  return (
    <section ref={sectionRef} id="education" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic foundation and research pursuits that have shaped my technical expertise.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-200 via-slate-200 to-gray-200 transform md:-translate-x-0.5"></div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} flex flex-col md:flex-row items-center`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-1/2 w-6 h-6 rounded-full transform -translate-x-3 md:-translate-x-3 z-10 border-4 border-white shadow-lg ${getColorClasses(edu.color)}`}>
                  <div className="w-full h-full rounded-full animate-ping opacity-20 bg-current"></div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                  <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                    <div 
                      className="flex items-start justify-between mb-4"
                      onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                    >
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-green-600 transition-colors">
                          {edu.degree}
                        </h3>
                        <h4 className="text-lg font-semibold text-green-600 mb-2 flex items-center">
                            <GraduationCap size={18} className="mr-2" />
                            {edu.institution}
                        </h4>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-1" />
                            {edu.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {expandedCard === index ? 
                          <ChevronUp size={20} className="text-gray-400 group-hover:text-green-600 transition-colors" /> :
                          <ChevronDown size={20} className="text-gray-400 group-hover:text-green-600 transition-colors" />
                        }
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{edu.description}</p>

                    {/* Expandable Content */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="mb-4 pt-2">
                        <h5 className="font-semibold text-slate-800 mb-3 flex items-center">
                             <BookOpen size={16} className="mr-2 text-rose-500" />
                             Key Highlights & Research:
                        </h5>
                        <ul className="space-y-2">
                          {edu.achievements.map((item, i) => (
                            <li 
                              key={i} 
                              className="text-sm text-gray-600 flex items-start transform transition-all duration-300"
                              style={{ 
                                animationDelay: `${i * 100}ms`,
                                transform: expandedCard === index ? 'translateX(0)' : 'translateX(-20px)'
                              }}
                            >
                              <span className="text-rose-500 mr-2 mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Coursework / Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={course}
                          className={`px-3 py-1 text-xs rounded-full font-medium transition-all duration-200 hover:scale-105 ${getTagColorClasses(edu.color)}`}
                          style={{ animationDelay: `${i * 50}ms` }}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;