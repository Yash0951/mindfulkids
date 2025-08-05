import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import QuickAccessPortals from './components/QuickAccessPortals';
import ProgressConstellation from './components/ProgressConstellation';
import FeaturedActivities from './components/FeaturedActivities';
import CommunityShowcase from './components/CommunityShowcase';
import ParentSection from './components/ParentSection';
import Icon from '../../components/AppIcon';

const Homepage = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [isChildMode, setIsChildMode] = useState(true);

  useEffect(() => {
    // Check for saved user preferences
    const savedMode = localStorage.getItem('mindfulkids_user_mode');
    if (savedMode) {
      setIsChildMode(savedMode === 'child');
    }
  }, []);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    // Save mood selection for personalization
    localStorage.setItem('mindfulkids_current_mood', JSON.stringify(mood));
  };

  const toggleUserMode = () => {
    const newMode = !isChildMode;
    setIsChildMode(newMode);
    localStorage.setItem('mindfulkids_user_mode', newMode ? 'child' : 'parent');
  };

  return (
    <div className="min-h-screen bg-cosmic-dark text-foreground">
      {/* Header */}
      <Header />
      {/* User Mode Toggle */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed top-20 right-4 z-40"
      >
        <button
          onClick={toggleUserMode}
          className={`
            flex items-center space-x-2 px-4 py-2 rounded-full glass backdrop-blur-md
            transition-all duration-300 hover:shadow-glow-sm
            ${isChildMode 
              ? 'bg-gradient-to-r from-conversion/20 to-accent/20 border border-conversion/40' :'bg-gradient-to-r from-accent/20 to-success/20 border border-accent/40'
            }
          `}
        >
          <Icon 
            name={isChildMode ? "Baby" : "User"} 
            size={16} 
            className={isChildMode ? "text-conversion" : "text-accent"} 
          />
          <span className="text-sm font-medium text-foreground">
            {isChildMode ? "Child Mode" : "Parent Mode"}
          </span>
        </button>
      </motion.div>
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection onMoodSelect={handleMoodSelect} />

        {/* Quick Access Portals */}
        <QuickAccessPortals selectedMood={selectedMood} />

        {/* Progress Constellation - Only show for returning users or in child mode */}
        {isChildMode && <ProgressConstellation />}

        {/* Featured Activities */}
        <FeaturedActivities selectedMood={selectedMood} />

        {/* Community Showcase */}
        <CommunityShowcase />

        {/* Parent Section - Show more prominently in parent mode */}
        <ParentSection />

        {/* Seasonal Content Preview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 px-4 bg-gradient-to-b from-cosmic-dark to-cosmic-primary"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              ❄️ Winter Wonderland Activities
            </h2>
            <p className="text-xl text-text-secondary font-accent mb-8">
              Special seasonal mindfulness adventures that celebrate the magic of winter
            </p>
            
            <div className="glass rounded-2xl p-8 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 border border-cyan-400/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Icon name="Snowflake" size={32} className="text-cyan-400 mx-auto mb-3" />
                  <h3 className="font-heading font-bold text-foreground mb-2">Snowflake Breathing</h3>
                  <p className="text-sm text-text-secondary">Watch your breath create beautiful snowflake patterns</p>
                </div>
                
                <div className="text-center">
                  <Icon name="Gift" size={32} className="text-conversion mx-auto mb-3" />
                  <h3 className="font-heading font-bold text-foreground mb-2">Gratitude Gifts</h3>
                  <p className="text-sm text-text-secondary">Wrap up thankful thoughts as special presents</p>
                </div>
                
                <div className="text-center">
                  <Icon name="Star" size={32} className="text-yellow-400 mx-auto mb-3" />
                  <h3 className="font-heading font-bold text-foreground mb-2">Winter Wishes</h3>
                  <p className="text-sm text-text-secondary">Send kind wishes to friends and family</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      {/* Footer */}
      <footer className="py-16 px-4 bg-cosmic-dark border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-magical-gradient flex items-center justify-center">
                  <Icon name="Sparkles" size={20} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground">MindfulKids</h3>
                  <p className="text-sm font-accent text-text-secondary">Cosmic Wellness</p>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Transforming mindfulness education into magical adventures for children aged 6-12. 
                Building emotional intelligence through wonder and play.
              </p>
              <div className="flex space-x-4">
                <Icon name="Heart" size={20} className="text-conversion" />
                <Icon name="Star" size={20} className="text-accent" />
                <Icon name="Sparkles" size={20} className="text-success" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-bold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/interactive-games-hub-mindfulness-activities" className="block text-text-secondary hover:text-accent transition-colors duration-300 text-sm">
                  Activities
                </a>
                <a href="/guardian-portal-parent-dashboard" className="block text-text-secondary hover:text-accent transition-colors duration-300 text-sm">
                  Parent Portal
                </a>
                <a href="/contact-the-starry-goodbye" className="block text-text-secondary hover:text-accent transition-colors duration-300 text-sm">
                  Contact Us
                </a>
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-heading font-bold text-foreground mb-4">Support</h4>
              <div className="space-y-2">
                <div className="text-text-secondary text-sm">Help Center</div>
                <div className="text-text-secondary text-sm">Safety & Privacy</div>
                <div className="text-text-secondary text-sm">Community Guidelines</div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-text-secondary text-sm">
              © {new Date()?.getFullYear()} MindfulKids. All rights reserved.
            </div>
            <div className="text-text-secondary text-sm mt-4 md:mt-0">
              Made with ❤️ for mindful families everywhere
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;