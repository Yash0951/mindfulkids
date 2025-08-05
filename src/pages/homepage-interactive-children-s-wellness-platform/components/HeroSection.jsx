import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onMoodSelect }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedMood, setSelectedMood] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const getTimeBasedGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) {
      return "Good morning, little explorer!";
    } else if (hour < 18) {
      return "Good afternoon, magical friend!";
    } else {
      return "Ready for some peaceful magic?";
    }
  };

  const moodOptions = [
    { emoji: "😊", label: "Happy", color: "text-yellow-400", bgColor: "bg-yellow-400/20" },
    { emoji: "😢", label: "Sad", color: "text-blue-400", bgColor: "bg-blue-400/20" },
    { emoji: "😠", label: "Angry", color: "text-red-400", bgColor: "bg-red-400/20" },
    { emoji: "😰", label: "Worried", color: "text-purple-400", bgColor: "bg-purple-400/20" },
    { emoji: "😴", label: "Tired", color: "text-indigo-400", bgColor: "bg-indigo-400/20" },
    { emoji: "🤗", label: "Excited", color: "text-pink-400", bgColor: "bg-pink-400/20" }
  ];

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    onMoodSelect(mood);
  };

  const floatingElements = [
    { icon: "Cloud", delay: 0, duration: 4 },
    { icon: "Star", delay: 1, duration: 5 },
    { icon: "Heart", delay: 2, duration: 6 },
    { icon: "Sparkles", delay: 0.5, duration: 4.5 }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cosmic-dark via-cosmic-primary to-twilight-blue">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingElements?.map((element, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${20 + (index * 20)}%`,
              top: `${10 + (index * 15)}%`
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: element?.duration,
              delay: element?.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon 
              name={element?.icon} 
              size={32} 
              className="text-accent/30 drop-shadow-lg" 
            />
          </motion.div>
        ))}
      </div>
      {/* Magical Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)]?.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Time-based Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-4">
            {getTimeBasedGreeting()}
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary font-accent">
            Welcome to your magical mindfulness journey
          </p>
        </motion.div>

        {/* 3D Interactive Elements Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12 relative"
        >
          <div className="w-80 h-80 mx-auto relative">
            {/* Central Breathing Cloud */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-accent/20 to-conversion/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center shadow-magical">
                <Icon name="Cloud" size={64} className="text-accent" />
              </div>
            </motion.div>

            {/* Orbiting Elements */}
            {[0, 1, 2]?.map((index) => (
              <motion.div
                key={index}
                className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-conversion/30 to-accent/30 backdrop-blur-sm border border-conversion/40 flex items-center justify-center"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0'
                }}
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 8 + index * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                initial={{
                  x: `${120 + index * 20}px`,
                  y: `-${8 + index * 4}px`
                }}
              >
                <Icon 
                  name={["Star", "Heart", "Sparkles"]?.[index]} 
                  size={24} 
                  className="text-conversion" 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mood Check-in Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Icon name="Smile" size={32} className="text-accent mr-3" />
              <h2 className="text-2xl font-heading font-bold text-foreground">
                How are you feeling today?
              </h2>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {moodOptions?.map((mood, index) => (
                <motion.button
                  key={mood?.label}
                  onClick={() => handleMoodSelect(mood)}
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    selectedMood?.label === mood?.label
                      ? `${mood?.bgColor} ring-2 ring-accent shadow-glow-sm`
                      : 'bg-surface/50 hover:bg-surface/80'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-3xl mb-2">{mood?.emoji}</div>
                  <div className={`text-sm font-medium ${mood?.color}`}>
                    {mood?.label}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            variant="default"
            size="lg"
            className="bg-conversion hover:bg-conversion/90 text-conversion-foreground shadow-glow-sm hover:shadow-glow-md font-cta font-semibold"
            iconName="Play"
            iconPosition="left"
            iconSize={20}
          >
            Start Your Adventure
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent/10 font-cta font-semibold"
            iconName="Heart"
            iconPosition="left"
            iconSize={20}
          >
            Calm Corner
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;