import React, { useEffect, useRef } from 'react';

const FloatingAstronaut: React.FC = () => {
  const astronautRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!astronautRef.current) return;

      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollY / maxScroll;

      // Float from top to bottom based on scroll
      const translateY = scrollProgress * 100;
      const rotate = scrollProgress * 360;

      astronautRef.current.style.transform = `translateY(${translateY}vh) rotate(${rotate}deg)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={astronautRef}
      className="fixed right-8 top-1/4 z-20 pointer-events-none transition-transform duration-500 ease-out"
      style={{
        fontSize: '4rem',
        textShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
        filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.7))'
      }}
    >
      🚀
    </div>
  );
};

export default FloatingAstronaut;