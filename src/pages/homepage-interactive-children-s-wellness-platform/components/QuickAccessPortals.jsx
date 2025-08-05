import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const QuickAccessPortals = ({ selectedMood }) => {
  const getPortalsByMood = () => {
    const basePortals = [
      {
        id: 'breathing',
        title: 'Breathing Adventures',
        description: 'Learn magical breathing techniques with friendly cloud companions',
        icon: 'Wind',
        color: 'from-cyan-400/20 to-blue-400/20',
        borderColor: 'border-cyan-400/40',
        iconColor: 'text-cyan-400',
        path: '/interactive-games-hub-mindfulness-activities',
        recommended: ['Worried', 'Angry', 'Tired']
      },
      {
        id: 'emotions',
        title: 'Emotion Games',
        description: 'Explore feelings through fun interactive activities and stories',
        icon: 'Heart',
        color: 'from-pink-400/20 to-purple-400/20',
        borderColor: 'border-pink-400/40',
        iconColor: 'text-pink-400',
        path: '/interactive-games-hub-mindfulness-activities',
        recommended: ['Sad', 'Happy', 'Excited']
      },
      {
        id: 'calm',
        title: 'Calm Corner',
        description: 'Quick relief activities for when you need peace right now',
        icon: 'Sparkles',
        color: 'from-green-400/20 to-emerald-400/20',
        borderColor: 'border-green-400/40',
        iconColor: 'text-green-400',
        path: '/interactive-games-hub-mindfulness-activities',
        recommended: ['Worried', 'Angry', 'Sad']
      },
      {
        id: 'parent',
        title: 'Parent Portal',
        description: 'Resources and progress tracking for grown-ups',
        icon: 'Shield',
        color: 'from-amber-400/20 to-orange-400/20',
        borderColor: 'border-amber-400/40',
        iconColor: 'text-amber-400',
        path: '/guardian-portal-parent-dashboard',
        recommended: []
      }
    ];

    if (selectedMood) {
      return basePortals?.map(portal => ({
        ...portal,
        isRecommended: portal?.recommended?.includes(selectedMood?.label)
      }));
    }

    return basePortals?.map(portal => ({ ...portal, isRecommended: false }));
  };

  const portals = getPortalsByMood();

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
    <section className="py-20 px-4 bg-gradient-to-b from-cosmic-primary to-cosmic-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Choose Your Adventure
          </h2>
          <p className="text-xl text-text-secondary font-accent max-w-2xl mx-auto">
            {selectedMood 
              ? `Perfect activities for when you're feeling ${selectedMood?.label?.toLowerCase()}`
              : "Discover magical worlds of mindfulness and peace"
            }
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {portals?.map((portal) => (
            <motion.div
              key={portal?.id}
              variants={itemVariants}
              className="relative group"
            >
              <Link to={portal?.path}>
                <div className={`
                  relative p-6 rounded-2xl glass backdrop-blur-md border ${portal?.borderColor}
                  bg-gradient-to-br ${portal?.color}
                  hover:shadow-glow-md transition-all duration-300
                  ${portal?.isRecommended ? 'ring-2 ring-accent shadow-glow-sm' : ''}
                  group-hover:scale-105 group-hover:-translate-y-2
                `}>
                  {/* Recommended Badge */}
                  {portal?.isRecommended && (
                    <div className="absolute -top-2 -right-2 bg-accent text-cosmic-dark text-xs font-bold px-2 py-1 rounded-full">
                      Recommended
                    </div>
                  )}

                  {/* Icon */}
                  <div className="mb-4 relative">
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${portal?.color} border ${portal?.borderColor} flex items-center justify-center mx-auto`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon 
                        name={portal?.icon} 
                        size={32} 
                        className={portal?.iconColor} 
                      />
                    </motion.div>
                    
                    {/* Floating particles around icon */}
                    <div className="absolute inset-0">
                      {[...Array(3)]?.map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-accent rounded-full"
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${10 + i * 20}%`
                          }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            y: [-10, -20, -10]
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                      {portal?.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {portal?.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-conversion/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              Need Help Right Now?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link 
                to="/interactive-games-hub-mindfulness-activities"
                className="p-4 rounded-xl bg-surface/50 hover:bg-surface/80 transition-all duration-300 group"
              >
                <Icon name="Zap" size={24} className="text-yellow-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-sm font-medium text-foreground">Quick Calm (2 min)</div>
              </Link>
              
              <Link 
                to="/interactive-games-hub-mindfulness-activities"
                className="p-4 rounded-xl bg-surface/50 hover:bg-surface/80 transition-all duration-300 group"
              >
                <Icon name="Moon" size={24} className="text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-sm font-medium text-foreground">Bedtime Stories</div>
              </Link>
              
              <Link 
                to="/contact-the-starry-goodbye"
                className="p-4 rounded-xl bg-surface/50 hover:bg-surface/80 transition-all duration-300 group"
              >
                <Icon name="MessageCircle" size={24} className="text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-sm font-medium text-foreground">Talk to Someone</div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickAccessPortals;