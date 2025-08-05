import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const GameCard = ({ game, onPlay, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getDifficultyColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'text-success bg-success/10';
      case 'Explorer':
        return 'text-warning bg-warning/10';
      case 'Master':
        return 'text-conversion bg-conversion/10';
      default:
        return 'text-accent bg-accent/10';
    }
  };

  const getRealmIcon = (realm) => {
    switch (realm) {
      case 'Emotion Weather Station':
        return 'Cloud';
      case 'Kindness Kingdom':
        return 'Heart';
      case 'Worry Warriors':
        return 'Shield';
      case 'Breathing Gardens':
        return 'Flower';
      case 'Gratitude Galaxy':
        return 'Star';
      default:
        return 'Sparkles';
    }
  };

  return (
    <div 
      className={`relative group cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="glass rounded-2xl p-6 h-full transition-all duration-500 hover:shadow-magical hover:scale-105 border border-border/50">
        {/* Game Preview Image */}
        <div className="relative overflow-hidden rounded-xl mb-4 h-48">
          <Image
            src={game?.previewImage}
            alt={game?.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Animated Preview Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center space-x-2 text-sm text-foreground/90">
                <Icon name="Play" size={16} className="animate-pulse" />
                <span className="font-medium">Preview Activity</span>
              </div>
            </div>
          </div>

          {/* Difficulty Badge */}
          <div className="absolute top-3 right-3">
            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(game?.difficulty)}`}>
              {game?.difficulty}
            </div>
          </div>

          {/* New Badge */}
          {game?.isNew && (
            <div className="absolute top-3 left-3">
              <div className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs font-bold animate-pulse">
                NEW
              </div>
            </div>
          )}
        </div>

        {/* Game Info */}
        <div className="space-y-3">
          {/* Realm & Title */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <Icon name={getRealmIcon(game?.realm)} size={14} className="text-accent" />
              <span className="font-medium">{game?.realm}</span>
            </div>
            <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-accent transition-colors duration-300">
              {game?.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed">
            {game?.description}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between text-xs text-text-secondary">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={12} />
                <span>{game?.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Users" size={12} />
                <span>{game?.playCount}+ played</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={12} className="text-warning fill-current" />
              <span className="font-medium">{game?.rating}</span>
            </div>
          </div>

          {/* Progress Bar */}
          {game?.progress > 0 && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-text-secondary">
                <span>Progress</span>
                <span>{game?.progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-accent h-2 rounded-full transition-all duration-500"
                  style={{ width: `${game?.progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="pt-2">
            <Button
              variant={game?.progress > 0 ? "outline" : "default"}
              fullWidth
              className={`${game?.progress > 0 ? 'border-accent text-accent hover:bg-accent hover:text-accent-foreground' : 'bg-accent hover:bg-accent/90 text-accent-foreground'} font-semibold transition-all duration-300`}
              iconName={game?.progress > 0 ? "RotateCcw" : "Play"}
              iconPosition="left"
              iconSize={16}
              onClick={() => onPlay(game)}
            >
              {game?.progress > 0 ? "Continue Journey" : "Start Adventure"}
            </Button>
          </div>
        </div>

        {/* Magical Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          {[...Array(3)]?.map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-accent rounded-full opacity-30 transition-all duration-1000 ${isHovered ? 'animate-pulse' : ''}`}
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameCard;