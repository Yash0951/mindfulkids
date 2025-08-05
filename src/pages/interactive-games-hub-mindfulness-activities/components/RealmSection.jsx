import React, { useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import GameCard from './GameCard';

const RealmSection = ({ realm, onGamePlay, className = '' }) => {
  const scrollRef = useRef(null);

  const getRealmGradient = (realmName) => {
    switch (realmName) {
      case 'Emotion Weather Station':
        return 'from-blue-500/20 via-cyan-500/10 to-transparent';
      case 'Kindness Kingdom':
        return 'from-pink-500/20 via-purple-500/10 to-transparent';
      case 'Worry Warriors':
        return 'from-orange-500/20 via-red-500/10 to-transparent';
      case 'Breathing Gardens':
        return 'from-green-500/20 via-emerald-500/10 to-transparent';
      case 'Gratitude Galaxy':
        return 'from-yellow-500/20 via-amber-500/10 to-transparent';
      default:
        return 'from-accent/20 via-accent/10 to-transparent';
    }
  };

  const getRealmIcon = (realmName) => {
    switch (realmName) {
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

  const scrollLeft = () => {
    if (scrollRef?.current) {
      scrollRef?.current?.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef?.current) {
      scrollRef?.current?.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Realm Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getRealmGradient(realm?.name)} flex items-center justify-center border border-border/30`}>
            <Icon 
              name={getRealmIcon(realm?.name)} 
              size={24} 
              className="text-foreground" 
            />
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground">
              {realm?.name}
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              {realm?.description}
            </p>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="hidden md:flex items-center space-x-2">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full glass border border-border/50 flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 transition-all duration-300"
            aria-label="Scroll left"
          >
            <Icon name="ChevronLeft" size={20} className="text-foreground" />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full glass border border-border/50 flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 transition-all duration-300"
            aria-label="Scroll right"
          >
            <Icon name="ChevronRight" size={20} className="text-foreground" />
          </button>
        </div>
      </div>
      {/* Games Horizontal Scroll */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {realm?.games?.map((game) => (
            <div key={game?.id} className="flex-none w-80">
              <GameCard 
                game={game} 
                onPlay={onGamePlay}
                className="h-full"
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
      {/* Realm Stats */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/30">
        <div className="flex items-center space-x-6 text-sm text-text-secondary">
          <div className="flex items-center space-x-2">
            <Icon name="Gamepad2" size={16} />
            <span>{realm?.games?.length} Activities</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Users" size={16} />
            <span>{realm?.totalPlayers}+ Explorers</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Award" size={16} />
            <span>{realm?.completionRate}% Completion</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex -space-x-2">
            {realm?.recentPlayers?.slice(0, 3)?.map((player, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full border-2 border-background overflow-hidden"
              >
                <img
                  src={player?.avatar}
                  alt={player?.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <span className="text-xs text-text-secondary ml-2">
            Recent explorers
          </span>
        </div>
      </div>
    </div>
  );
};

export default RealmSection;