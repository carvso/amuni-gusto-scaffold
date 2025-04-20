
import { useEffect, useState } from 'react';
import { Leaf, Tomato } from 'lucide-react';

type ItemType = 'leaf' | 'tomato';

interface FloatingItemsProps {
  items?: ItemType[];
}

const FloatingItems = ({ items = ['leaf', 'tomato'] }: FloatingItemsProps) => {
  const [floatingItems, setFloatingItems] = useState<Array<{ id: number; style: React.CSSProperties; type: ItemType }>>([]);

  useEffect(() => {
    const createItem = () => {
      const id = Date.now();
      const startPositionX = Math.random() * window.innerWidth;
      const type = items[Math.floor(Math.random() * items.length)];
      
      const style: React.CSSProperties = {
        position: 'fixed',
        left: `${startPositionX}px`,
        top: '-50px',
        animation: `float ${Math.random() * 5 + 10}s linear infinite`,
        color: type === 'leaf' ? '#33B249' : '#FF4646',
        opacity: Math.random() * 0.5 + 0.3,
        transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`,
        zIndex: 0,
      };

      setFloatingItems(prev => [...prev.slice(-20), { id, style, type }]);
    };

    const interval = setInterval(createItem, 2500);
    return () => clearInterval(interval);
  }, [items]);

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
      {floatingItems.map(item => (
        item.type === 'leaf' ? (
          <Leaf
            key={item.id}
            style={item.style}
            size={24}
          />
        ) : (
          <Tomato
            key={item.id}
            style={item.style}
            size={24}
          />
        )
      ))}
    </>
  );
};

export default FloatingItems;
