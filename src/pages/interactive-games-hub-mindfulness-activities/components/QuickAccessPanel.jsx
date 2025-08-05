import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickAccessPanel = ({ onQuickAction, recentActivities, className = '' }) => {
  const quickActions = [
    {
      id: 'breathing',
      name: 'Quick Breathing',
      icon: 'Wind',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      description: '2-minute breathing exercise',
      duration: '2 min'
    },
    {
      id: 'calm',
      name: 'Calm Corner',
      icon: 'Leaf',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      description: 'Instant calming activities',
      duration: '1-5 min'
    },
    {
      id: 'gratitude',
      name: 'Gratitude Moment',
      icon: 'Heart',
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
      description: 'Share what you\'re grateful for',
      duration: '3 min'
    },
    {
      id: 'focus',
      name: 'Focus Boost',
      icon: 'Target',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      description: 'Quick attention training',
      duration: '5 min'
    }
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Quick Actions */}
      <div className="glass rounded-2xl p-6 border border-border/50">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-conversion/20 flex items-center justify-center">
            <Icon name="Zap" size={20} className="text-accent" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-bold text-foreground">
              Quick Actions
            </h3>
            <p className="text-sm text-text-secondary">
              Fast activities for any moment
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickActions?.map((action) => (
            <button
              key={action?.id}
              onClick={() => onQuickAction(action)}
              className={`p-4 rounded-xl border border-border/30 ${action?.bgColor} hover:bg-opacity-20 transition-all duration-300 hover:scale-105 hover:shadow-magical text-left group`}
            >
              <div className="flex items-start justify-between mb-2">
                <Icon 
                  name={action?.icon} 
                  size={24} 
                  className={`${action?.color} group-hover:scale-110 transition-transform duration-300`} 
                />
                <span className="text-xs text-text-secondary bg-card/50 px-2 py-1 rounded-full">
                  {action?.duration}
                </span>
              </div>
              <h4 className="font-semibold text-sm text-foreground mb-1">
                {action?.name}
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                {action?.description}
              </p>
            </button>
          ))}
        </div>
      </div>
      {/* Recent Activities */}
      <div className="glass rounded-2xl p-6 border border-border/50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-conversion/20 to-accent/20 flex items-center justify-center">
              <Icon name="Clock" size={20} className="text-conversion" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-foreground">
                Continue Journey
              </h3>
              <p className="text-sm text-text-secondary">
                Pick up where you left off
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            className="text-text-secondary hover:text-foreground"
            iconName="MoreHorizontal"
            iconSize={16}
          >
          </Button>
        </div>

        <div className="space-y-3">
          {recentActivities?.slice(0, 3)?.map((activity) => (
            <div
              key={activity?.id}
              className="flex items-center justify-between p-3 rounded-lg bg-card/20 border border-border/20 hover:bg-card/30 transition-colors duration-300 cursor-pointer group"
              onClick={() => onQuickAction({ id: 'continue', activityId: activity?.id })}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full ${activity?.bgColor} flex items-center justify-center`}>
                  <Icon name={activity?.icon} size={16} className={activity?.color} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                    {activity?.name}
                  </h4>
                  <p className="text-xs text-text-secondary">
                    {activity?.progress}% complete • {activity?.lastPlayed}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon name="Play" size={14} className="text-accent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {recentActivities?.length === 0 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center">
              <Icon name="Compass" size={32} className="text-text-secondary" />
            </div>
            <p className="text-sm text-text-secondary mb-4">
              No recent activities yet
            </p>
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              iconName="Sparkles"
              iconPosition="left"
              iconSize={16}
              onClick={() => onQuickAction({ id: 'explore' })}
            >
              Start Exploring
            </Button>
          </div>
        )}
      </div>
      {/* Daily Challenge */}
      <div className="glass rounded-2xl p-6 border border-border/50 bg-gradient-to-br from-conversion/5 to-accent/5">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-conversion/30 to-accent/30 flex items-center justify-center animate-pulse">
            <Icon name="Trophy" size={20} className="text-conversion" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-bold text-foreground">
              Daily Challenge
            </h3>
            <p className="text-sm text-text-secondary">
              Complete today's special activity
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-card/30 border border-border/30 mb-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-sm text-foreground">
              Kindness Ripple Effect
            </h4>
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={12} className="text-warning fill-current" />
              <span className="text-xs font-bold text-warning">+50 XP</span>
            </div>
          </div>
          <p className="text-xs text-text-secondary mb-3 leading-relaxed">
            Send three kind messages to family members and watch how kindness spreads!
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs text-text-secondary">
              <Icon name="Users" size={12} />
              <span>1,247 participants today</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-xs text-success font-medium">Active</span>
            </div>
          </div>
        </div>

        <Button
          variant="default"
          fullWidth
          className="bg-conversion hover:bg-conversion/90 text-conversion-foreground font-semibold"
          iconName="ArrowRight"
          iconPosition="right"
          iconSize={16}
          onClick={() => onQuickAction({ id: 'daily-challenge' })}
        >
          Accept Challenge
        </Button>
      </div>
    </div>
  );
};

export default QuickAccessPanel;