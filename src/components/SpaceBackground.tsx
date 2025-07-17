import React, { useEffect, useRef } from 'react';

const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Star particles
    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      speed: number;
    }> = [];

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        opacity: Math.random(),
        speed: Math.random() * 0.5 + 0.1
      });
    }

    // Meteors
    const meteors: Array<{
      x: number;
      y: number;
      speed: number;
      tail: Array<{ x: number; y: number; opacity: number }>;
    }> = [];

    // Create meteors
    for (let i = 0; i < 3; i++) {
      meteors.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 2 + 1,
        tail: []
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${star.opacity})`;
        ctx.fill();

        // Twinkling effect
        star.opacity += (Math.random() - 0.5) * 0.05;
        star.opacity = Math.max(0, Math.min(1, star.opacity));

        // Slow drift
        star.x += star.speed * 0.1;
        star.y += star.speed * 0.05;

        // Wrap around
        if (star.x > canvas.width) star.x = 0;
        if (star.y > canvas.height) star.y = 0;
      });

      // Draw meteors
      meteors.forEach(meteor => {
        // Add current position to tail
        meteor.tail.push({ x: meteor.x, y: meteor.y, opacity: 1 });
        
        // Limit tail length
        if (meteor.tail.length > 10) {
          meteor.tail.shift();
        }

        // Draw tail
        meteor.tail.forEach((point, index) => {
          const tailOpacity = point.opacity * (index / meteor.tail.length);
          ctx.beginPath();
          ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${tailOpacity})`;
          ctx.fill();
          
          // Fade tail
          point.opacity *= 0.95;
        });

        // Move meteor
        meteor.x += meteor.speed;
        meteor.y += meteor.speed * 0.5;

        // Reset meteor when it goes off screen
        if (meteor.x > canvas.width + 100 || meteor.y > canvas.height + 100) {
          meteor.x = -100;
          meteor.y = Math.random() * canvas.height;
          meteor.tail = [];
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)' }}
    />
  );
};

export default SpaceBackground;