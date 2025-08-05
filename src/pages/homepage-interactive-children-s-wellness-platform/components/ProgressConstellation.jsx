import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProgressConstellation = () => {
  const [userProgress, setUserProgress] = useState(null);
  const [isReturningUser, setIsReturningUser] = useState(false);

  useEffect(() => {
    // Check for returning user and load progress from localStorage
    const savedProgress = localStorage.getItem('mindfulkids_progress');
    const lastVisit = localStorage.getItem('mindfulkids_last_visit');
    
    if (savedProgress && lastVisit) {
      setUserProgress(JSON.parse(savedProgress));
      setIsReturningUser(true);
    } else {
      // First time user - create initial progress
      const initialProgress = {
        totalStars: 0,
        unlockedRealms: ['breathing'],
        completedActivities: [],
        currentStreak: 0,
        achievements: [],
        level: 1
      };
      setUserProgress(initialProgress);
      localStorage.setItem('mindfulkids_progress', JSON.stringify(initialProgress));
    }
    
    // Update last visit
    localStorage.setItem('mindfulkids_last_visit', new Date()?.toISOString());
  }, []);

  const constellations = [
    {
      id: 'breathing',
      name: 'Breathing Galaxy',
      stars: 5,
      unlocked: true,
      icon: 'Wind',
      color: 'text-cyan-400',
      description: 'Master the art of peaceful breathing'
    },
    {
      id: 'emotions',
      name: 'Feeling Nebula',
      stars: 4,
      unlocked: userProgress?.totalStars >= 3,
      icon: 'Heart',
      color: 'text-pink-400',
      description: 'Explore the universe of emotions'
    },
    {
      id: 'kindness',
      name: 'Kindness Cluster',
      stars: 6,
      unlocked: userProgress?.totalStars >= 8,
      icon: 'Sparkles',
      color: 'text-yellow-400',
      description: 'Spread kindness across the cosmos'
    },
    {
      id: 'focus',
      name: 'Focus Constellation',
      stars: 5,
      unlocked: userProgress?.totalStars >= 15,
      icon: 'Target',
      color: 'text-purple-400',
      description: 'Sharpen your mind like a laser beam'
    }
  ];

  const achievements = [
    {
      id: 'first_breath',
      name: 'First Breath',
      description: 'Completed your first breathing exercise',
      icon: 'Award',
      earned: userProgress?.achievements?.includes('first_breath') || false
    },
    {
      id: 'week_warrior',
      name: 'Week Warrior',
      description: 'Practiced mindfulness for 7 days in a row',
      icon: 'Trophy',
      earned: userProgress?.currentStreak >= 7
    },
    {
      id: 'emotion_explorer',
      name: 'Emotion Explorer',
      description: 'Identified 10 different emotions',
      icon: 'Compass',
      earned: userProgress?.completedActivities?.length >= 10
    },
    {
      id: 'star_collector',
      name: 'Star Collector',
      description: 'Collected 20 mindfulness stars',
      icon: 'Star',
      earned: userProgress?.totalStars >= 20
    }
  ];

  if (!userProgress) {
    return (
      <div className="py-20 px-4 bg-cosmic-dark">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4"></div>
            <div className="h-4 bg-accent/20 rounded w-48 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 px-4 bg-cosmic-dark relative overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0">
        {[...Array(50)]?.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {isReturningUser ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Welcome Back, Star Collector! ⭐
            </h2>
            <p className="text-xl text-text-secondary font-accent">
              Your mindfulness constellation is growing brighter
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Your Journey Begins Here ✨
            </h2>
            <p className="text-xl text-text-secondary font-accent">
              Complete activities to unlock new realms and collect stars
            </p>
          </motion.div>
        )}

        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-2xl p-8 mb-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">{userProgress?.totalStars}</div>
              <div className="text-sm text-text-secondary">Stars Collected</div>
              <Icon name="Star" size={24} className="text-accent mx-auto" />
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl font-bold text-conversion">{userProgress?.level}</div>
              <div className="text-sm text-text-secondary">Current Level</div>
              <Icon name="Zap" size={24} className="text-conversion mx-auto" />
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl font-bold text-success">{userProgress?.currentStreak}</div>
              <div className="text-sm text-text-secondary">Day Streak</div>
              <Icon name="Flame" size={24} className="text-success mx-auto" />
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl font-bold text-warning">{userProgress?.unlockedRealms?.length}</div>
              <div className="text-sm text-text-secondary">Realms Unlocked</div>
              <Icon name="Map" size={24} className="text-warning mx-auto" />
            </div>
          </div>
        </motion.div>

        {/* Constellation Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {constellations?.map((constellation, index) => (
            <motion.div
              key={constellation?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`
                relative p-6 rounded-2xl border transition-all duration-300
                ${constellation?.unlocked 
                  ? 'glass bg-gradient-to-br from-accent/10 to-conversion/10 border-accent/30 hover:shadow-glow-sm' 
                  : 'bg-surface/20 border-surface/40 opacity-60'
                }
              `}
            >
              {!constellation?.unlocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-cosmic-dark/80 rounded-2xl backdrop-blur-sm">
                  <div className="text-center">
                    <Icon name="Lock" size={32} className="text-text-secondary mx-auto mb-2" />
                    <div className="text-sm text-text-secondary">
                      Collect {constellation?.id === 'emotions' ? '3' : constellation?.id === 'kindness' ? '8' : '15'} stars to unlock
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-conversion/20 flex items-center justify-center mr-4`}>
                  <Icon name={constellation?.icon} size={24} className={constellation?.color} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    {constellation?.name}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {constellation?.description}
                  </p>
                </div>
              </div>

              {/* Star Progress */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  {[...Array(constellation?.stars)]?.map((_, starIndex) => (
                    <Icon
                      key={starIndex}
                      name="Star"
                      size={16}
                      className={
                        constellation?.unlocked && starIndex < (userProgress?.totalStars || 0)
                          ? 'text-accent' :'text-surface'
                      }
                    />
                  ))}
                </div>
                <div className="text-sm text-text-secondary">
                  {constellation?.unlocked ? `${Math.min(userProgress?.totalStars, constellation?.stars)}/${constellation?.stars}` : 'Locked'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-heading font-bold text-foreground text-center mb-8">
            Your Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements?.map((achievement, index) => (
              <motion.div
                key={achievement?.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`
                  p-4 rounded-xl text-center transition-all duration-300
                  ${achievement?.earned 
                    ? 'glass bg-gradient-to-br from-success/20 to-accent/20 border border-success/30 shadow-glow-sm' 
                    : 'bg-surface/20 border border-surface/40'
                  }
                `}
              >
                <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center ${
                  achievement?.earned ? 'bg-success/20' : 'bg-surface/20'
                }`}>
                  <Icon 
                    name={achievement?.icon} 
                    size={24} 
                    className={achievement?.earned ? 'text-success' : 'text-surface'} 
                  />
                </div>
                <h4 className={`font-heading font-bold mb-1 ${
                  achievement?.earned ? 'text-foreground' : 'text-text-secondary'
                }`}>
                  {achievement?.name}
                </h4>
                <p className="text-xs text-text-secondary">
                  {achievement?.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgressConstellation;