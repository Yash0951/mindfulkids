import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ProgressConstellation = ({ userProgress, className = '' }) => {
  const [animatedStars, setAnimatedStars] = useState(new Set());

  const constellations = [
    {
      id: 'breathing',
      name: 'Breathing Mastery',
      icon: 'Wind',
      stars: userProgress?.breathingActivities || 0,
      totalStars: 12,
      color: 'text-blue-400',
      position: { x: 20, y: 25 }
    },
    {
      id: 'emotions',
      name: 'Emotion Explorer',
      icon: 'Heart',
      stars: userProgress?.emotionActivities || 0,
      totalStars: 10,
      color: 'text-pink-400',
      position: { x: 60, y: 15 }
    },
    {
      id: 'kindness',
      name: 'Kindness Champion',
      icon: 'Sparkles',
      stars: userProgress?.kindnessActivities || 0,
      totalStars: 8,
      color: 'text-yellow-400',
      position: { x: 80, y: 45 }
    },
    {
      id: 'focus',
      name: 'Focus Guardian',
      icon: 'Eye',
      stars: userProgress?.focusActivities || 0,
      totalStars: 15,
      color: 'text-purple-400',
      position: { x: 40, y: 60 }
    },
    {
      id: 'gratitude',
      name: 'Gratitude Collector',
      icon: 'Gift',
      stars: userProgress?.gratitudeActivities || 0,
      totalStars: 6,
      color: 'text-green-400',
      position: { x: 15, y: 70 }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomConstellation = constellations?.[Math.floor(Math.random() * constellations?.length)];
      if (randomConstellation?.stars > 0) {
        setAnimatedStars(prev => new Set([...prev, randomConstellation.id]));
        setTimeout(() => {
          setAnimatedStars(prev => {
            const newSet = new Set(prev);
            newSet?.delete(randomConstellation?.id);
            return newSet;
          });
        }, 2000);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getCompletionPercentage = (stars, totalStars) => {
    return Math.round((stars / totalStars) * 100);
  };

  const getTotalProgress = () => {
    const totalEarned = constellations?.reduce((sum, constellation) => sum + constellation?.stars, 0);
    const totalPossible = constellations?.reduce((sum, constellation) => sum + constellation?.totalStars, 0);
    return Math.round((totalEarned / totalPossible) * 100);
  };

  return (
    <div className={`glass rounded-2xl p-6 border border-border/50 ${className}`}>
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/20 to-conversion/20 flex items-center justify-center">
          <Icon name="Star" size={32} className="text-accent" />
        </div>
        <h3 className="text-xl font-heading font-bold text-foreground mb-2">
          Your Progress Constellation
        </h3>
        <p className="text-sm text-text-secondary">
          Collect stars by completing mindfulness activities
        </p>
      </div>
      {/* Overall Progress */}
      <div className="mb-6 p-4 rounded-xl bg-card/30 border border-border/30">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Overall Progress</span>
          <span className="text-sm font-bold text-accent">{getTotalProgress()}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-accent to-conversion h-3 rounded-full transition-all duration-1000 relative overflow-hidden"
            style={{ width: `${getTotalProgress()}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
          </div>
        </div>
      </div>
      {/* Constellation Map */}
      <div className="relative h-64 mb-6 rounded-xl bg-gradient-to-br from-background/50 to-card/30 border border-border/30 overflow-hidden">
        {/* Background Stars */}
        {[...Array(20)]?.map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}

        {/* Constellations */}
        {constellations?.map((constellation) => (
          <div
            key={constellation?.id}
            className="absolute group cursor-pointer"
            style={{
              left: `${constellation?.position?.x}%`,
              top: `${constellation?.position?.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            {/* Constellation Icon */}
            <div className={`relative w-12 h-12 rounded-full bg-card/50 border-2 border-border/30 flex items-center justify-center transition-all duration-300 hover:scale-110 ${animatedStars?.has(constellation?.id) ? 'animate-pulse shadow-magical' : ''}`}>
              <Icon 
                name={constellation?.icon} 
                size={20} 
                className={`${constellation?.color} ${animatedStars?.has(constellation?.id) ? 'animate-bounce' : ''}`} 
              />
              
              {/* Progress Ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-border/30"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray={`${2 * Math.PI * 20}`}
                  strokeDashoffset={`${2 * Math.PI * 20 * (1 - constellation?.stars / constellation?.totalStars)}`}
                  className={constellation?.color}
                  style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
                />
              </svg>
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-card border border-border/50 rounded-lg p-3 text-center min-w-max shadow-lg">
                <h4 className="font-semibold text-sm text-foreground mb-1">
                  {constellation?.name}
                </h4>
                <p className="text-xs text-text-secondary mb-2">
                  {constellation?.stars}/{constellation?.totalStars} stars
                </p>
                <div className="w-full bg-muted rounded-full h-1">
                  <div 
                    className={`h-1 rounded-full ${constellation?.color?.replace('text-', 'bg-')}`}
                    style={{ width: `${getCompletionPercentage(constellation?.stars, constellation?.totalStars)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Star Count Badge */}
            {constellation?.stars > 0 && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground">
                {constellation?.stars}
              </div>
            )}
          </div>
        ))}

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {constellations?.map((constellation, index) => {
            if (index === constellations?.length - 1) return null;
            const next = constellations?.[index + 1];
            return (
              <line
                key={`${constellation?.id}-${next?.id}`}
                x1={`${constellation?.position?.x}%`}
                y1={`${constellation?.position?.y}%`}
                x2={`${next?.position?.x}%`}
                y2={`${next?.position?.y}%`}
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="2,2"
                className="text-border/20"
              />
            );
          })}
        </svg>
      </div>
      {/* Constellation List */}
      <div className="space-y-3">
        {constellations?.map((constellation) => (
          <div key={constellation?.id} className="flex items-center justify-between p-3 rounded-lg bg-card/20 border border-border/20">
            <div className="flex items-center space-x-3">
              <Icon name={constellation?.icon} size={16} className={constellation?.color} />
              <span className="text-sm font-medium text-foreground">
                {constellation?.name}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-text-secondary">
                {constellation?.stars}/{constellation?.totalStars}
              </span>
              <div className="flex space-x-1">
                {[...Array(Math.min(constellation?.stars, 3))]?.map((_, i) => (
                  <Icon key={i} name="Star" size={12} className="text-warning fill-current" />
                ))}
                {constellation?.stars > 3 && (
                  <span className="text-xs text-warning font-bold">+{constellation?.stars - 3}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressConstellation;