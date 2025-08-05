import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FamilyChallenges = () => {
  const [activeChallenge, setActiveChallenge] = useState(0);

  const challenges = [
    {
      id: 1,
      title: "Gratitude Constellation",
      description: "Create a family gratitude constellation by sharing three things you\'re grateful for each night before bed.",
      duration: "7 days",
      difficulty: "Easy",
      participants: 2,
      progress: 85,
      icon: "Star",
      color: "accent",
      rewards: ["Family Star Badge", "Gratitude Journal Template"],
      activities: [
        "Share 3 gratitudes at dinner",
        "Draw gratitude pictures together",
        "Create a gratitude jar",
        "Write thank you notes"
      ]
    },
    {
      id: 2,
      title: "Breathing Buddies",
      description: "Practice the 4-7-8 breathing technique together every morning for a week to start the day with calm energy.",
      duration: "7 days",
      difficulty: "Medium",
      participants: 2,
      progress: 42,
      icon: "Wind",
      color: "success",
      rewards: ["Breathing Master Certificate", "Morning Routine Chart"],
      activities: [
        "Morning breathing session",
        "Create breathing reminders",
        "Track calm moments",
        "Share breathing tips"
      ]
    },
    {
      id: 3,
      title: "Emotion Weather Station",
      description: "Check in with each other\'s emotional weather daily and practice supportive responses together.",
      duration: "14 days",
      difficulty: "Advanced",
      participants: 3,
      progress: 20,
      icon: "CloudRain",
      color: "conversion",
      rewards: ["Emotion Expert Badge", "Family Weather Chart"],
      activities: [
        "Daily emotion check-ins",
        "Create emotion vocabulary",
        "Practice empathy responses",
        "Build coping strategies"
      ]
    }
  ];

  const upcomingChallenges = [
    {
      title: "Mindful Nature Walk",
      description: "Explore nature together with mindful observation exercises",
      startDate: "Next Monday",
      icon: "TreePine"
    },
    {
      title: "Kindness Quest",
      description: "Complete random acts of kindness as a family team",
      startDate: "Next Week",
      icon: "Heart"
    },
    {
      title: "Digital Detox Adventure",
      description: "Enjoy screen-free family time with mindful activities",
      startDate: "Weekend",
      icon: "Smartphone"
    }
  ];

  const currentChallenge = challenges?.[activeChallenge];

  return (
    <div className="glass rounded-2xl p-6 shadow-cosmic">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
            <Icon name="Users" size={24} className="text-success" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-foreground">Family Challenges</h2>
            <p className="text-sm text-text-secondary">Grow together through mindful adventures</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          iconName="Plus"
          iconPosition="left"
          className="border-accent/30 text-accent hover:bg-accent/10"
        >
          Browse All
        </Button>
      </div>
      {/* Active Challenges */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">Active Challenges</h3>
        
        <div className="flex space-x-2 mb-4">
          {challenges?.map((challenge, index) => (
            <button
              key={challenge?.id}
              onClick={() => setActiveChallenge(index)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                activeChallenge === index
                  ? 'bg-accent text-background' :'bg-surface/50 text-text-secondary hover:bg-accent/20 hover:text-accent'
              }`}
            >
              {challenge?.title}
            </button>
          ))}
        </div>

        <div className={`bg-${currentChallenge?.color}/5 rounded-xl p-6 border border-${currentChallenge?.color}/20`}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start space-x-4">
              <div className={`w-16 h-16 rounded-2xl bg-${currentChallenge?.color}/20 flex items-center justify-center`}>
                <Icon name={currentChallenge?.icon} size={28} className={`text-${currentChallenge?.color}`} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-foreground mb-2">{currentChallenge?.title}</h4>
                <p className="text-sm text-text-secondary mb-3">{currentChallenge?.description}</p>
                
                <div className="flex items-center space-x-4 text-xs text-text-secondary">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} />
                    <span>{currentChallenge?.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={12} />
                    <span>{currentChallenge?.participants} participants</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="TrendingUp" size={12} />
                    <span>{currentChallenge?.difficulty}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className={`text-2xl font-bold text-${currentChallenge?.color} mb-1`}>
                {currentChallenge?.progress}%
              </div>
              <p className="text-xs text-text-secondary">Complete</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="w-full bg-surface/30 rounded-full h-2">
              <div 
                className={`bg-${currentChallenge?.color} h-2 rounded-full transition-all duration-500`}
                style={{ width: `${currentChallenge?.progress}%` }}
              ></div>
            </div>
          </div>

          {/* Activities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {currentChallenge?.activities?.map((activity, index) => (
              <div key={index} className="flex items-center space-x-2 p-2 bg-surface/20 rounded-lg">
                <div className={`w-2 h-2 rounded-full ${index < 2 ? `bg-${currentChallenge?.color}` : 'bg-surface'}`}></div>
                <span className="text-sm text-foreground">{activity}</span>
              </div>
            ))}
          </div>

          {/* Rewards */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gift" size={16} className={`text-${currentChallenge?.color}`} />
              <span className="text-sm font-medium text-foreground">Rewards:</span>
              <div className="flex space-x-2">
                {currentChallenge?.rewards?.map((reward, index) => (
                  <span key={index} className="text-xs bg-surface/30 px-2 py-1 rounded-full text-text-secondary">
                    {reward}
                  </span>
                ))}
              </div>
            </div>
            
            <Button
              variant="default"
              size="sm"
              className={`bg-${currentChallenge?.color} hover:bg-${currentChallenge?.color}/90`}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
      {/* Upcoming Challenges */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Upcoming Adventures</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingChallenges?.map((challenge, index) => (
            <div key={index} className="bg-surface/30 rounded-xl p-4 border border-border hover:border-accent/30 transition-all duration-300 group cursor-pointer">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                  <Icon name={challenge?.icon} size={20} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-sm">{challenge?.title}</h4>
                  <p className="text-xs text-accent">{challenge?.startDate}</p>
                </div>
              </div>
              <p className="text-xs text-text-secondary">{challenge?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FamilyChallenges;