```jsx
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { cn } from '../../utils';

const GradientButton = React.forwardRef(
  (
    {
      children,
      className = '',
      from = '#22d3ee',
      via = '#818cf8',
      to = '#c084fc',
      animate = true,
      disabled = false,
      type = 'button',
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        type={type}
        whileTap={disabled ? undefined : { scale: 0.97 }}
        style={{
          background: `linear-gradient(120deg, ${from}, ${via}, ${to})`,
          backgroundSize: '200% 200%',
        }}
        animate={
          animate && !disabled
            ? { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%',] }
            : undefined
        }
        transition={{ duration: 6, ease: 'linear', repeat: Infinity, }}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        disabled={disabled}
        className={cn(
          'rounded-full px-7 py-3 text-sm font-semibold text-white shadow-lg transition-shadow hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          disabled && 'cursor-not-allowed opacity-60',
          className,
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

GradientButton.displayName = 'GradientButton';

GradientButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  from: PropTypes.string,
  via: PropTypes.string,
  to: PropTypes.string,
  animate: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  'aria-label': PropTypes.string,
};

export default GradientButton;
```