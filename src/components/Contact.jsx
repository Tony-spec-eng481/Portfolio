import React, { useState } from 'react';
import Button from './Button';
import SocialIcon from './SocialIcon';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { validateEmail, validateName, validateMessage } from '../utils/validation';
import '../styles/Contact.css';

const Contact = () => {
  const contactRef = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!validateName(formData.name)) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!validateMessage(formData.message)) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const socialLinks = [
    { platform: 'GitHub', url: 'https://github.com/johnwarui', icon: 'github' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/johnwarui', icon: 'linkedin' },
    { platform: 'Twitter', url: 'https://twitter.com/johnwarui', icon: 'twitter' },
    { platform: 'Email', url: 'mailto:john@warui.dev', icon: 'email' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title" ref={contactRef}>Get In Touch</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's work together</h3>
            <p className="contact-description">
              I'm currently available for freelance work and full-time opportunities. 
              Whether you have a project in mind or just want to say hi, I'll get back to you as soon as possible!
            </p>
            
            <div className="social-links">
              {socialLinks.map((social) => (
                <SocialIcon
                  key={social.platform}
                  platform={social.platform}
                  url={social.url}
                  icon={social.icon}
                />
              ))}
            </div>
          </div>
          
          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="success-message animate-slide-in">
                <span className="success-icon">✓</span>
                <h4>Message Sent!</h4>
                <p>Thank you for reaching out. I'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    placeholder="Tell me about your project..."
                    rows="5"
                  />
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                
                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;