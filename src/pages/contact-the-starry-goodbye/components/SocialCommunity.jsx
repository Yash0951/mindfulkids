import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialCommunity = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const socialLinks = [
    {
      platform: 'Instagram',
      handle: '@mindfulkids',
      followers: '25.2K',
      icon: 'Instagram',
      color: 'text-pink-400',
      description: 'Daily mindfulness tips & family activities'
    },
    {
      platform: 'Facebook',
      handle: 'MindfulKids Community',
      followers: '18.5K',
      icon: 'Facebook',
      color: 'text-blue-400',
      description: 'Parent discussions & success stories'
    },
    {
      platform: 'YouTube',
      handle: 'MindfulKids Channel',
      followers: '12.8K',
      icon: 'Youtube',
      color: 'text-red-400',
      description: 'Guided meditations & tutorials'
    },
    {
      platform: 'TikTok',
      handle: '@mindfulkids_official',
      followers: '8.9K',
      icon: 'Music',
      color: 'text-purple-400',
      description: 'Quick mindfulness moments'
    }
  ];

  const communityHighlights = [
    {
      type: 'success_story',
      author: 'Sarah M.',
      content: `"My 8-year-old now uses breathing exercises before tests. His anxiety has decreased so much!"`,
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop',
      likes: 127,
      timeAgo: '2 days ago'
    },
    {
      type: 'expert_tip',
      author: 'Dr. Maya Patel',
      content: `"Remember: consistency matters more than duration. Even 3 minutes daily creates lasting benefits."`,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      likes: 89,
      timeAgo: '1 week ago'
    },
    {
      type: 'child_artwork',
      author: 'Emma, age 7',
      content: `"I drew my happy place where I go when I feel worried. It has rainbow clouds and singing birds!"`,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      likes: 156,
      timeAgo: '3 days ago'
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e?.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div className="space-y-8">
      {/* Social Media Links */}
      <div className="glass p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-conversion/20 rounded-full flex items-center justify-center">
            <Icon name="Users" size={24} color="var(--color-conversion)" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
            Join Our Community
          </h3>
          <p className="text-text-secondary">
            Connect with thousands of mindful families worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {socialLinks?.map((social) => (
            <div
              key={social?.platform}
              className="bg-surface/50 rounded-lg p-4 hover:bg-surface transition-colors duration-300 cursor-pointer group"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={social?.icon} size={20} className={social?.color} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-foreground">{social?.platform}</h4>
                    <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                      {social?.followers}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary">{social?.handle}</p>
                  <p className="text-xs text-text-secondary mt-1">{social?.description}</p>
                </div>
                <Icon name="ExternalLink" size={16} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Community Highlights */}
      <div className="glass p-8 rounded-3xl">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
            Community Highlights ✨
          </h3>
          <p className="text-text-secondary">
            Recent shares from our mindful community
          </p>
        </div>

        <div className="space-y-6">
          {communityHighlights?.map((highlight, index) => (
            <div key={index} className="bg-surface/50 rounded-lg p-6 hover:bg-surface transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={highlight?.image}
                    alt={`${highlight?.author} profile`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-foreground">{highlight?.author}</h4>
                    {highlight?.type === 'expert_tip' && (
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                        Expert
                      </span>
                    )}
                    {highlight?.type === 'child_artwork' && (
                      <span className="text-xs bg-conversion/20 text-conversion px-2 py-1 rounded-full">
                        Young Artist
                      </span>
                    )}
                  </div>
                  <p className="text-text-secondary mb-3 leading-relaxed">
                    {highlight?.content}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={16} className="text-conversion" />
                      <span>{highlight?.likes}</span>
                    </div>
                    <span>{highlight?.timeAgo}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Button
            variant="outline"
            className="border-accent text-accent hover:bg-accent/10"
            iconName="ExternalLink"
            iconPosition="right"
          >
            View More Stories
          </Button>
        </div>
      </div>
      {/* Newsletter Signup */}
      <div className="glass p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-success/20 rounded-full flex items-center justify-center">
            <Icon name="Mail" size={24} color="var(--color-success)" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
            Weekly Family Activities
          </h3>
          <p className="text-text-secondary">
            Get mindfulness activities, expert tips, and platform updates delivered to your inbox
          </p>
        </div>

        {isSubscribed ? (
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-success/20 rounded-full flex items-center justify-center">
              <Icon name="CheckCircle" size={24} color="var(--color-success)" />
            </div>
            <h4 className="text-lg font-semibold text-success mb-2">Welcome to the Family!</h4>
            <p className="text-text-secondary">
              You'll receive your first mindful activity guide within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex space-x-3">
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
                className="flex-1"
                required
              />
              <Button
                type="submit"
                variant="default"
                className="bg-success hover:bg-success/90 text-success-foreground"
                iconName="Send"
                disabled={!email}
              >
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-text-secondary mt-3 text-center">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default SocialCommunity;