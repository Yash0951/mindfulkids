import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import Icon from '../../../components/AppIcon';

const WeeklyEmotionalReport = () => {
  const emotionalData = [
    { day: 'Mon', mood: 7, activities: 3, duration: 15 },
    { day: 'Tue', mood: 8, activities: 4, duration: 20 },
    { day: 'Wed', mood: 6, activities: 2, duration: 10 },
    { day: 'Thu', mood: 9, activities: 5, duration: 25 },
    { day: 'Fri', mood: 7, activities: 3, duration: 18 },
    { day: 'Sat', mood: 8, activities: 4, duration: 22 },
    { day: 'Sun', mood: 9, activities: 6, duration: 30 }
  ];

  const moodEmojis = {
    6: '😐',
    7: '😊',
    8: '😄',
    9: '🌟'
  };

  const averageMood = Math.round(emotionalData?.reduce((sum, day) => sum + day?.mood, 0) / emotionalData?.length);
  const totalActivities = emotionalData?.reduce((sum, day) => sum + day?.activities, 0);
  const totalDuration = emotionalData?.reduce((sum, day) => sum + day?.duration, 0);

  return (
    <div className="glass rounded-2xl p-6 shadow-cosmic">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
            <Icon name="CloudRain" size={24} className="text-accent" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-foreground">Weekly Emotional Weather</h2>
            <p className="text-sm text-text-secondary">Your child's mindfulness journey this week</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl mb-1">{moodEmojis?.[averageMood] || '😊'}</div>
          <p className="text-xs text-text-secondary">Average Mood</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-success/10 rounded-xl p-4 border border-success/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Heart" size={16} className="text-success" />
            <span className="text-sm font-medium text-success">Mood Score</span>
          </div>
          <div className="text-2xl font-bold text-foreground">{averageMood}/10</div>
          <p className="text-xs text-text-secondary">+0.5 from last week</p>
        </div>

        <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Sparkles" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Activities</span>
          </div>
          <div className="text-2xl font-bold text-foreground">{totalActivities}</div>
          <p className="text-xs text-text-secondary">Mindfulness sessions</p>
        </div>

        <div className="bg-conversion/10 rounded-xl p-4 border border-conversion/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Clock" size={16} className="text-conversion" />
            <span className="text-sm font-medium text-conversion">Practice Time</span>
          </div>
          <div className="text-2xl font-bold text-foreground">{totalDuration}min</div>
          <p className="text-xs text-text-secondary">Total this week</p>
        </div>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={emotionalData}>
            <defs>
              <linearGradient id="moodGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }}
            />
            <YAxis 
              domain={[0, 10]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                color: 'var(--color-foreground)'
              }}
              formatter={(value, name) => [
                name === 'mood' ? `${value}/10` : 
                name === 'activities' ? `${value} sessions` : 
                `${value} minutes`,
                name === 'mood' ? 'Mood Score' :
                name === 'activities' ? 'Activities' : 'Duration'
              ]}
            />
            <Area
              type="monotone"
              dataKey="mood"
              stroke="var(--color-accent)"
              strokeWidth={2}
              fill="url(#moodGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 p-4 bg-accent/5 rounded-xl border border-accent/10">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={20} className="text-accent mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-1">Weekly Insight</h4>
            <p className="text-sm text-text-secondary">
              Your child showed the highest engagement on Thursday and Sunday, suggesting they respond well to 
              structured weekday practice and relaxed weekend sessions. Consider maintaining this pattern!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyEmotionalReport;