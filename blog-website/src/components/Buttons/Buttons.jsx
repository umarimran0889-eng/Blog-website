import React from 'react';
import './Button.css'; 

export default function Button({ 
  children, 
  onClick, 
  variant = 'save', 
  type = 'button', 
  disabled = false,
  className = '', 
  style = {},
  ...props 
}) {
  
  const variantClasses = {
    submit: 'custom-variant-submit',
    save: 'custom-variant-save',
    cancel: 'custom-variant-cancel',
    danger: 'custom-variant-danger'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={`custom-btn ${variantClasses[variant] || ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}