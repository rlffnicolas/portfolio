import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Photo from "../assets/images/portrait.jpg";

const AnimatedImage = () => {
    const angle = useMotionValue(360);
  const right = useMotionValue('-10%'); // Initialize with a percentage value
  const opacity = useMotionValue(0); // Initialize with 0 opacity

  const angleTransform = useTransform(angle, value => `${value}deg`);
  const rightTransform = useTransform(right, value => `${value}`);
  const opacityTransform = useTransform(opacity, value => value);

  useEffect(() => {
    animate(angle, 100, { duration: 2 });
    animate(right, '0%', { duration: 1 });
    animate(opacity, 1, { duration: 3 }); // Animate to full opacity
  }, [angle, right, opacity]);
  

  return (
    <motion.img
      style={{
        position: 'fixed',
        '--angle': angleTransform,
        '--border': '0.5px',
        '--gap': '4px',
        '--color': '#fff',
        right: rightTransform, 
        opacity: opacityTransform,
        width: '200px',
        height: 'fit-content',
        boxSizing: 'border-box',
        borderRadius: '0',
        margin: '20px',
        cursor: 'pointer',
        padding: 'calc(var(--border) + var(--gap))',
        background: `
          radial-gradient(farthest-side, var(--color) 97%, #0000 101%) 85.35% 85.35%,
          conic-gradient(from calc(270deg - var(--angle)/2), #0000 var(--angle), var(--color) 0),
          radial-gradient(farthest-side, var(--color) 97%, #0000 101%) 14.65% 85.35%
        `,
        backgroundSize: 'var(--border) var(--border), auto',
        backgroundRepeat: 'no-repeat',
        
        transition: '--angle .4s, --gap .4s'
      }}
      src={Photo} />
  );
};

export default AnimatedImage;
