import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ParentSection = () => {
  const researchPoints = [
    {
      icon: 'Brain',
      title: 'Improved Emotional Regulation',
      description: 'Studies show 73% improvement in children\'s ability to manage emotions after 8 weeks of mindfulness practice.',
      color: 'text-purple-400'
    },
    {
      icon: 'Heart',
      title: 'Reduced Anxiety & Stress',
      description: 'Regular mindfulness practice reduces cortisol levels by up to 23% in children aged 6-12.',
      color: 'text-pink-400'
    },
    {
      icon: 'Target',
      title: 'Enhanced Focus & Attention',
      description: 'Children show 40% improvement in sustained attention tasks after mindfulness training.',
      color: 'text-cyan-400'
    },
    {
      icon: 'Users',
      title: 'Better Social Skills',
      description: 'Mindful children demonstrate increased empathy and improved peer relationships.',
      color: 'text-green-400'
    }
  ];

  const safetyFeatures = [
    {
      icon: 'Shield',
      title: 'COPPA Compliant',
      description: 'Full compliance with children\'s privacy protection laws'
    },
    {
      icon: 'Eye',
      title: 'Parental Oversight',
      description: 'Complete visibility into your child\'s activities and progress'
    },
    {
      icon: 'Lock',
      title: 'Secure Environment',
      description: 'No chat features, external links, or personal data collection'
    },
    {
      icon: 'UserCheck',
      title: 'Expert Approved',
      description: 'Content reviewed by child psychologists and educators'
    }
  ];

  const screenTimeQuality = [
    {
      title: 'Educational Value',
      description: 'Every minute spent builds emotional intelligence and coping skills',
      percentage: 95
    },
    {
      title: 'Active Engagement',
      description: 'Interactive activities that require participation, not passive consumption',
      percentage: 88
    },
    {
      title: 'Positive Impact',
      description: 'Measurable improvements in mood, behavior, and self-regulation',
      percentage: 92
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-twilight-blue to-cosmic-dark">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            For Parents Who Care About Screen Time Quality
          </h2>
          <p className="text-xl text-text-secondary font-accent max-w-3xl mx-auto">
            Finally, screen time that actually nurtures your child's well-being. Research-backed mindfulness activities disguised as magical adventures.
          </p>
        </motion.div>

        {/* Research-Backed Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-heading font-bold text-foreground text-center mb-8">
            The Science Behind the Magic
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchPoints?.map((point, index) => (
              <motion.div
                key={point?.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:shadow-glow-sm transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-conversion/20 flex items-center justify-center flex-shrink-0">
                    <Icon name={point?.icon} size={24} className={point?.color} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-2">
                      {point?.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {point?.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Screen Time Quality Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-8">
              Screen Time That Actually Matters
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {screenTimeQuality?.map((metric, index) => (
                <motion.div
                  key={metric?.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-surface"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - metric?.percentage / 100)}`}
                        className="text-accent transition-all duration-1000"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent">{metric?.percentage}%</span>
                    </div>
                  </div>
                  <h4 className="font-heading font-bold text-foreground mb-2">
                    {metric?.title}
                  </h4>
                  <p className="text-text-secondary text-sm">
                    {metric?.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Safety & Privacy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-heading font-bold text-foreground text-center mb-8">
            Your Child's Safety is Our Priority
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyFeatures?.map((feature, index) => (
              <motion.div
                key={feature?.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 glass rounded-2xl hover:shadow-glow-sm transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-success/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature?.icon} size={24} className="text-success" />
                </div>
                <h4 className="font-heading font-bold text-foreground mb-2">
                  {feature?.title}
                </h4>
                <p className="text-text-secondary text-sm">
                  {feature?.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Parent Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-6">
                Track Progress, Celebrate Growth
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="BarChart3" size={20} className="text-accent" />
                  <span className="text-text-secondary">Real-time progress tracking and insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Calendar" size={20} className="text-conversion" />
                  <span className="text-text-secondary">Daily practice streaks and milestones</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Award" size={20} className="text-success" />
                  <span className="text-text-secondary">Achievement badges and celebration moments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MessageSquare" size={20} className="text-warning" />
                  <span className="text-text-secondary">Expert guidance and parenting tips</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/guardian-portal-parent-dashboard">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-cosmic-dark shadow-glow-sm hover:shadow-glow-md font-cta font-semibold"
                    iconName="ArrowRight"
                    iconPosition="right"
                    iconSize={20}
                  >
                    Explore Parent Portal
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass rounded-2xl p-6 bg-gradient-to-br from-accent/10 to-conversion/10">
                <Image
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&h=400&fit=crop"
                  alt="Parent Dashboard Preview"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/60 to-transparent rounded-2xl" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-white">
                    <h4 className="font-heading font-bold mb-2">Dashboard Preview</h4>
                    <p className="text-sm opacity-90">Track your child's mindfulness journey with detailed insights and progress reports.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-8 bg-gradient-to-br from-conversion/10 to-accent/10">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Ready to Transform Screen Time?
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Join thousands of families who have discovered the magic of mindful screen time. Start your child's journey to emotional wellness today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-conversion hover:bg-conversion/90 text-conversion-foreground shadow-glow-sm hover:shadow-glow-md font-cta font-semibold"
                iconName="Play"
                iconPosition="left"
                iconSize={20}
              >
                Start Free Trial
              </Button>
              
              <Link to="/guardian-portal-parent-dashboard">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent/10 font-cta font-semibold"
                  iconName="Info"
                  iconPosition="left"
                  iconSize={20}
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ParentSection;