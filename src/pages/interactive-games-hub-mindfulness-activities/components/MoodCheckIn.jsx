import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MoodCheckIn = ({ onMoodSelect, currentMood, className = '' }) => {
  const [selectedMood, setSelectedMood] = useState(currentMood || null);
  const [isAnimating, setIsAnimating] = useState(false);

  const moods = [
    {
      id: 'excited',
      name: 'Excited',
      icon: 'Zap',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/30',
      description: 'Full of energy and ready for adventure!'
    },
    {
      id: 'happy',
      name: 'Happy',
      icon: 'Smile',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30',
      description: 'Feeling good and positive'
    },
    {
      id: 'calm',
      name: 'Calm',
      icon: 'Leaf',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30',
      description: 'Peaceful and relaxed'
    },
    {
      id: 'curious',
      name: 'Curious',
      icon: 'Search',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30',
      description: 'Ready to explore and learn'
    },
    {
      id: 'worried',
      name: 'Worried',
      icon: 'CloudRain',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/30',
      description: 'Feeling a bit anxious or concerned'
    },
    {
      id: 'sad',
      name: 'Sad',
      icon: 'CloudDrizzle',
      color: 'text-gray-400',
      bgColor: 'bg-gray-400/10',
      borderColor: 'border-gray-400/30',
      description: 'Feeling down or upset'
    }
  ];

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setIsAnimating(true);
    
    setTimeout(() => {
      onMoodSelect(mood);
      setIsAnimating(false);
    }, 500);
  };

  const getMoodMessage = (mood) => {
    switch (mood?.id) {
      case 'excited':
        return "Amazing! Let's channel that energy into some fun activities!";
      case 'happy':
        return "Wonderful! Your positive energy will make these activities even more magical!";
      case 'calm':
        return "Perfect! You're in a great state for mindful exploration!";
      case 'curious':
        return "Fantastic! Your curiosity will unlock so many discoveries!";
      case 'worried':
        return "That's okay! We have special activities to help you feel better!";
      case 'sad':
        return "I understand. Let's find some gentle activities to lift your spirits!";
      default:
        return "How are you feeling today, young explorer?";
    }
  };

  return (
    <div className={`glass rounded-2xl p-6 border border-border/50 ${className}`}>
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/20 to-conversion/20 flex items-center justify-center">
          <Icon name="Heart" size={32} className="text-accent" />
        </div>
        <h3 className="text-xl font-heading font-bold text-foreground mb-2">
          Mood Check-In
        </h3>
        <p className="text-sm text-text-secondary">
          {getMoodMessage(selectedMood)}
        </p>
      </div>
      {/* Mood Selection Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {moods?.map((mood) => (
          <button
            key={mood?.id}
            onClick={() => handleMoodSelect(mood)}
            disabled={isAnimating}
            className={`relative p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedMood?.id === mood?.id
                ? `${mood?.bgColor} ${mood?.borderColor} shadow-magical`
                : 'bg-card/50 border-border/30 hover:bg-card/80 hover:border-border/50'
            } ${isAnimating ? 'pointer-events-none' : ''}`}
          >
            <div className="text-center space-y-2">
              <div className={`w-12 h-12 mx-auto rounded-full ${mood?.bgColor} flex items-center justify-center transition-all duration-300`}>
                <Icon 
                  name={mood?.icon} 
                  size={24} 
                  className={`${mood?.color} ${selectedMood?.id === mood?.id ? 'animate-pulse' : ''}`} 
                />
              </div>
              <div>
                <h4 className={`font-semibold text-sm ${selectedMood?.id === mood?.id ? mood?.color : 'text-foreground'}`}>
                  {mood?.name}
                </h4>
                <p className="text-xs text-text-secondary mt-1 leading-tight">
                  {mood?.description}
                </p>
              </div>
            </div>

            {/* Selection Indicator */}
            {selectedMood?.id === mood?.id && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center animate-bounce">
                <Icon name="Check" size={14} className="text-accent-foreground" />
              </div>
            )}
          </button>
        ))}
      </div>
      {/* Action Buttons */}
      {selectedMood && (
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            fullWidth
            className="border-border/50 text-text-secondary hover:text-foreground hover:border-border"
            iconName="RotateCcw"
            iconPosition="left"
            iconSize={16}
            onClick={() => setSelectedMood(null)}
          >
            Change Mood
          </Button>
          <Button
            variant="default"
            fullWidth
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={16}
            loading={isAnimating}
            onClick={() => handleMoodSelect(selectedMood)}
          >
            Continue Adventure
          </Button>
        </div>
      )}
      {/* Magical Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        {[...Array(5)]?.map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-accent rounded-full opacity-20 ${selectedMood ? 'animate-pulse' : ''}`}
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + (i % 2) * 30}%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MoodCheckIn;