import React, { useState, useEffect, useRef } from 'react';
import { Database, Brain, BarChart, Repeat } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { category: 'Programming Languages', items: ['Python', 'Java', 'R', 'SQL', 'JavaScript', 'HTML/CSS', 'Bash'] },
    { category: 'Frameworks and Libraries', items: ['FastAPI', 'LangChain', 'Scikit-Learn', 'XGBoost', 'Spark', 'Kafka', 'REST API'] },
    { category: 'Cloud Databases', items: ['AWS', 'Render', 'Docker', 'PostgreSQL', 'MongoDB', 'Snowflake', 'ChromaDB'] },
    { category: 'Tools', items: ['Git', 'Tableau', 'Plotly', 'AirByte', 'ElasticSearch', 'Emacs', 'LaTeX', 'DBeaver', 'Postman'] },
    { category: 'Certifications', items: ['Google Data Analytics Professional Certificate'] },
  ];

  const highlights = [
    {
      icon: Database,
      title: 'Data-Driven',
      description: 'Transforming raw data into actionable insights with robust analysis and visualization.',
      delay: '0ms'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Building and deploying predictive models that solve real-world problems efficiently.',
      delay: '100ms'
    },
    {
      icon: BarChart,
      title: 'Analytics & Metrics',
      description: 'Designing experiments, defining KPIs, and interpreting complex data to guide strategy.',
      delay: '200ms'
    },
    {
      icon: Repeat,
      title: 'Automation',
      description: 'Creating scalable pipelines for data ingestion, model training, and reporting.',
      delay: '300ms'
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkillCategory((prev) => (prev + 1) % skills.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200',
      blue: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
      purple: 'bg-purple-100 text-purple-700 hover:bg-purple-200',
      amber: 'bg-amber-100 text-amber-700 hover:bg-amber-200',
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate data enthusiast who thrives on turning data into meaningful insights and intelligent solutions.
            As a senior majoring in Data Science and Computer Science, I specialize in building machine learning models
            and data-driven applications that solve real-world problems and drive impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Started exploring data during college and quickly became fascinated by the stories hidden in numbers.
                What began as curiosity about statistics and algorithms evolved into a deep passion for solving problems with data.
              </p>
              <p>
                Throughout my academic journey, I’ve worked on research projects and internships where I applied machine learning to real-world challenges—from
                predictive modeling to Neural Network.
                I believe that great data science isn’t just about models—it’s about building insightful, ethical, and scalable solutions that truly make an impact.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing
                to extended course projects, or travelling to wherever the next adventure takes me.
              </p>
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: highlight.delay }}
              >
                <div className="p-3 bg-emerald-100 rounded-lg w-fit mb-4 group-hover:bg-emerald-200 transition-colors duration-200">
                  <highlight.icon size={24} className="text-emerald-600 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                  {highlight.title}
                </h4>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Skills Section */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Skills & Technologies</h3>
          
          {/* Skill Category Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-100 rounded-full p-1">
              {skills.map((skillGroup, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSkillCategory(index)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSkillCategory === index
                      ? 'bg-white text-emerald-600 shadow-md'
                      : 'text-gray-600 hover:text-emerald-600'
                  }`}
                >
                  {skillGroup.category}
                </button>
              ))}
            </div>
          </div>

          {/* Active Skills Display */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-3 min-h-[120px] items-center">
              {skills[activeSkillCategory].items.map((skill, skillIndex) => (
                <div
                  key={skill}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 transform hover:scale-105 cursor-default ${getColorClasses(skills[activeSkillCategory].color)}`}
                  style={{
                    animationDelay: `${skillIndex * 100}ms`,
                    opacity: 0,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default About;