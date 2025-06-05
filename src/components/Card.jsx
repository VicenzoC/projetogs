import { forwardRef } from 'react';

const Card = forwardRef(({ 
  children, 
  className = '',
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card; 