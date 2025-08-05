import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FeaturedActivities = ({ selectedMood }) => {
  const activities = [
    {
      id: 'breathing-cloud',
      title: 'Breathing Cloud Adventure',
      description: 'Help the magical cloud learn to breathe deeply and calmly. Perfect for when you need to slow down and find peace.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      duration: '5-10 minutes',
      difficulty: 'Beginner',
      icon: 'Cloud',
      color: 'from-cyan-400/20 to-blue-400/20',
      borderColor: 'border-cyan-400/40',
      iconColor: 'text-cyan-400',
      tags: ['Breathing', 'Calm', 'Focus'],
      recommended: ['Worried', 'Angry', 'Tired']
    },
    {
      id: 'emotion-weather',
      title: 'Emotion Weather Station',
      description: 'Discover how feelings are like weather - they come and go! Learn to be the calm sky behind all the clouds.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?w=400&h=300&fit=crop',
      duration: '8-12 minutes',
      difficulty: 'Intermediate',
      icon: 'CloudRain',
      color: 'from-purple-400/20 to-pink-400/20',
      borderColor: 'border-purple-400/40',
      iconColor: 'text-purple-400',
      tags: ['Emotions', 'Understanding', 'Growth'],
      recommended: ['Sad', 'Happy', 'Excited']
    },
    {
      id: 'kindness-garden',
      title: 'Kindness Garden',
      description: 'Plant seeds of kindness and watch them grow into beautiful flowers. Share kindness with yourself and others.',
      image: 'https://images.pixabay.com/photo/2018/04/03/22/49/flower-3288473_1280.jpg?w=400&h=300&fit=crop',
      duration: '6-8 minutes',
      difficulty: 'Beginner',
      icon: 'Flower',
      color: 'from-green-400/20 to-emerald-400/20',
      borderColor: 'border-green-400/40',
      iconColor: 'text-green-400',
      tags: ['Kindness', 'Compassion', 'Joy'],
      recommended: ['Happy', 'Excited']
    },
    {
      id: 'worry-warriors',
      title: 'Worry Warriors Training',
      description: 'Become a brave warrior who knows how to handle worries and fears. Learn special techniques to feel strong and confident.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      duration: '10-15 minutes',
      difficulty: 'Advanced',
      icon: 'Shield',
      color: 'from-amber-400/20 to-orange-400/20',
      borderColor: 'border-amber-400/40',
      iconColor: 'text-amber-400',
      tags: ['Courage', 'Confidence', 'Strength'],
      recommended: ['Worried', 'Sad']
    }
  ];

  const getRecommendedActivities = () => {
    if (selectedMood) {
      return activities?.map(activity => ({
        ...activity,
        isRecommended: activity?.recommended?.includes(selectedMood?.label)
      }))?.sort((a, b) => b?.isRecommended - a?.isRecommended);
    }
    return activities?.map(activity => ({ ...activity, isRecommended: false }));
  };

  const featuredActivities = getRecommendedActivities();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cosmic-dark to-cosmic-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Magical Activities Await
          </h2>
          <p className="text-xl text-text-secondary font-accent max-w-2xl mx-auto">
            {selectedMood 
              ? `Special activities chosen just for you when you're feeling ${selectedMood?.label?.toLowerCase()}`
              : "Discover enchanting mindfulness adventures designed just for you"
            }
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {featuredActivities?.map((activity) => (
            <motion.div
              key={activity?.id}
              variants={itemVariants}
              className="group relative"
            >
              <Link to="/interactive-games-hub-mindfulness-activities">
                <div className={`
                  relative overflow-hidden rounded-2xl glass backdrop-blur-md border ${activity?.borderColor}
                  bg-gradient-to-br ${activity?.color}
                  hover:shadow-glow-md transition-all duration-500
                  ${activity?.isRecommended ? 'ring-2 ring-accent shadow-glow-sm' : ''}
                  group-hover:scale-105 group-hover:-translate-y-2
                `}>
                  {/* Recommended Badge */}
                  {activity?.isRecommended && (
                    <div className="absolute top-4 right-4 z-10 bg-accent text-cosmic-dark text-xs font-bold px-3 py-1 rounded-full">
                      Perfect for You!
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={activity?.image}
                      alt={activity?.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/60 to-transparent" />
                    
                    {/* Floating Icon */}
                    <motion.div
                      className={`absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br ${activity?.color} border ${activity?.borderColor} flex items-center justify-center backdrop-blur-sm`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon 
                        name={activity?.icon} 
                        size={24} 
                        className={activity?.iconColor} 
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                        {activity?.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-text-secondary">
                        <Icon name="Clock" size={16} />
                        <span>{activity?.duration}</span>
                      </div>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {activity?.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {activity?.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium bg-surface/50 text-text-secondary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Difficulty & CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          {[...Array(3)]?.map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < (activity?.difficulty === 'Beginner' ? 1 : activity?.difficulty === 'Intermediate' ? 2 : 3)
                                  ? 'bg-accent' :'bg-surface'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-text-secondary">{activity?.difficulty}</span>
                      </div>

                      <div className="flex items-center space-x-2 text-accent group-hover:text-conversion transition-colors duration-300">
                        <span className="text-sm font-medium">Start Adventure</span>
                        <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-conversion/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Activities CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            to="/interactive-games-hub-mindfulness-activities"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-conversion to-accent text-white font-heading font-bold rounded-2xl hover:shadow-glow-md transition-all duration-300 group"
          >
            <Icon name="Sparkles" size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            <span>Explore All Activities</span>
            <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedActivities;