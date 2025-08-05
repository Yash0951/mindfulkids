import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Icon from '../../../components/AppIcon';

const ActivityInsights = () => {
  const activityData = [
    { name: 'Breathing Cloud', value: 35, color: '#00f5ff', sessions: 12, avgDuration: 8 },
    { name: 'Emotion Garden', value: 25, color: '#ff6b9d', sessions: 8, avgDuration: 12 },
    { name: 'Gratitude Stars', value: 20, color: '#ffd93d', sessions: 6, avgDuration: 15 },
    { name: 'Calm Corner', value: 15, color: '#4ade80', sessions: 5, avgDuration: 10 },
    { name: 'Mindful Movement', value: 5, color: '#a78bfa', sessions: 2, avgDuration: 20 }
  ];

  const timeData = [
    { time: '7-9 AM', sessions: 8, effectiveness: 85 },
    { time: '12-2 PM', sessions: 3, effectiveness: 65 },
    { time: '4-6 PM', sessions: 12, effectiveness: 90 },
    { time: '7-9 PM', sessions: 15, effectiveness: 95 }
  ];

  const totalSessions = activityData?.reduce((sum, item) => sum + item?.sessions, 0);

  return (
    <div className="glass rounded-2xl p-6 shadow-cosmic">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-conversion/20 flex items-center justify-center">
          <Icon name="BarChart3" size={24} className="text-conversion" />
        </div>
        <div>
          <h2 className="text-xl font-heading font-bold text-foreground">Activity Insights</h2>
          <p className="text-sm text-text-secondary">Discover what resonates most with your child</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Favorite Activities */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Favorite Activities</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={activityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {activityData?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry?.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '12px',
                    color: 'var(--color-foreground)'
                  }}
                  formatter={(value) => [`${value}%`, 'Usage']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="space-y-2 mt-4">
            {activityData?.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-surface/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: activity?.color }}
                  ></div>
                  <span className="text-sm font-medium text-foreground">{activity?.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-foreground">{activity?.sessions} sessions</div>
                  <div className="text-xs text-text-secondary">{activity?.avgDuration}min avg</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optimal Practice Times */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Optimal Practice Times</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={timeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis 
                  dataKey="time" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }}
                />
                <YAxis 
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
                    name === 'sessions' ? `${value} sessions` : `${value}% effective`,
                    name === 'sessions' ? 'Sessions' : 'Effectiveness'
                  ]}
                />
                <Bar dataKey="sessions" fill="var(--color-accent)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 p-4 bg-success/5 rounded-xl border border-success/10">
            <div className="flex items-start space-x-3">
              <Icon name="TrendingUp" size={20} className="text-success mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground mb-1">Peak Performance</h4>
                <p className="text-sm text-text-secondary">
                  Evening sessions (7-9 PM) show the highest effectiveness at 95%. This aligns with 
                  bedtime routines and helps with sleep preparation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Target" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Total Sessions</span>
          </div>
          <div className="text-2xl font-bold text-foreground">{totalSessions}</div>
          <p className="text-xs text-text-secondary">This week</p>
        </div>

        <div className="bg-success/10 rounded-xl p-4 border border-success/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Award" size={16} className="text-success" />
            <span className="text-sm font-medium text-success">Completion Rate</span>
          </div>
          <div className="text-2xl font-bold text-foreground">92%</div>
          <p className="text-xs text-text-secondary">Activities finished</p>
        </div>

        <div className="bg-conversion/10 rounded-xl p-4 border border-conversion/20">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Zap" size={16} className="text-conversion" />
            <span className="text-sm font-medium text-conversion">Streak</span>
          </div>
          <div className="text-2xl font-bold text-foreground">5 days</div>
          <p className="text-xs text-text-secondary">Current streak</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityInsights;