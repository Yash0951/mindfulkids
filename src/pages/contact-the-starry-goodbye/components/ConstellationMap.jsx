import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ConstellationMap = () => {
  const [activeCountry, setActiveCountry] = useState(null);
  const [animatedStars, setAnimatedStars] = useState([]);

  const communityData = [
    { country: 'United States', users: '12,500+', position: { top: '35%', left: '20%' }, flag: '🇺🇸' },
    { country: 'Canada', users: '3,200+', position: { top: '25%', left: '18%' }, flag: '🇨🇦' },
    { country: 'United Kingdom', users: '4,800+', position: { top: '30%', left: '48%' }, flag: '🇬🇧' },
    { country: 'Australia', users: '2,100+', position: { top: '70%', left: '85%' }, flag: '🇦🇺' },
    { country: 'Germany', users: '3,600+', position: { top: '28%', left: '52%' }, flag: '🇩🇪' },
    { country: 'France', users: '2,900+', position: { top: '32%', left: '50%' }, flag: '🇫🇷' },
    { country: 'Japan', users: '1,800+', position: { top: '38%', left: '82%' }, flag: '🇯🇵' },
    { country: 'Brazil', users: '2,400+', position: { top: '55%', left: '32%' }, flag: '🇧🇷' },
    { country: 'India', users: '1,600+', position: { top: '42%', left: '72%' }, flag: '🇮🇳' },
    { country: 'Netherlands', users: '1,200+', position: { top: '27%', left: '51%' }, flag: '🇳🇱' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * communityData?.length);
      setAnimatedStars(prev => [...prev, randomIndex]);
      
      setTimeout(() => {
        setAnimatedStars(prev => prev?.filter(index => index !== randomIndex));
      }, 2000);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
          <Icon name="Globe" size={24} color="var(--color-accent)" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
          Our Global Constellation ✨
        </h3>
        <p className="text-text-secondary">
          Families around the world practicing mindfulness together
        </p>
      </div>
      <div className="relative bg-cosmic-dark rounded-2xl p-8 mb-6 overflow-hidden" style={{ minHeight: '400px' }}>
        {/* Background stars */}
        <div className="absolute inset-0">
          {[...Array(50)]?.map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30 constellation"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Country markers */}
        {communityData?.map((location, index) => (
          <div
            key={location.country}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={location.position}
            onMouseEnter={() => setActiveCountry(index)}
            onMouseLeave={() => setActiveCountry(null)}
          >
            <div className={`relative transition-all duration-300 ${
              animatedStars?.includes(index) ? 'animate-pulse scale-125' : ''
            }`}>
              <div className={`w-4 h-4 bg-accent rounded-full shadow-glow-sm group-hover:shadow-glow-md transition-all duration-300 ${
                activeCountry === index ? 'scale-150 shadow-glow-md' : ''
              }`} />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-conversion rounded-full animate-ping" />
            </div>

            {/* Tooltip */}
            {activeCountry === index && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-surface border border-border rounded-lg shadow-lg whitespace-nowrap z-10">
                <div className="text-sm font-semibold text-foreground flex items-center space-x-2">
                  <span className="text-lg">{location.flag}</span>
                  <span>{location.country}</span>
                </div>
                <div className="text-xs text-accent">{location.users} mindful families</div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-surface" />
              </div>
            )}
          </div>
        ))}

        {/* Connecting lines animation */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {communityData?.map((location, index) => {
            if (index === 0) return null;
            const prevLocation = communityData?.[index - 1];
            return (
              <line
                key={`line-${index}`}
                x1={prevLocation?.position?.left}
                y1={prevLocation?.position?.top}
                x2={location.position?.left}
                y2={location.position?.top}
                stroke="var(--color-accent)"
                strokeWidth="1"
                opacity="0.2"
                className="animate-pulse"
              />
            );
          })}
        </svg>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {communityData?.slice(0, 5)?.map((location, index) => (
          <div
            key={location.country}
            className="text-center p-3 bg-surface/50 rounded-lg hover:bg-surface transition-colors duration-300"
          >
            <div className="text-2xl mb-1">{location.flag}</div>
            <div className="text-xs font-medium text-foreground">{location.country}</div>
            <div className="text-xs text-accent">{location.users}</div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6 p-4 bg-accent/10 rounded-lg">
        <p className="text-sm text-text-secondary">
          <Icon name="Heart" size={16} className="inline mr-2 text-conversion" />
          Join over <span className="font-semibold text-accent">35,000 families</span> creating mindful moments together
        </p>
      </div>
    </div>
  );
};

export default ConstellationMap;