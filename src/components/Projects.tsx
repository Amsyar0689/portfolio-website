import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Star, Filter, Search, TrendingUp, Brain, BarChart3, Shield, MessageSquare, Banknote, Globe, Youtube } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'Macroeconomic Sector Performance Analysis',
      description: 'Architected an ETL pipeline with 20+ years of economic data and implemented SARIMA time-series forecasting for predictive asset allocation, achieving 15x cumulative growth vs 8x benchmark.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: TrendingUp,
      technologies: ['Python', 'SARIMA', 'ETL Pipeline', 'Time Series', 'Backtesting'],
      metrics: ['15x Cumulative Growth', '8x Benchmark Beat', '-0.60 Tech Correlation', '20+ Years Data'],
      features: [
        'ETL pipeline for 20+ years economic data',
        'SARIMA time-series inflation forecasting',
        'Regime analysis for market efficiency testing',
        'Macro-Rotation strategy with dynamic rebalancing'
      ],
      githubUrl: 'https://github.com/Amsyar0689/macroecon-sector-analysis',
      category: 'Reinforcement Learning',
      highlight: '15x Growth vs 8x Benchmark'
    },
    {
      title: 'Crypto Sentiment and Volatility Analysis',
      description: 'Built a Python sentiment analysis pipeline processing 200K+ social media texts with VADER, creating a "Crowd Fear Index" and conducting Granger Causality tests to validate market efficiency.',
      image: 'https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Brain,
      technologies: ['Python', 'VADER', 'Granger Causality', 'NLP', 'Statistical Analysis'],
      metrics: ['200K+ Texts Processed', 'Daily Fear Index', 'Multi-Cycle Analysis', 'EMH Validation'],
      features: [
        'VADER sentiment analysis on 200K+ texts',
        'Daily "Crowd Fear Index" generation',
        'Granger Causality predictive testing',
        'Rolling correlation alpha decay models'
      ],
      githubUrl: 'https://github.com/Amsyar0689/crypto-sentiment-causality-analysis',
      category: 'Data Science',
      highlight: '200K+ Social Media Analysis'
    },
    {
      title: 'Autonomous Portfolio Rebalancing Agent',
      description: 'Engineered a PPO-based RL agent using Stable Baselines3 for autonomous portfolio rebalancing, achieving 1.62 Sharpe Ratio with intelligent regime detection and 11% alpha generation.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: BarChart3,
      technologies: ['Python', 'PPO', 'Stable Baselines3', 'Reinforcement Learning', 'Portfolio Theory'],
      metrics: ['1.62 Sharpe Ratio', '11% Relative Alpha', '40-60% Rotation', 'Autonomous Detection'],
      features: [
        'PPO-based reinforcement learning agent',
        'Autonomous volatility regime detection',
        'Dynamic 40-60% capital rotation strategy',
        '11% outperformance on unseen test data'
      ],
      githubUrl: 'https://github.com/Amsyar0689/rl-portfolio-optimization',
      category: 'Machine Learning',
      highlight: '1.62 Sharpe Ratio Achievement'
    },
    {
      title: 'Credit Risk Scoring Engine',
      description: 'Developed a LightGBM credit risk model with SHAP explainability, achieving 0.76 AUC and identifying high-risk segments with 21x higher default rates through advanced feature engineering.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Shield,
      technologies: ['Python', 'LightGBM', 'SHAP', 'SQL', 'Risk Analytics'],
      metrics: ['0.76 AUC Score', '21x Risk Differential', '27.9% vs 1.3%', 'Regulatory Compliant'],
      features: [
        'Complex SQL-style feature engineering',
        'SHAP explainable AI implementation',
        'LightGBM model with 0.76 AUC',
        'Risk decile calibration and segmentation'
      ],
      githubUrl: 'https://github.com/Amsyar0689/credit-risk-scoring',
      category: 'Data Science',
      highlight: '21x Risk Detection Accuracy'
    },
    {
      title: 'Financial Insights Chatbot',
      description: 'Built a full-stack RAG application with FastAPI and Gemini API, featuring real-time token streaming and PDF citation viewer for 80+ page 10-K report analysis with ChromaDB vectorization.',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: MessageSquare,
      technologies: ['FastAPI', 'Gemini API', 'LangChain', 'ChromaDB', 'RAG'],
      metrics: ['80+ Page Reports', '100% Data Integrity', 'Real-time Streaming', 'Custom Backoff'],
      features: [
        'FastAPI + Gemini API integration',
        'Real-time token streaming interface',
        'Interactive PDF citation viewer',
        'ChromaDB vectorization with rate limiting'
      ],
      githubUrl: 'https://github.com/Amsyar0689/financial-rag-chat',
      category: 'AI/LLM',
      highlight: 'Real-time 10-K Analysis'
    },
    {
      title: 'Bank Transaction Categorization',
      description: 'Developed a Random Forest model for 250K+ bank transactions using TF-IDF vectorization and comprehensive feature engineering, achieving 80% accuracy with K-Fold Cross Validation.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Banknote,
      technologies: ['Python', 'Random Forest', 'TF-IDF', 'Scikit-learn', 'Feature Engineering'],
      metrics: ['250K+ Transactions', '80% Accuracy', 'K-Fold Validation', 'Multi-class Classification'],
      features: [
        'Random Forest classification pipeline',
        'TF-IDF vectorization for text features',
        'One-Hot Encoding and StandardScaler',
        'K-Fold Cross Validation with performance metrics'
      ],
      githubUrl: 'https://github.com/Amsyar0689/bank_transaction_categorization',
      category: 'Data Analysis',
      highlight: '250K+ Transaction Processing'
    },
    {
      title: 'Currency Converter with AI',
      description: 'Built a React dashboard with Firebase integration featuring personalized watchlists and client-side NLP engine, reducing latency by 80% and API load by 40% through intelligent caching.',
      image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Globe,
      technologies: ['React', 'Firebase', 'NLP', 'REST API', 'Caching'],
      metrics: ['80% Latency Reduction', '40% API Load Cut', 'Top 10 Currencies', 'Real-time Tracking'],
      features: [
        'Firebase Auth and Firestore integration',
        'Personalized currency watchlists',
        'Client-side NLP engine optimization',
        'Custom caching for API efficiency'
      ],
      githubUrl: 'https://cs571-f25.github.io/p71/#/',
      category: 'Web Application',
      highlight: '80% Performance Boost'
    },
    {
      title: 'YouTube Archetypes Analysis',
      description: 'Conducted ML analysis on Global YouTube Statistics using K-Means clustering (0.75 Silhouette Score) to identify 3 creator archetypes and quantify revenue drivers with Random Forest modeling.',
      image: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Youtube,
      technologies: ['Python', 'K-Means', 'Random Forest', 'DBSCAN', 'Feature Engineering'],
      metrics: ['0.75 Silhouette Score', '3 Creator Archetypes', 'Revenue Optimization', 'Market Segmentation'],
      features: [
        'Iterative Imputation for data quality',
        'K-Means clustering with validation',
        'DBSCAN comparison for model confirmation',
        'Revenue driver quantification analysis'
      ],
      githubUrl: 'https://github.com/Amsyar0689/youtube-archetype-analysis',
      category: 'Data Analysis',
      highlight: '3 Strategic Creator Archetypes'
    },
    {
      title: 'Portfolio Website',
      description: 'Built a React website to showcase background information and projects, as well as connect with people through Formspree integration.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Globe,
      technologies: ['React.js', 'Tailwind CSS', 'HTML', 'Typescript', 'Formspree'],
      metrics: ['Advanced Animations', 'Responsive Design', 'Performance Optimized', 'Production Ready'],
      features: [
        'Formspree contact handling',
        'Fast loading, efficient rendering',
        'SEO Optimized - Meta tags, semantic HTML',
        'Vercel Deployment - Production Ready'
      ],
      githubUrl: 'https://muhammadamsyarluqman-mdhanif.vercel.app/',
      category: 'Web Application',
      highlight: 'Portfolio Website'
    },
  ];

  const categories = ['All', 'Data Analysis', 'Machine Learning', 'Reinforcement Learning', 'AI/LLM', 'Web Application', 'Data Science'];

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

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      'Data Analysis': 'bg-emerald-100 text-emerald-700',
      'Machine Learning': 'bg-blue-100 text-blue-700',
      'Reinforcement Learning': 'bg-purple-100 text-purple-700',
      'AI/LLM': 'bg-amber-100 text-amber-700',
      'Web Application': 'bg-rose-100 text-rose-700',
      'Data Science': 'bg-indigo-100 text-indigo-700',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A showcase of my work in finance, machine learning, and data science solutions.
          </p>

          {/* Search and Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            {/* Search */}
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 w-64"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center">
              <Filter size={18} className="mr-2 text-gray-500" />
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-emerald-100 hover:text-emerald-600'
                }`}
              >
                {category}
                {category !== 'All' && (
                  <span className="ml-2 text-xs opacity-75">
                    {projects.filter(p => p.category === category).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>

                {/* Project Icon */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 bg-white/90 rounded-lg">
                    <project.icon size={24} className="text-emerald-600" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>

                {/* Highlight Metric */}
                <div className="mb-3">
                  <span className="inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                    {project.highlight}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                {/* Key Metrics - Show on hover */}
                <div className={`mb-4 transition-all duration-300 ${
                  hoveredProject === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">Key Metrics:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-xs text-gray-600 flex items-center">
                        <span className="text-emerald-500 mr-1">•</span>
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium hover:bg-emerald-100 hover:text-emerald-700 transition-all duration-200 transform hover:scale-105"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-200 text-gray-500 text-xs rounded-full font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:border-emerald-600 hover:text-emerald-600 transition-all duration-200 flex items-center justify-center group transform hover:scale-105"
                  >
                    <Github size={16} className="mr-2 group-hover:rotate-12 transition-transform duration-200" />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('All');
              }}
              className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;