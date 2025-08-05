import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WisdomKeeperInsights = () => {
  const [selectedArticle, setSelectedArticle] = useState(0);

  const articles = [
    {
      id: 1,
      title: "The Magic of Emotional Regulation in Children",
      author: "Dr. Sarah Chen",
      role: "Child Psychologist",
      readTime: "5 min read",
      category: "Development",
      publishDate: "December 2024",
      excerpt: `Understanding how mindfulness practices support your child's developing emotional regulation skills and why consistency matters more than perfection.`,content: `Children's brains are still developing the neural pathways necessary for emotional regulation. When we introduce mindfulness practices early, we're essentially giving them tools to build these pathways more effectively.\n\nThe key insight for parents is that emotional regulation isn't about suppressing feelings—it's about developing the ability to notice, understand, and respond to emotions in healthy ways. Your child's daily mood check-ins and breathing exercises are actually strengthening their prefrontal cortex, the brain region responsible for executive function.\n\nWhat's particularly exciting is that children who practice mindfulness show improved emotional resilience within just 4-6 weeks of consistent practice. The 'magical' elements in your child's activities aren't just fun—they're scientifically designed to engage the parts of the brain that support emotional learning.`,
      tags: ["Emotional Intelligence", "Brain Development", "Mindfulness"],
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      title: "Building Resilience Through Play-Based Mindfulness",
      author: "Dr. Michael Rodriguez",
      role: "Developmental Specialist",
      readTime: "7 min read",
      category: "Resilience",
      publishDate: "November 2024",
      excerpt: `Discover how gamified mindfulness activities create lasting neural changes that help children bounce back from challenges with greater confidence.`,
      content: `Resilience isn't something children are born with—it's a skill that develops through experience and practice. When mindfulness is presented as play, children naturally engage with concepts that might otherwise feel abstract or difficult.\n\nThe constellation progress system your child uses isn't just motivational—it's teaching them that growth happens gradually, one small step at a time. This understanding becomes crucial when they face real-world challenges.\n\nResearch shows that children who engage in regular mindfulness play demonstrate increased stress tolerance, better problem-solving skills, and improved social relationships. The 'magical' framing helps them internalize these practices as personal superpowers rather than imposed requirements.`,
      tags: ["Resilience", "Play Therapy", "Stress Management"],
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      title: "The Science Behind Bedtime Breathing Routines",
      author: "Dr. Emily Watson",
      role: "Sleep Specialist",
      readTime: "4 min read",
      category: "Sleep",
      publishDate: "October 2024",
      excerpt: `Learn why evening mindfulness practices are particularly powerful for children's sleep quality and overall well-being.`,
      content: `The transition from day to night can be challenging for children's nervous systems. Evening mindfulness practices help activate the parasympathetic nervous system, naturally preparing the body for rest.\n\nYour child's evening breathing exercises are particularly effective because they coincide with natural circadian rhythms. The 4-7-8 breathing pattern specifically helps lower heart rate and blood pressure while increasing feelings of calm.\n\nParents often report that children who practice evening mindfulness fall asleep faster, experience fewer nightmares, and wake up more refreshed. This isn't coincidence—it's the result of training the nervous system to transition smoothly between states of arousal and rest.`,
      tags: ["Sleep Health", "Breathing Techniques", "Circadian Rhythms"],
      avatar: "https://images.unsplash.com/photo-1594824475317-8b7b3b6e8e8e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const currentArticle = articles?.[selectedArticle];

  return (
    <div className="glass rounded-2xl p-6 shadow-cosmic">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center">
            <Icon name="BookOpen" size={24} className="text-warning" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-foreground">Wisdom Keeper Insights</h2>
            <p className="text-sm text-text-secondary">Expert guidance for your mindfulness journey</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          iconName="ExternalLink"
          iconPosition="right"
          className="border-warning/30 text-warning hover:bg-warning/10"
        >
          View Library
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Article List */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold text-foreground mb-4">Latest Articles</h3>
          <div className="space-y-3">
            {articles?.map((article, index) => (
              <div
                key={article?.id}
                onClick={() => setSelectedArticle(index)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedArticle === index
                    ? 'bg-accent/10 border border-accent/30' :'bg-surface/30 border border-border hover:border-accent/20 hover:bg-accent/5'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <img
                    src={article?.avatar}
                    alt={article?.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-sm mb-1 line-clamp-2">
                      {article?.title}
                    </h4>
                    <p className="text-xs text-text-secondary mb-2">
                      By {article?.author} • {article?.readTime}
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        article?.category === 'Development' ? 'bg-success/20 text-success' :
                        article?.category === 'Resilience'? 'bg-conversion/20 text-conversion' : 'bg-accent/20 text-accent'
                      }`}>
                        {article?.category}
                      </span>
                      {selectedArticle === index && (
                        <Icon name="ChevronRight" size={12} className="text-accent" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <div className="lg:col-span-2">
          <div className="bg-surface/20 rounded-xl p-6 border border-border">
            <div className="flex items-start space-x-4 mb-6">
              <img
                src={currentArticle?.avatar}
                alt={currentArticle?.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">{currentArticle?.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-text-secondary mb-3">
                  <span>By {currentArticle?.author}</span>
                  <span>•</span>
                  <span>{currentArticle?.role}</span>
                  <span>•</span>
                  <span>{currentArticle?.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {currentArticle?.tags?.map((tag, index) => (
                    <span key={index} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-text-secondary italic mb-4 text-sm border-l-2 border-accent/30 pl-4">
                {currentArticle?.excerpt}
              </p>
              
              <div className="text-sm text-foreground leading-relaxed space-y-4">
                {currentArticle?.content?.split('\n\n')?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Heart"
                  iconPosition="left"
                  className="text-text-secondary hover:text-conversion"
                >
                  Helpful
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Share2"
                  iconPosition="left"
                  className="text-text-secondary hover:text-accent"
                >
                  Share
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Bookmark"
                  iconPosition="left"
                  className="text-text-secondary hover:text-warning"
                >
                  Save
                </Button>
              </div>
              
              <span className="text-xs text-text-secondary">{currentArticle?.publishDate}</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-success/5 rounded-xl p-4 border border-success/20">
              <div className="flex items-center space-x-3 mb-3">
                <Icon name="Calendar" size={20} className="text-success" />
                <h4 className="font-semibold text-foreground">Book Consultation</h4>
              </div>
              <p className="text-sm text-text-secondary mb-3">
                Schedule a one-on-one session with our child psychology experts
              </p>
              <Button
                variant="outline"
                size="sm"
                fullWidth
                className="border-success/30 text-success hover:bg-success/10"
              >
                Schedule Session
              </Button>
            </div>

            <div className="bg-accent/5 rounded-xl p-4 border border-accent/20">
              <div className="flex items-center space-x-3 mb-3">
                <Icon name="Download" size={20} className="text-accent" />
                <h4 className="font-semibold text-foreground">Resource Library</h4>
              </div>
              <p className="text-sm text-text-secondary mb-3">
                Access printable guides, activities, and conversation starters
              </p>
              <Button
                variant="outline"
                size="sm"
                fullWidth
                className="border-accent/30 text-accent hover:bg-accent/10"
              >
                Browse Resources
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WisdomKeeperInsights;