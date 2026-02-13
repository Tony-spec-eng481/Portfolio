import React from 'react';
import SocialIcon from '../SocialIcon';
import '../../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { platform: 'GitHub', url: 'https://github.com/johnwarui', icon: 'github' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/johnwarui', icon: 'linkedin' },
    { platform: 'Twitter', url: 'https://twitter.com/johnwarui', icon: 'twitter' },
    { platform: 'Email', url: 'mailto:john@warui.dev', icon: 'email' }
  ];

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <p className="footer-copyright">
            &copy; {currentYear} John Warui. All rights reserved.
          </p>
          
          <div className="footer-social">
            {socialLinks.map((social) => (
              <SocialIcon
                key={social.platform}
                platform={social.platform}
                url={social.url}
                icon={social.icon}
              />
            ))}
          </div>
          
          <p className="footer-made-with">
            Built with <span className="heart">❤️</span> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;