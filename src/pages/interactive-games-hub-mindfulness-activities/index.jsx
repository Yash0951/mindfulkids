import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

import RealmSection from './components/RealmSection';
import MoodCheckIn from './components/MoodCheckIn';
import ProgressConstellation from './components/ProgressConstellation';
import QuickAccessPanel from './components/QuickAccessPanel';

const InteractiveGamesHub = () => {
  const [currentMood, setCurrentMood] = useState(null);
  const [selectedRealm, setSelectedRealm] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [showMoodCheckIn, setShowMoodCheckIn] = useState(true);

  // Mock user progress data
  const userProgress = {
    breathingActivities: 8,
    emotionActivities: 5,
    kindnessActivities: 3,
    focusActivities: 12,
    gratitudeActivities: 4,
    totalActivitiesCompleted: 32,
    currentStreak: 7,
    level: 'Explorer'
  };

  // Mock recent activities
  const recentActivities = [
    {
      id: 'breathing-garden-1',
      name: 'Flower Breathing',
      icon: 'Flower',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      progress: 75,
      lastPlayed: '2 hours ago'
    },
    {
      id: 'emotion-weather-2',
      name: 'Storm Calming',
      icon: 'Cloud',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      progress: 40,
      lastPlayed: 'Yesterday'
    },
    {
      id: 'kindness-kingdom-1',
      name: 'Kindness Quest',
      icon: 'Heart',
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
      progress: 90,
      lastPlayed: '3 days ago'
    }
  ];

  // Mock realms data
  const realms = [
    {
      name: 'Emotion Weather Station',
      description: 'Learn to understand and navigate your feelings like weather patterns',
      totalPlayers: 15420,
      completionRate: 78,
      recentPlayers: [
        { name: 'Emma', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
        { name: 'Liam', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
        { name: 'Sophia', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' }
      ],
      games: [
        {
          id: 'emotion-weather-1',
          title: 'Feeling Forecast',
          description: 'Identify your emotions and learn how they change like weather patterns throughout the day.',
          realm: 'Emotion Weather Station',
          difficulty: 'Beginner',
          duration: '5 min',
          playCount: 2340,
          rating: 4.8,
          progress: 0,
          isNew: true,
          previewImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
        },
        {
          id: 'emotion-weather-2',
          title: 'Storm Calming',
          description: 'Practice techniques to calm yourself when big emotions feel like thunderstorms.',
          realm: 'Emotion Weather Station',
          difficulty: 'Explorer',
          duration: '8 min',
          playCount: 1890,
          rating: 4.9,
          progress: 40,
          isNew: false,
          previewImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
        },
        {
          id: 'emotion-weather-3',
          title: 'Sunshine Maker',
          description: 'Discover activities that help bring sunshine back after cloudy emotional days.',
          realm: 'Emotion Weather Station',
          difficulty: 'Master',
          duration: '12 min',
          playCount: 1456,
          rating: 4.7,
          progress: 0,
          isNew: false,
          previewImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Kindness Kingdom',
      description: 'Embark on adventures that spread compassion and build empathy',
      totalPlayers: 12890,
      completionRate: 85,
      recentPlayers: [
        { name: 'Oliver', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
        { name: 'Ava', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' },
        { name: 'Noah', avatar: 'https://randomuser.me/api/portraits/men/6.jpg' }
      ],
      games: [
        {
          id: 'kindness-1',
          title: 'Kindness Quest',
          description: 'Complete daily acts of kindness and watch your compassion garden bloom with magical flowers.',
          realm: 'Kindness Kingdom',
          difficulty: 'Beginner',
          duration: '6 min',
          playCount: 3210,
          rating: 4.9,
          progress: 90,
          isNew: false,
          previewImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop'
        },
        {
          id: 'kindness-2',
          title: 'Empathy Explorer',
          description: 'Step into others\' shoes and discover how understanding different perspectives creates magic.',
          realm: 'Kindness Kingdom',
          difficulty: 'Explorer',
          duration: '10 min',
          playCount: 2567,
          rating: 4.8,
          progress: 25,
          isNew: true,
          previewImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Worry Warriors',
      description: 'Transform anxiety into strength through heroic mindfulness adventures',
      totalPlayers: 9876,
      completionRate: 72,
      recentPlayers: [
        { name: 'Isabella', avatar: 'https://randomuser.me/api/portraits/women/7.jpg' },
        { name: 'Mason', avatar: 'https://randomuser.me/api/portraits/men/8.jpg' },
        { name: 'Mia', avatar: 'https://randomuser.me/api/portraits/women/9.jpg' }
      ],
      games: [
        {
          id: 'worry-1',
          title: 'Worry Monster Tamer',
          description: 'Learn to befriend your worries instead of fighting them, turning anxiety into your ally.',
          realm: 'Worry Warriors',
          difficulty: 'Explorer',
          duration: '7 min',
          playCount: 1987,
          rating: 4.6,
          progress: 0,
          isNew: false,
          previewImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop'
        },
        {
          id: 'worry-2',
          title: 'Courage Castle',
          description: 'Build your bravery brick by brick as you face fears in a safe, magical environment.',
          realm: 'Worry Warriors',
          difficulty: 'Master',
          duration: '15 min',
          playCount: 1543,
          rating: 4.7,
          progress: 60,
          isNew: true,
          previewImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Breathing Gardens',
      description: 'Cultivate calm through magical breathing exercises in enchanted gardens',
      totalPlayers: 18765,
      completionRate: 91,
      recentPlayers: [
        { name: 'Ethan', avatar: 'https://randomuser.me/api/portraits/men/10.jpg' },
        { name: 'Charlotte', avatar: 'https://randomuser.me/api/portraits/women/11.jpg' },
        { name: 'James', avatar: 'https://randomuser.me/api/portraits/men/12.jpg' }
      ],
      games: [
        {
          id: 'breathing-1',
          title: 'Flower Breathing',
          description: 'Watch flowers bloom as you practice deep breathing, creating a beautiful garden of calm.',
          realm: 'Breathing Gardens',
          difficulty: 'Beginner',
          duration: '4 min',
          playCount: 4567,
          rating: 4.9,
          progress: 75,
          isNew: false,
          previewImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
        },
        {
          id: 'breathing-2',
          title: 'Tree of Tranquility',
          description: 'Grow a magical tree with your breath, watching it change with the seasons of your emotions.',
          realm: 'Breathing Gardens',
          difficulty: 'Explorer',
          duration: '8 min',
          playCount: 3456,
          rating: 4.8,
          progress: 30,
          isNew: false,
          previewImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
        },
        {
          id: 'breathing-3',
          title: 'Rainbow Breath',
          description: 'Paint the sky with colors as you learn advanced breathing techniques for different moods.',
          realm: 'Breathing Gardens',
          difficulty: 'Master',
          duration: '12 min',
          playCount: 2890,
          rating: 4.9,
          progress: 0,
          isNew: true,
          previewImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      name: 'Gratitude Galaxy',
      description: 'Explore the universe of appreciation and collect cosmic gratitude gems',
      totalPlayers: 11234,
      completionRate: 88,
      recentPlayers: [
        { name: 'Amelia', avatar: 'https://randomuser.me/api/portraits/women/13.jpg' },
        { name: 'Benjamin', avatar: 'https://randomuser.me/api/portraits/men/14.jpg' },
        { name: 'Harper', avatar: 'https://randomuser.me/api/portraits/women/15.jpg' }
      ],
      games: [
        {
          id: 'gratitude-1',
          title: 'Thankful Stars',
          description: 'Light up constellations by sharing what you\'re grateful for, creating your personal star map.',
          realm: 'Gratitude Galaxy',
          difficulty: 'Beginner',
          duration: '5 min',
          playCount: 2876,
          rating: 4.8,
          progress: 100,
          isNew: false,
          previewImage: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop'
        },
        {
          id: 'gratitude-2',
          title: 'Appreciation Asteroid',
          description: 'Collect gratitude gems as you explore different planets of thankfulness in your daily life.',
          realm: 'Gratitude Galaxy',
          difficulty: 'Explorer',
          duration: '9 min',
          playCount: 2134,
          rating: 4.7,
          progress: 45,
          isNew: true,
          previewImage: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop'
        }
      ]
    }
  ];

  const handleMoodSelect = (mood) => {
    setCurrentMood(mood);
    setShowMoodCheckIn(false);
    // Filter activities based on mood
    if (mood?.id === 'worried' || mood?.id === 'sad') {
      setSelectedRealm('calming');
    } else if (mood?.id === 'excited') {
      setSelectedRealm('energizing');
    }
  };

  const handleGamePlay = (game) => {
    setIsLoading(true);
    // Simulate game loading
    setTimeout(() => {
      setIsLoading(false);
      console.log('Starting game:', game?.title);
      // Here you would navigate to the actual game
    }, 1500);
  };

  const handleQuickAction = (action) => {
    console.log('Quick action:', action);
    // Handle different quick actions
    switch (action?.id) {
      case 'breathing':
        // Navigate to breathing exercise
        break;
      case 'calm':
        // Navigate to calm corner
        break;
      case 'gratitude':
        // Navigate to gratitude activity
        break;
      case 'focus':
        // Navigate to focus activity
        break;
      case 'continue':
        // Continue specific activity
        break;
      case 'daily-challenge':
        // Start daily challenge
        break;
      case 'explore':
        setShowMoodCheckIn(true);
        break;
      default:
        break;
    }
  };

  const getFilteredRealms = () => {
    if (selectedRealm === 'all') return realms;
    if (selectedRealm === 'calming') {
      return realms?.filter(realm => 
        realm?.name === 'Breathing Gardens' || 
        realm?.name === 'Emotion Weather Station'
      );
    }
    if (selectedRealm === 'energizing') {
      return realms?.filter(realm => 
        realm?.name === 'Kindness Kingdom' || 
        realm?.name === 'Gratitude Galaxy'
      );
    }
    return realms;
  };

  const getMoodBasedWelcome = () => {
    if (!currentMood) return "Welcome to your magical mindfulness adventure!";
    
    switch (currentMood?.id) {
      case 'excited':
        return "Your excitement is contagious! Let's channel that energy into amazing activities!";
      case 'happy':
        return "Your happiness lights up the whole galaxy! Ready for some joyful exploration?";
      case 'calm':
        return "Your peaceful energy is perfect for mindful adventures. Let's explore together!";
      case 'curious':
        return "Your curiosity is your superpower! So many discoveries await you!";
      case 'worried':
        return "I'm here to help you feel better. Let's find some gentle, calming activities together.";
      case 'sad':
        return "It's okay to feel sad sometimes. Let's find activities that might help lift your spirits.";
      default:
        return "Welcome to your magical mindfulness adventure!";
    }
  };

  useEffect(() => {
    // Check if user has completed mood check-in today
    const lastMoodCheckIn = localStorage.getItem('lastMoodCheckIn');
    const today = new Date()?.toDateString();
    
    if (lastMoodCheckIn === today) {
      setShowMoodCheckIn(false);
      const savedMood = localStorage.getItem('currentMood');
      if (savedMood) {
        setCurrentMood(JSON.parse(savedMood));
      }
    }
  }, []);

  useEffect(() => {
    if (currentMood) {
      localStorage.setItem('currentMood', JSON.stringify(currentMood));
      localStorage.setItem('lastMoodCheckIn', new Date()?.toDateString());
    }
  }, [currentMood]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="glass rounded-2xl p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/20 to-conversion/20 flex items-center justify-center animate-pulse">
              <Icon name="Sparkles" size={32} className="text-accent animate-spin" />
            </div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-2">
              Preparing Your Adventure
            </h3>
            <p className="text-sm text-text-secondary">
              Loading magical experiences...
            </p>
          </div>
        </div>
      )}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-16 px-4 lg:px-8 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-conversion/5" />
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)]?.map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-accent/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent/20 to-conversion/20 flex items-center justify-center animate-float">
                <Icon name="Gamepad2" size={40} className="text-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
                Interactive Games Hub
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-6">
                {getMoodBasedWelcome()}
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} className="text-accent" />
                  <span>50,000+ Young Explorers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={16} className="text-warning" />
                  <span>4.9/5 Parent Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-success" />
                  <span>100% Safe & Ad-Free</span>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Left Sidebar - Quick Access & Progress */}
              <div className="lg:col-span-1 space-y-6">
                <QuickAccessPanel 
                  onQuickAction={handleQuickAction}
                  recentActivities={recentActivities}
                />
                
                <ProgressConstellation 
                  userProgress={userProgress}
                  className="hidden lg:block"
                />
              </div>

              {/* Main Content Area */}
              <div className="lg:col-span-3 space-y-8">
                {/* Mood Check-in */}
                {showMoodCheckIn && (
                  <MoodCheckIn 
                    onMoodSelect={handleMoodSelect}
                    currentMood={currentMood}
                  />
                )}

                {/* Current Mood Display */}
                {currentMood && !showMoodCheckIn && (
                  <div className="glass rounded-2xl p-4 border border-border/50 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full ${currentMood?.bgColor} flex items-center justify-center`}>
                        <Icon name={currentMood?.icon} size={20} className={currentMood?.color} />
                      </div>
                      <div>
                        <span className="text-sm text-text-secondary">Current mood:</span>
                        <h3 className="font-semibold text-foreground">{currentMood?.name}</h3>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      className="text-text-secondary hover:text-foreground"
                      iconName="Edit"
                      iconSize={16}
                      onClick={() => setShowMoodCheckIn(true)}
                    >
                      Change
                    </Button>
                  </div>
                )}

                {/* Realm Filter */}
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: 'all', name: 'All Realms', icon: 'Globe' },
                    { id: 'calming', name: 'Calming', icon: 'Leaf' },
                    { id: 'energizing', name: 'Energizing', icon: 'Zap' }
                  ]?.map((filter) => (
                    <button
                      key={filter?.id}
                      onClick={() => setSelectedRealm(filter?.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                        selectedRealm === filter?.id
                          ? 'bg-accent/10 border-accent/30 text-accent' :'bg-card/30 border-border/30 text-text-secondary hover:text-foreground hover:border-border/50'
                      }`}
                    >
                      <Icon name={filter?.icon} size={16} />
                      <span className="font-medium">{filter?.name}</span>
                    </button>
                  ))}
                </div>

                {/* Realms */}
                <div className="space-y-12">
                  {getFilteredRealms()?.map((realm) => (
                    <RealmSection
                      key={realm?.name}
                      realm={realm}
                      onGamePlay={handleGamePlay}
                    />
                  ))}
                </div>

                {/* Mobile Progress Constellation */}
                <div className="lg:hidden">
                  <ProgressConstellation userProgress={userProgress} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 px-4 lg:px-8 bg-gradient-to-br from-accent/5 to-conversion/5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-conversion/20 to-accent/20 flex items-center justify-center animate-pulse">
              <Icon name="Heart" size={32} className="text-conversion" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Ready for More Adventures?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Join thousands of families discovering the magic of mindfulness through play. 
              Every activity is designed by child psychology experts to make well-being feel like wonder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/guardian-portal-parent-dashboard">
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  iconName="Shield"
                  iconPosition="left"
                  iconSize={16}
                >
                  Parent Dashboard
                </Button>
              </Link>
              <Link to="/contact-the-starry-goodbye">
                <Button
                  variant="default"
                  className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                  iconName="MessageCircle"
                  iconPosition="left"
                  iconSize={16}
                >
                  Get Support
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="py-8 px-4 lg:px-8 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-conversion/20 flex items-center justify-center">
                <Icon name="Sparkles" size={16} className="text-accent" />
              </div>
              <span className="font-heading font-bold text-foreground">MindfulKids</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-text-secondary">
              <Link to="/homepage-interactive-children-s-wellness-platform" className="hover:text-foreground transition-colors duration-300">
                Home
              </Link>
              <Link to="/guardian-portal-parent-dashboard" className="hover:text-foreground transition-colors duration-300">
                Parents
              </Link>
              <Link to="/contact-the-starry-goodbye" className="hover:text-foreground transition-colors duration-300">
                Contact
              </Link>
            </div>
            <p className="text-xs text-text-secondary mt-4 md:mt-0">
              © {new Date()?.getFullYear()} MindfulKids. Nurturing young minds with love.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InteractiveGamesHub;