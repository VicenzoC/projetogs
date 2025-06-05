import { forwardRef } from 'react';

const Icon = forwardRef(({ 
  icon: IconComponent, 
  className = '', 
  size = 'md', 
  color = 'primary', 
  ...props 
}, ref) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-[#0040a2]',
    white: 'text-white',
    gray: 'text-gray-600'
  };

  return (
    <IconComponent
      ref={ref}
      className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      {...props}
    />
  );
});

Icon.displayName = 'Icon';

export default Icon; 