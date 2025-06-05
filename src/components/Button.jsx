import { forwardRef } from 'react';
import { Link } from 'react-router';

const Button = forwardRef(({ 
  children, 
  className = '', 
  variant = 'primary', 
  as = 'button',
  ...props 
}, ref) => {
  const baseClasses = 'inline-block font-bold rounded-lg transition-colors px-6 py-3 shadow';
  
  const variantClasses = {
    primary: 'bg-[#0040a2] text-white hover:bg-[#00307a]',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white',
  };

  const Component = as === 'link' ? Link : as;

  return (
    <Component
      ref={ref}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button; 