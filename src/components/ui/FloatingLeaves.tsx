
import { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

const FloatingLeaves = () => {
  const [leaves, setLeaves] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  useEffect(() => {
    const createLeaf = () => {
      const id = Date.now();
      const startPositionX = Math.random() * window.innerWidth;
      
      const style: React.CSSProperties = {
        position: 'fixed',
        left: `${startPositionX}px`,
        top: '-50px',
        animation: `float ${Math.random() * 5 + 10}s linear infinite`,
        color: '#33B249',
        opacity: Math.random() * 0.5 + 0.3,
        transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`,
        zIndex: 0,
      };

      setLeaves(prev => [...prev.slice(-15), { id, style }]);
    };

    const interval = setInterval(createLeaf, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0) rotate(0deg);
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
            }
          }
        `}
      </style>
      {leaves.map(leaf => (
        <Leaf
          key={leaf.id}
          style={leaf.style}
          size={24}
        />
      ))}
    </>
  );
};

export default FloatingLeaves;
