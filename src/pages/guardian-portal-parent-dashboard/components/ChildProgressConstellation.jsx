import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ChildProgressConstellation = () => {
  const [selectedChild, setSelectedChild] = useState(0);

  const children = [
    {
      id: 1,
      name: "Emma",
      age: 8,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      level: "Mindful Explorer",
      starsCollected: 47,
      totalStars: 60,
      currentStreak: 5,
      longestStreak: 12,
      favoriteActivity: "Breathing Cloud",
      recentAchievements: [
        { name: "Calm Master", icon: "Wind", date: "2 days ago", color: "accent" },
        { name: "Gratitude Star", icon: "Star", date: "1 week ago", color: "warning" },
        { name: "Emotion Explorer", icon: "Heart", date: "2 weeks ago", color: "success" }
      ],
      weeklyGoals: [
        { name: "Daily Breathing", progress: 85, target: 7, current: 6 },
        { name: "Mood Check-ins", progress: 100, target: 7, current: 7 },
        { name: "Gratitude Practice", progress: 60, target: 5, current: 3 }
      ],
      emotionalGrowth: [
        { skill: "Self-Awareness", level: 8, improvement: "+2" },
        { skill: "Emotional Regulation", level: 7, improvement: "+1" },
        { skill: "Empathy", level: 9, improvement: "+3" },
        { skill: "Stress Management", level: 6, improvement: "+2" }
      ]
    },
    {
      id: 2,
      name: "Alex",
      age: 10,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      level: "Wisdom Seeker",
      starsCollected: 73,
      totalStars: 80,
      currentStreak: 8,
      longestStreak: 15,
      favoriteActivity: "Emotion Garden",
      recentAchievements: [
        { name: "Mindful Master", icon: "Brain", date: "1 day ago", color: "conversion" },
        { name: "Kindness Champion", icon: "Heart", date: "3 days ago", color: "success" },
        { name: "Focus Wizard", icon: "Target", date: "1 week ago", color: "accent" }
      ],
      weeklyGoals: [
        { name: "Daily Breathing", progress: 100, target: 7, current: 7 },
        { name: "Mood Check-ins", progress: 85, target: 7, current: 6 },
        { name: "Gratitude Practice", progress: 80, target: 5, current: 4 }
      ],
      emotionalGrowth: [
        { skill: "Self-Awareness", level: 9, improvement: "+1" },
        { skill: "Emotional Regulation", level: 8, improvement: "+2" },
        { skill: "Empathy", level: 10, improvement: "+1" },
        { skill: "Stress Management", level: 8, improvement: "+3" }
      ]
    }
  ];

  const currentChild = children?.[selectedChild];

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'success';
    if (progress >= 60) return 'warning';
    return 'accent';
  };

  return (
    <div className="glass rounded-2xl p-6 shadow-cosmic">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
            <Icon name="Sparkles" size={24} className="text-accent" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-foreground">Progress Constellation</h2>
            <p className="text-sm text-text-secondary">Track your child's mindfulness journey</p>
          </div>
        </div>
        
        {children?.length > 1 && (
          <div className="flex space-x-2">
            {children?.map((child, index) => (
              <button
                key={child?.id}
                onClick={() => setSelectedChild(index)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  selectedChild === index
                    ? 'bg-accent/20 text-accent border border-accent/30' :'bg-surface/30 text-text-secondary hover:bg-accent/10 hover:text-accent'
                }`}
              >
                <img
                  src={child?.avatar}
                  alt={child?.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-sm font-medium">{child?.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Child Overview */}
        <div className="lg:col-span-1">
          <div className="bg-surface/20 rounded-xl p-6 border border-border">
            <div className="text-center mb-6">
              <div className="relative inline-block mb-4">
                <img
                  src={currentChild?.avatar}
                  alt={currentChild?.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-2 border-background">
                  <Icon name="Star" size={16} className="text-background" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{currentChild?.name}</h3>
              <p className="text-sm text-accent font-medium mb-2">{currentChild?.level}</p>
              <p className="text-xs text-text-secondary">Age {currentChild?.age}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-accent/5 rounded-lg border border-accent/20">
                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={16} className="text-accent" />
                  <span className="text-sm font-medium text-foreground">Stars Collected</span>
                </div>
                <span className="text-sm font-bold text-accent">
                  {currentChild?.starsCollected}/{currentChild?.totalStars}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-success/5 rounded-lg border border-success/20">
                <div className="flex items-center space-x-2">
                  <Icon name="Zap" size={16} className="text-success" />
                  <span className="text-sm font-medium text-foreground">Current Streak</span>
                </div>
                <span className="text-sm font-bold text-success">{currentChild?.currentStreak} days</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-conversion/5 rounded-lg border border-conversion/20">
                <div className="flex items-center space-x-2">
                  <Icon name="Trophy" size={16} className="text-conversion" />
                  <span className="text-sm font-medium text-foreground">Longest Streak</span>
                </div>
                <span className="text-sm font-bold text-conversion">{currentChild?.longestStreak} days</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-warning/5 rounded-lg border border-warning/20">
                <div className="flex items-center space-x-2">
                  <Icon name="Heart" size={16} className="text-warning" />
                  <span className="text-sm font-medium text-foreground">Favorite Activity</span>
                </div>
                <span className="text-sm font-bold text-warning">{currentChild?.favoriteActivity}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Achievements */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentChild?.recentAchievements?.map((achievement, index) => (
                <div key={index} className={`bg-${achievement?.color}/5 rounded-xl p-4 border border-${achievement?.color}/20`}>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`w-10 h-10 rounded-lg bg-${achievement?.color}/20 flex items-center justify-center`}>
                      <Icon name={achievement?.icon} size={20} className={`text-${achievement?.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{achievement?.name}</h4>
                      <p className="text-xs text-text-secondary">{achievement?.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Goals */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Weekly Goals</h3>
            <div className="space-y-4">
              {currentChild?.weeklyGoals?.map((goal, index) => (
                <div key={index} className="bg-surface/20 rounded-xl p-4 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-foreground">{goal?.name}</h4>
                    <span className="text-sm text-text-secondary">
                      {goal?.current}/{goal?.target}
                    </span>
                  </div>
                  <div className="w-full bg-surface/30 rounded-full h-2 mb-2">
                    <div 
                      className={`bg-${getProgressColor(goal?.progress)} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${goal?.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-medium text-${getProgressColor(goal?.progress)}`}>
                      {goal?.progress}% Complete
                    </span>
                    {goal?.progress === 100 && (
                      <Icon name="CheckCircle" size={16} className="text-success" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emotional Growth */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Emotional Growth</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentChild?.emotionalGrowth?.map((skill, index) => (
                <div key={index} className="bg-surface/20 rounded-xl p-4 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-foreground text-sm">{skill?.skill}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-success font-medium">{skill?.improvement}</span>
                      <Icon name="TrendingUp" size={12} className="text-success" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {[...Array(10)]?.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < skill?.level ? 'bg-accent' : 'bg-surface/50'
                        }`}
                      ></div>
                    ))}
                    <span className="text-xs text-text-secondary ml-2">{skill?.level}/10</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Button
              variant="default"
              className="bg-accent hover:bg-accent/90"
              iconName="Download"
              iconPosition="left"
            >
              Download Report
            </Button>
            <Button
              variant="outline"
              className="border-success/30 text-success hover:bg-success/10"
              iconName="Share2"
              iconPosition="left"
            >
              Share Progress
            </Button>
            <Button
              variant="outline"
              className="border-conversion/30 text-conversion hover:bg-conversion/10"
              iconName="Settings"
              iconPosition="left"
            >
              Adjust Goals
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildProgressConstellation;