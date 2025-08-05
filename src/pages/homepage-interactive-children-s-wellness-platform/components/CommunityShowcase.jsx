import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CommunityShowcase = () => {
  const artworkGallery = [
    {
      id: 1,
      title: "My Breathing Cloud",
      artist: "Emma, age 8",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      description: "I drew my breathing cloud friend who helps me feel calm",
      likes: 24,
      category: "Breathing Art"
    },
    {
      id: 2,
      title: "Rainbow of Feelings",
      artist: "Marcus, age 10",
      image: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?w=300&h=300&fit=crop",
      description: "All my emotions are like colors in a beautiful rainbow",
      likes: 31,
      category: "Emotion Art"
    },
    {
      id: 3,
      title: "Kindness Garden",
      artist: "Sofia, age 7",
      image: "https://images.pixabay.com/photo/2018/04/03/22/49/flower-3288473_1280.jpg?w=300&h=300&fit=crop",
      description: "My garden where kindness flowers grow every day",
      likes: 18,
      category: "Kindness Art"
    },
    {
      id: 4,
      title: "Worry Warriors",
      artist: "Alex, age 9",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      description: "Me and my friends are brave warriors against worries",
      likes: 27,
      category: "Courage Art"
    }
  ];

  const testimonials = [
    {
      id: 1,
      text: `My daughter has been using MindfulKids for 3 months now. The change in her ability to self-regulate emotions is remarkable. She actually asks to do her 'breathing adventures' before bed!`,
      author: "Sarah M.",
      role: "Parent of 7-year-old",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5
    },
    {
      id: 2,
      text: `As a school counselor, I've seen firsthand how these activities help children develop emotional intelligence. The kids love the magical theme and don't even realize they're learning crucial life skills.`,
      author: "Dr. Jennifer L.",
      role: "Elementary School Counselor",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5
    },
    {
      id: 3,
      text: `The progress tracking feature helps me understand my son's emotional patterns. It's wonderful to see his confidence grow as he collects stars and unlocks new activities.`,
      author: "Michael R.",
      role: "Parent of 9-year-old",
      avatar: "https://randomuser.me/api/portraits/men/28.jpg",
      rating: 5
    }
  ];

  const monthlyChallenge = {
    title: "December Gratitude Galaxy",
    description: "This month, we're exploring the power of gratitude! Share what you're thankful for and help light up our gratitude constellation.",
    participants: 1247,
    daysLeft: 18,
    icon: "Star",
    color: "from-yellow-400/20 to-amber-400/20",
    borderColor: "border-yellow-400/40"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="py-20 px-4 bg-gradient-to-b from-cosmic-primary to-twilight-blue">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our Magical Community
          </h2>
          <p className="text-xl text-text-secondary font-accent max-w-2xl mx-auto">
            See the amazing artwork and stories from children around the world who are on their mindfulness journey
          </p>
        </motion.div>

        {/* Monthly Challenge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className={`glass rounded-2xl p-8 bg-gradient-to-br ${monthlyChallenge?.color} border ${monthlyChallenge?.borderColor} text-center`}>
            <div className="flex items-center justify-center mb-4">
              <Icon name={monthlyChallenge?.icon} size={32} className="text-yellow-400 mr-3" />
              <h3 className="text-2xl font-heading font-bold text-foreground">
                {monthlyChallenge?.title}
              </h3>
            </div>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              {monthlyChallenge?.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">{monthlyChallenge?.participants}</div>
                <div className="text-sm text-text-secondary">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-conversion mb-1">{monthlyChallenge?.daysLeft}</div>
                <div className="text-sm text-text-secondary">Days Left</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Artwork Gallery */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-heading font-bold text-foreground text-center mb-8">
            Children's Mindfulness Art Gallery
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {artworkGallery?.map((artwork) => (
              <motion.div
                key={artwork?.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="glass rounded-2xl overflow-hidden hover:shadow-glow-md transition-all duration-300 group-hover:scale-105">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={artwork?.image}
                      alt={artwork?.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/60 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 px-2 py-1 bg-accent/80 text-cosmic-dark text-xs font-bold rounded-full">
                      {artwork?.category}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="font-heading font-bold text-foreground mb-1">
                      {artwork?.title}
                    </h4>
                    <p className="text-sm text-accent mb-2">by {artwork?.artist}</p>
                    <p className="text-xs text-text-secondary mb-3 leading-relaxed">
                      {artwork?.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Icon name="Heart" size={16} className="text-conversion" />
                        <span className="text-sm text-text-secondary">{artwork?.likes}</span>
                      </div>
                      <Icon name="Star" size={16} className="text-accent" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Parent Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-heading font-bold text-foreground text-center mb-8">
            What Parents & Educators Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials?.map((testimonial, index) => (
              <motion.div
                key={testimonial?.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:shadow-glow-sm transition-all duration-300"
              >
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-accent" />
                  ))}
                </div>
                
                <blockquote className="text-text-secondary text-sm leading-relaxed mb-4">
                  "{testimonial?.text}"
                </blockquote>
                
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-heading font-bold text-foreground text-sm">
                      {testimonial?.author}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {testimonial?.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-8">
              Growing Together Every Day
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">15,000+</div>
                <div className="text-sm text-text-secondary">Happy Children</div>
                <Icon name="Users" size={24} className="text-accent mx-auto" />
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-conversion">500,000+</div>
                <div className="text-sm text-text-secondary">Activities Completed</div>
                <Icon name="CheckCircle" size={24} className="text-conversion mx-auto" />
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-success">2,500+</div>
                <div className="text-sm text-text-secondary">Artworks Shared</div>
                <Icon name="Palette" size={24} className="text-success mx-auto" />
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-warning">95%</div>
                <div className="text-sm text-text-secondary">Parent Satisfaction</div>
                <Icon name="ThumbsUp" size={24} className="text-warning mx-auto" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityShowcase;