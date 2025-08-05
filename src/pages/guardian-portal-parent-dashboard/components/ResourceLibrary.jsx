import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourceLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', icon: 'Grid3X3', count: 24 },
    { id: 'activities', name: 'Activities', icon: 'Gamepad2', count: 8 },
    { id: 'guides', name: 'Parent Guides', icon: 'BookOpen', count: 6 },
    { id: 'conversations', name: 'Conversation Starters', icon: 'MessageCircle', count: 5 },
    { id: 'meditations', name: 'Guided Meditations', icon: 'Headphones', count: 5 }
  ];

  const resources = [
    {
      id: 1,
      title: "Bedtime Breathing Adventure",
      description: "A printable story guide that teaches the 4-7-8 breathing technique through a magical journey to the Cloud Kingdom.",
      category: "activities",
      type: "PDF Guide",
      duration: "15 min",
      ageRange: "6-10 years",
      downloads: 1247,
      rating: 4.9,
      thumbnail: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?w=300&h=200&fit=crop",
      tags: ["Breathing", "Sleep", "Storytelling"],
      featured: true
    },
    {
      id: 2,
      title: "Emotion Weather Station Kit",
      description: "Help your child identify and express emotions with this interactive weather-themed activity set including charts and stickers.",
      category: "activities",
      type: "Activity Kit",
      duration: "20 min",
      ageRange: "7-12 years",
      downloads: 892,
      rating: 4.8,
      thumbnail: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?w=300&h=200&fit=crop",
      tags: ["Emotions", "Self-Awareness", "Creative"],
      featured: false
    },
    {
      id: 3,
      title: "Mindful Parenting Conversation Guide",
      description: "Age-appropriate ways to discuss mindfulness, emotions, and mental wellness with your child. Includes 50+ conversation starters.",
      category: "conversations",
      type: "PDF Guide",
      duration: "Reference",
      ageRange: "All Ages",
      downloads: 2156,
      rating: 4.9,
      thumbnail: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?w=300&h=200&fit=crop",
      tags: ["Communication", "Parenting", "Reference"],
      featured: true
    },
    {
      id: 4,
      title: "Morning Mindfulness Routine Chart",
      description: "A colorful, customizable chart to help establish healthy morning mindfulness habits with your child.",
      category: "guides",
      type: "Printable Chart",
      duration: "Daily Use",
      ageRange: "5-12 years",
      downloads: 1543,
      rating: 4.7,
      thumbnail: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?w=300&h=200&fit=crop",
      tags: ["Routine", "Habits", "Morning"],
      featured: false
    },
    {
      id: 5,
      title: "Gratitude Garden Audio Journey",
      description: "A 10-minute guided meditation that takes children on a magical journey through a gratitude garden to cultivate thankfulness.",
      category: "meditations",
      type: "Audio MP3",
      duration: "10 min",
      ageRange: "6-12 years",
      downloads: 987,
      rating: 4.8,
      thumbnail: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?w=300&h=200&fit=crop",
      tags: ["Gratitude", "Meditation", "Audio"],
      featured: false
    },
    {
      id: 6,
      title: "Understanding Your Child\'s Emotional Development",
      description: "A comprehensive guide explaining emotional milestones, warning signs, and how mindfulness supports healthy development.",
      category: "guides",
      type: "PDF Guide",
      duration: "30 min read",
      ageRange: "Parent Resource",
      downloads: 1876,
      rating: 4.9,
      thumbnail: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?w=300&h=200&fit=crop",
      tags: ["Development", "Psychology", "Education"],
      featured: true
    }
  ];

  const filteredResources = resources?.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource?.category === selectedCategory;
    const matchesSearch = resource?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         resource?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         resource?.tags?.some(tag => tag?.toLowerCase()?.includes(searchTerm?.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources?.filter(resource => resource?.featured);

  return (
    <div className="glass rounded-2xl p-6 shadow-cosmic">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center">
            <Icon name="Download" size={24} className="text-warning" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-foreground">Resource Library</h2>
            <p className="text-sm text-text-secondary">Downloadable guides, activities, and tools</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          iconName="ExternalLink"
          iconPosition="right"
          className="border-warning/30 text-warning hover:bg-warning/10"
        >
          Browse All
        </Button>
      </div>
      {/* Search and Filter */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e?.target?.value)}
              className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="flex space-x-2 overflow-x-auto">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setSelectedCategory(category?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                selectedCategory === category?.id
                  ? 'bg-accent text-background' :'bg-surface/30 text-text-secondary hover:bg-accent/20 hover:text-accent'
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span className="text-sm font-medium">{category?.name}</span>
              <span className="text-xs bg-background/20 px-2 py-0.5 rounded-full">
                {category?.count}
              </span>
            </button>
          ))}
        </div>
      </div>
      {/* Featured Resources */}
      {selectedCategory === 'all' && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Featured Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredResources?.map((resource) => (
              <div key={resource?.id} className="bg-accent/5 rounded-xl p-4 border border-accent/20 relative">
                <div className="absolute top-2 right-2">
                  <span className="bg-accent text-background text-xs px-2 py-1 rounded-full font-medium">
                    Featured
                  </span>
                </div>
                
                <div className="mb-4">
                  <img
                    src={resource?.thumbnail}
                    alt={resource?.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{resource?.title}</h4>
                    <p className="text-sm text-text-secondary line-clamp-2">{resource?.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-text-secondary">
                    <span>{resource?.type}</span>
                    <span>{resource?.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={12} className="text-warning fill-current" />
                        <span className="text-xs font-medium text-foreground">{resource?.rating}</span>
                      </div>
                      <span className="text-xs text-text-secondary">({resource?.downloads} downloads)</span>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Download"
                      className="text-accent hover:bg-accent/20"
                    >
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* All Resources */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">
            {selectedCategory === 'all' ? 'All Resources' : categories?.find(c => c?.id === selectedCategory)?.name}
          </h3>
          <span className="text-sm text-text-secondary">
            {filteredResources?.length} resources found
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources?.map((resource) => (
            <div key={resource?.id} className="bg-surface/20 rounded-xl p-6 border border-border hover:border-accent/30 transition-all duration-300 group">
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={resource?.thumbnail}
                    alt={resource?.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {resource?.title}
                    </h4>
                    {resource?.featured && (
                      <Icon name="Star" size={16} className="text-warning fill-current flex-shrink-0 ml-2" />
                    )}
                  </div>
                  
                  <p className="text-sm text-text-secondary mb-3 line-clamp-2">{resource?.description}</p>
                  
                  <div className="flex items-center space-x-4 text-xs text-text-secondary mb-3">
                    <div className="flex items-center space-x-1">
                      <Icon name="FileText" size={12} />
                      <span>{resource?.type}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={12} />
                      <span>{resource?.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={12} />
                      <span>{resource?.ageRange}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {resource?.tags?.slice(0, 2)?.map((tag, index) => (
                        <span key={index} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Icon name="Download" size={12} className="text-text-secondary" />
                        <span className="text-xs text-text-secondary">{resource?.downloads}</span>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        iconName="Download"
                        className="text-accent hover:bg-accent/20"
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {filteredResources?.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-surface/30 flex items-center justify-center mx-auto mb-4">
            <Icon name="Search" size={32} className="text-text-secondary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">No resources found</h3>
          <p className="text-text-secondary">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default ResourceLibrary;