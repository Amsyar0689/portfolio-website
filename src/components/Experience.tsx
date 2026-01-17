import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  const experiences = [
    {
      company: 'Maxis Communications',
      position: 'Software Engineering (AI Search Optimization) Intern',
      period: 'May 2025 - Aug 2025',
      location: 'Kuala Lumpur, MYS',
      description: 'Developed and optimized AI-driven search algorithms to enhance user experience and search accuracy for Maxis\'s digital platforms.',
      achievements: [
        'Built an interactive reporting dashboard for the Customer Service Chatbot using React, analyzing usage patterns and response accuracy across 900 agents',
        'Developed AWS Lambda functions to automate serverless updates in the internal management system, improving efficiency, scalability, and reducing overhead',
        'Explored Retrieval-Augmented Generation use cases to enhance chatbot retrieval accuracy, benchmarking Knowledge Graph vs. Vector Search',
      ],
      technologies: ['React', 'TypeScript', 'Azure ElasticSearch', 'AWS', 'PostgreSQL'],
      color: 'emerald'
    },
    {
      company: 'Wisconsin Union',
      position: 'Event Setup Student Supervisor',
      period: '2023 - Present',
      location: 'Madison, WI',
      description: 'Assisted project leads in coordinating and executing high-profile university events by supervising new recruits and ensuring smooth event operations.',
      achievements: [
        'Supervised setup and breakdown for 50+ events per semester, ensuring timely execution',
        'Developed training materials for new recruits, improving onboarding efficiency',
        'Streamlined event logistics processes, reducing setup time',
      ],
      technologies: ['Microsoft Office', 'AV Systems', 'Lighting Systems'],
      color: 'blue'
    },
    {
      company: 'Malaysian Student Association (MySA)',
      position: 'Logistics Assistant',
      period: '2024 - 2025',
      location: 'Madison, WI',
      description: '•	Managed club inventory records and logistics to ensure efficient resource allocation and seamless execution of events.',
      achievements: [
        'Built and maintained comprehensive inventory management system',
        'Coordinated logistics for 10+ events, ensuring timely setup and breakdown',
        'Consulted with vendors to secure necessary equipment and supplies',
      ],
      technologies: ['Microsoft Office', 'AV Systems', 'Canva'],
      color: 'purple'
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
    const colors = {
      emerald: 'bg-emerald-600 border-emerald-200',
      blue: 'bg-blue-600 border-blue-200',
      purple: 'bg-purple-600 border-purple-200',
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  const getTechColorClasses = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-100 text-emerald-700',
      blue: 'bg-blue-100 text-blue-700',
      purple: 'bg-purple-100 text-purple-700',
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in the working industry uncovering insights from data and building intelligent solutions through machine learning,
            as well as my contributions to various organizations and projects.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 via-blue-200 to-purple-200 transform md:-translate-x-0.5"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} flex flex-col md:flex-row items-center`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-1/2 w-6 h-6 rounded-full transform -translate-x-3 md:-translate-x-3 z-10 border-4 border-white shadow-lg ${getColorClasses(exp.color)}`}>
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
                        <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-emerald-600 transition-colors">
                          {exp.position}
                        </h3>
                        <h4 className="text-lg font-semibold text-emerald-600 mb-2">{exp.company}</h4>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {expandedCard === index ? 
                          <ChevronUp size={20} className="text-gray-400 group-hover:text-emerald-600 transition-colors" /> :
                          <ChevronDown size={20} className="text-gray-400 group-hover:text-emerald-600 transition-colors" />
                        }
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{exp.description}</p>

                    {/* Expandable Content */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="mb-4 pt-2">
                        <h5 className="font-semibold text-slate-800 mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li 
                              key={achIndex} 
                              className="text-sm text-gray-600 flex items-start transform transition-all duration-300"
                              style={{ 
                                animationDelay: `${achIndex * 100}ms`,
                                transform: expandedCard === index ? 'translateX(0)' : 'translateX(-20px)'
                              }}
                            >
                              <span className="text-emerald-500 mr-2 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-xs rounded-full font-medium transition-all duration-200 hover:scale-105 ${getTechColorClasses(exp.color)}`}
                          style={{ animationDelay: `${techIndex * 50}ms` }}
                        >
                          {tech}
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

export default Experience;