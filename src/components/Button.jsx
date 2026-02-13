import React from 'react';
import '../styles/Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseClass = `btn btn-${variant} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={baseClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;