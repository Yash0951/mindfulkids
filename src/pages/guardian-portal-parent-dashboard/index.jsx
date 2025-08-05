import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import all components
import WeeklyEmotionalReport from './components/WeeklyEmotionalReport';
import ActivityInsights from './components/ActivityInsights';
import FamilyChallenges from './components/FamilyChallenges';
import WisdomKeeperInsights from './components/WisdomKeeperInsights';
import ChildProgressConstellation from './components/ChildProgressConstellation';
import ParentCoachingBooking from './components/ParentCoachingBooking';
import ResourceLibrary from './components/ResourceLibrary';
import PrivacyControls from './components/PrivacyControls';

const GuardianPortalParentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Update time every minute
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => {
      clearTimeout(timer);
      clearInterval(timeInterval);
    };
  }, []);

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'LayoutDashboard' },
    { id: 'progress', name: 'Progress', icon: 'TrendingUp' },
    { id: 'insights', name: 'Insights', icon: 'Brain' },
    { id: 'coaching', name: 'Coaching', icon: 'Users' },
    { id: 'resources', name: 'Resources', icon: 'BookOpen' },
    { id: 'settings', name: 'Settings', icon: 'Settings' }
  ];

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const quickStats = [
    {
      label: "Child\'s Mood Today",
      value: "😊 Happy",
      change: "+2 from yesterday",
      color: "success",
      icon: "Heart"
    },
    {
      label: "Weekly Sessions",
      value: "12",
      change: "+3 from last week",
      color: "accent",
      icon: "Zap"
    },
    {
      label: "Current Streak",
      value: "5 days",
      change: "Personal best: 12 days",
      color: "conversion",
      icon: "Trophy"
    },
    {
      label: "Stars Collected",
      value: "47/60",
      change: "78% complete",
      color: "warning",
      icon: "Star"
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Icon name="Sparkles" size={32} className="text-accent" />
          </div>
          <h2 className="text-xl font-heading font-bold text-foreground mb-2">Loading Guardian Portal</h2>
          <p className="text-text-secondary">Preparing your child's mindfulness insights...</p>
        </div>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <WeeklyEmotionalReport />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <FamilyChallenges />
              <ChildProgressConstellation />
            </div>
          </div>
        );
      case 'progress':
        return (
          <div className="space-y-8">
            <ChildProgressConstellation />
            <ActivityInsights />
          </div>
        );
      case 'insights':
        return (
          <div className="space-y-8">
            <WisdomKeeperInsights />
            <ActivityInsights />
          </div>
        );
      case 'coaching':
        return <ParentCoachingBooking />;
      case 'resources':
        return <ResourceLibrary />;
      case 'settings':
        return <PrivacyControls />;
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Guardian Portal - Parent Dashboard | MindfulKids</title>
        <meta name="description" content="Track your child's mindfulness journey with comprehensive insights, expert guidance, and family-friendly activities. Monitor progress, book coaching sessions, and access resources." />
        <meta name="keywords" content="parent dashboard, child mindfulness tracking, family wellness, mindfulness progress, parenting resources" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="relative py-12 px-4 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-conversion/5"></div>
            <div className="absolute top-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-conversion/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            
            <div className="relative max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-magical-gradient flex items-center justify-center shadow-glow-md">
                    <Icon name="Shield" size={32} className="text-white" />
                  </div>
                  <div className="text-left">
                    <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                      Guardian Portal
                    </h1>
                    <p className="text-lg text-accent font-medium">Your Child's Mindfulness Journey</p>
                  </div>
                </div>
                
                <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                  {getGreeting()}! Welcome to your comprehensive dashboard where mindfulness meets 
                  meaningful insights, helping you support your child's emotional growth.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {quickStats?.map((stat, index) => (
                  <div key={index} className={`glass rounded-2xl p-6 shadow-cosmic hover:shadow-glow-sm transition-all duration-300 border border-${stat?.color}/20`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-${stat?.color}/20 flex items-center justify-center`}>
                        <Icon name={stat?.icon} size={24} className={`text-${stat?.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-text-secondary mb-1">{stat?.label}</p>
                        <p className="text-xl font-bold text-foreground mb-1">{stat?.value}</p>
                        <p className={`text-xs text-${stat?.color}`}>{stat?.change}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Navigation Tabs */}
          <section className="px-4 lg:px-8 mb-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex space-x-1 bg-surface/20 rounded-2xl p-2 overflow-x-auto">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                      activeTab === tab?.id
                        ? 'bg-accent text-background shadow-inner-glow'
                        : 'text-text-secondary hover:text-accent hover:bg-accent/10'
                    }`}
                  >
                    <Icon name={tab?.icon} size={18} />
                    <span>{tab?.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Tab Content */}
          <section className="px-4 lg:px-8 pb-16">
            <div className="max-w-7xl mx-auto">
              {renderTabContent()}
            </div>
          </section>

          {/* Quick Actions Floating Button */}
          <div className="fixed bottom-8 right-8 z-40">
            <div className="relative group">
              <Button
                variant="default"
                size="lg"
                className="bg-conversion hover:bg-conversion/90 shadow-glow-md hover:shadow-glow-lg rounded-full w-14 h-14 p-0"
                iconName="Plus"
                iconSize={24}
              />
              
              {/* Quick Actions Menu */}
              <div className="absolute bottom-16 right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-card border border-border rounded-2xl p-4 shadow-cosmic min-w-48">
                  <div className="space-y-2">
                    <button className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-accent/10 hover:text-accent transition-colors duration-300 text-left">
                      <Icon name="Calendar" size={16} />
                      <span className="text-sm font-medium">Book Coaching</span>
                    </button>
                    <button className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-success/10 hover:text-success transition-colors duration-300 text-left">
                      <Icon name="Download" size={16} />
                      <span className="text-sm font-medium">Download Report</span>
                    </button>
                    <button className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-warning/10 hover:text-warning transition-colors duration-300 text-left">
                      <Icon name="Share2" size={16} />
                      <span className="text-sm font-medium">Share Progress</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-surface/20 border-t border-border py-8 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon name="Shield" size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">MindfulKids Guardian Portal</p>
                  <p className="text-xs text-text-secondary">Supporting your family's wellness journey</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-text-secondary">
                <button className="hover:text-accent transition-colors duration-300">Privacy Policy</button>
                <button className="hover:text-accent transition-colors duration-300">Support</button>
                <button className="hover:text-accent transition-colors duration-300">Feedback</button>
                <span>© {new Date()?.getFullYear()} MindfulKids</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default GuardianPortalParentDashboard;