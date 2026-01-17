import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xovneqzj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'muhammadamsyarluqman.mdhanif@gmail.com', href: 'mailto:muhammadamsyarluqman.mdhanif@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+1 (608) 960-1734', href: 'tel:+16089601734' },
    { icon: MapPin, label: 'Location', value: 'Madison, WI', href: 'https://www.wisc.edu/' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Amsyar0689', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammadamsyarluqmanbin-mdhanif', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/amsluq/', label: 'Instagram' },
  ];

  const inputFields = [
    { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'John', required: true },
    { name: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Doe', required: true },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com', required: true, fullWidth: true },
    { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Project Discussion', required: true, fullWidth: true },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 bg-emerald-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2000}ms`,
              animationDuration: '4s'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-emerald-600 rounded-lg flex items-center animate-pulse">
                <CheckCircle size={20} className="mr-3" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-600 rounded-lg flex items-center animate-pulse">
                <AlertCircle size={20} className="mr-3" />
                <span>Failed to send message. Please try again or contact me directly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inputFields.filter(field => !field.fullWidth).map((field) => (
                  <div key={field.name} className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      required={field.required}
                      className={`w-full px-4 py-3 bg-slate-700 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 ${focusedField === field.name
                          ? 'border-emerald-500 ring-2 ring-emerald-500/20 scale-105'
                          : 'border-slate-600 focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
                        }`}
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>

              {inputFields.filter(field => field.fullWidth).map((field) => (
                <div key={field.name} className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    required={field.required}
                    className={`w-full px-4 py-3 bg-slate-700 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 ${focusedField === field.name
                        ? 'border-emerald-500 ring-2 ring-emerald-500/20 scale-105'
                        : 'border-slate-600 focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
                      }`}
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div className="relative">
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-4 py-3 bg-slate-700 border rounded-lg text-white placeholder-gray-400 resize-none transition-all duration-300 ${focusedField === 'message'
                      ? 'border-emerald-500 ring-2 ring-emerald-500/20 scale-105'
                      : 'border-slate-600 focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
                    }`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader size={18} className="mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm currently available for new projects and always excited to discuss innovative ideas.
              Whether you have a project in mind or just want to connect, feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group flex items-center p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 bg-emerald-600 rounded-lg mr-4 group-hover:bg-emerald-500 transition-all duration-200 group-hover:rotate-12">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <div className="font-medium group-hover:text-emerald-400 transition-colors">{info.label}</div>
                    <div className="text-gray-300">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-slate-700 rounded-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                    style={{ animationDelay: `${index * 100}ms` }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="group-hover:scale-110 transition-transform duration-200" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-16 pt-8 border-t border-slate-700 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400">
            © 2026 Amsyar Md Hanif. Built with React & Tailwind CSS. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;