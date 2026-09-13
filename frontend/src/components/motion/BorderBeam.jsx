```jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function BorderBeam({
  children,
  className = '',
  color = 'from-cyan-500 to-violet-500',
  speed = 3,
  ...props
}) {
  return (
    <div className={`relative ${className}`} {...props}>
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          border: '2px solid transparent',
          // The `color` prop is expected to be a string like 'from-cyan-500 to-violet-500',
          // which directly forms the gradient.
          background: `linear-gradient(90deg, ${color}) border-box`,
          WebkitMask: 'linear-gradient(#fff, #fff) padding-box, linear-gradient(#fff, #fff)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
        animate={{ backgroundPosition: ['0%', '200%', '0%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      />
      <div className="relative z-10 h-full rounded-2xl bg-slate-950/80 p-6 backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}
```