import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import MessageBottle from './components/MessageBottle';
import ParentContactForm from './components/ParentContactForm';
import EducatorInquiry from './components/EducatorInquiry';
import ConstellationMap from './components/ConstellationMap';
import FAQSection from './components/FAQSection';
import SocialCommunity from './components/SocialCommunity';

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState('children');

  const contactTabs = [
    {
      id: 'children',
      label: 'For Kids',
      icon: 'Sparkles',
      description: 'Share your magical thoughts'
    },
    {
      id: 'parents',
      label: 'For Parents',
      icon: 'Shield',
      description: 'Support & guidance'
    },
    {
      id: 'educators',
      label: 'For Schools',
      icon: 'GraduationCap',
      description: 'Educational partnerships'
    }
  ];

  const quickContactOptions = [
    {
      title: 'Emergency Support',
      description: 'Immediate help for urgent concerns',
      icon: 'Phone',
      contact: '1-800-MINDFUL',
      color: 'text-error',
      bgColor: 'bg-error/10'
    },
    {
      title: 'General Support',
      description: 'Questions, feedback, and assistance',
      icon: 'Mail',
      contact: 'support@mindfulkids.com',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      title: 'Partnership Inquiries',
      description: 'Business and collaboration opportunities',
      icon: 'Handshake',
      contact: 'partnerships@mindfulkids.com',
      color: 'text-success',
      bgColor: 'bg-success/10'
    }
  ];

  const responseTimeInfo = [
    { type: 'Children Messages', time: '24-48 hours', priority: 'High' },
    { type: 'Parent Inquiries', time: '2-24 hours', priority: 'High' },
    { type: 'Safety Concerns', time: 'Immediate', priority: 'Critical' },
    { type: 'Educational Requests', time: '48 hours', priority: 'Medium' },
    { type: 'General Questions', time: '24-72 hours', priority: 'Standard' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-magical-gradient rounded-full flex items-center justify-center shadow-glow-md animate-float">
              <Icon name="MessageCircle" size={32} color="white" />
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              {[...Array(6)]?.map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-accent rounded-full animate-pulse"
                  style={{
                    top: `${Math.sin(i * 60 * Math.PI / 180) * 40}px`,
                    left: `${Math.cos(i * 60 * Math.PI / 180) * 40}px`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            The Starry Goodbye ✨
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
            Every conversation is a constellation waiting to be born. Share your thoughts, 
            questions, and magical moments with our caring community of mindfulness guides.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="default"
              className="bg-conversion hover:bg-conversion/90 text-conversion-foreground shadow-glow-sm hover:shadow-glow-md"
              iconName="Sparkles"
              iconPosition="left"
              onClick={() => setActiveTab('children')}
            >
              Kids Start Here
            </Button>
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
              iconName="Shield"
              iconPosition="left"
              onClick={() => setActiveTab('parents')}
            >
              Parent Portal
            </Button>
          </div>
        </div>
      </section>
      {/* Quick Contact Options */}
      <section className="py-16 px-4 lg:px-8 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Need Help Right Away?
            </h2>
            <p className="text-text-secondary">
              Choose the fastest way to reach our support team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickContactOptions?.map((option, index) => (
              <div key={index} className="glass p-6 rounded-2xl text-center hover:shadow-glow-sm transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-4 ${option?.bgColor} rounded-full flex items-center justify-center`}>
                  <Icon name={option?.icon} size={24} className={option?.color} />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {option?.title}
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  {option?.description}
                </p>
                <div className={`text-sm font-semibold ${option?.color}`}>
                  {option?.contact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Tabs */}
      <section className="py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Choose Your Communication Portal
            </h2>
            <p className="text-text-secondary">
              Different paths for different needs - all leading to the same caring support
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {contactTabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                  activeTab === tab?.id
                    ? 'bg-accent text-accent-foreground shadow-glow-sm'
                    : 'bg-surface/50 text-text-primary hover:bg-surface hover:text-accent'
                }`}
              >
                <Icon 
                  name={tab?.icon} 
                  size={20} 
                  className={activeTab === tab?.id ? 'text-accent-foreground' : 'text-accent'} 
                />
                <div className="text-left">
                  <div className="font-semibold">{tab?.label}</div>
                  <div className="text-xs opacity-80">{tab?.description}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'children' && <MessageBottle />}
            {activeTab === 'parents' && <ParentContactForm />}
            {activeTab === 'educators' && <EducatorInquiry />}
          </div>
        </div>
      </section>
      {/* Constellation Map */}
      <section className="py-16 px-4 lg:px-8 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <ConstellationMap />
        </div>
      </section>
      {/* Response Time Information */}
      <section className="py-16 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 rounded-3xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-warning/20 rounded-full flex items-center justify-center">
                <Icon name="Clock" size={24} color="var(--color-warning)" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                Response Time Guide
              </h3>
              <p className="text-text-secondary">
                What to expect when you reach out to us
              </p>
            </div>

            <div className="space-y-4">
              {responseTimeInfo?.map((info, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-surface/50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${
                      info?.priority === 'Critical' ? 'bg-error' :
                      info?.priority === 'High' ? 'bg-warning' :
                      info?.priority === 'Medium' ? 'bg-accent' : 'bg-success'
                    }`} />
                    <span className="font-medium text-foreground">{info?.type}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-accent">{info?.time}</div>
                    <div className="text-xs text-text-secondary">{info?.priority} Priority</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-accent/10 rounded-lg text-center">
              <p className="text-sm text-text-secondary">
                <Icon name="Info" size={16} className="inline mr-2 text-accent" />
                All times are business hours (9 AM - 6 PM EST, Monday-Friday). 
                Emergency support available 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 px-4 lg:px-8 bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <FAQSection />
        </div>
      </section>
      {/* Social Community */}
      <section className="py-16 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SocialCommunity />
        </div>
      </section>
      {/* Footer CTA */}
      <section className="py-16 px-4 lg:px-8 bg-magical-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Icon name="Heart" size={48} color="white" className="mx-auto mb-4" />
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Thank You for Being Part of Our Story
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Every message, every question, every shared moment helps us create 
              a more mindful world for children everywhere.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="secondary"
              className="bg-white/20 text-white border-white/30 hover:bg-white/30"
              iconName="Home"
              iconPosition="left"
            >
              Return Home
            </Button>
            <Button
              variant="secondary"
              className="bg-white/20 text-white border-white/30 hover:bg-white/30"
              iconName="Gamepad2"
              iconPosition="left"
            >
              Explore Activities
            </Button>
          </div>
        </div>
      </section>
      {/* Copyright Footer */}
      <footer className="py-8 px-4 lg:px-8 bg-cosmic-dark border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-text-secondary text-sm">
            © {new Date()?.getFullYear()} MindfulKids. All rights reserved. 
            <span className="mx-2">•</span>
            Made with <Icon name="Heart" size={14} className="inline text-conversion" /> for mindful families worldwide.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;