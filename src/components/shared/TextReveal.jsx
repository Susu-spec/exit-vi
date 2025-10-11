import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export const TextRevealLines = ({ 
  children, 
  staggerDelay = 0.1,
  duration = 0.8,
  className = "",
  trigger = null,
}) => {
  const ref = useRef(null);
  const autoInView = useInView(ref, { once: true, margin: "-100px" });
  const isInView = trigger !== null ? trigger : autoInView;
  
  const lines = React.Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {lines.map((line, index) => (
        <div key={index} style={{ overflow: 'hidden' }}>
          <motion.div
            initial={{ y: '100%' }}
            animate={isInView ? { y: 0 } : { y: '100%' }}
            transition={{
              duration,
              delay: index * staggerDelay,
              ease: [0.33, 1, 0.68, 1]
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
};
