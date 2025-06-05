import { forwardRef } from 'react';

const Container = forwardRef(({ 
  children, 
  className = '', 
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={`mx-auto px-4 max-w-7xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Container.displayName = 'Container';

export default Container; 