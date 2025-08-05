import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import Icon from '../AppIcon';

const Header = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Home',
      path: '/homepage-interactive-children-s-wellness-platform',
      icon: 'Home'
    },
    {
      name: 'Activities',
      path: '/interactive-games-hub-mindfulness-activities',
      icon: 'Gamepad2'
    },
    {
      name: 'Parent Portal',
      path: '/guardian-portal-parent-dashboard',
      icon: 'Shield'
    },
    {
      name: 'Contact',
      path: '/contact-the-starry-goodbye',
      icon: 'MessageCircle'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 magical ${
        isScrolled 
          ? 'glass shadow-cosmic backdrop-blur-md' 
          : 'bg-transparent'
      } ${className}`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage-interactive-children-s-wellness-platform" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-magical-gradient flex items-center justify-center shadow-glow-sm group-hover:shadow-glow-md transition-all duration-300">
                <Icon 
                  name="Sparkles" 
                  size={20} 
                  color="white" 
                  className="group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-heading font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                MindfulKids
              </h1>
              <p className="text-xs font-accent text-text-secondary -mt-1">
                Cosmic Wellness
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                  isActivePath(item?.path)
                    ? 'text-accent bg-accent/10 shadow-inner-glow'
                    : 'text-text-primary hover:text-accent hover:bg-accent/5'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon 
                    name={item?.icon} 
                    size={16} 
                    className={`transition-all duration-300 ${
                      isActivePath(item?.path) 
                        ? 'text-accent scale-110' :'group-hover:scale-110 group-hover:text-accent'
                    }`}
                  />
                  <span className="font-heading">{item?.name}</span>
                </div>
                {isActivePath(item?.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full animate-pulse"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              variant="default"
              className="bg-conversion hover:bg-conversion/90 text-conversion-foreground shadow-glow-sm hover:shadow-glow-md font-cta font-semibold"
              iconName="Sparkles"
              iconPosition="left"
              iconSize={16}
            >
              Start Journey
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-primary hover:text-accent hover:bg-accent/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="transition-transform duration-300" 
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-400 magical overflow-hidden ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' :'max-h-0 opacity-0'
          }`}
        >
          <div className="glass backdrop-blur-md border-t border-border">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActivePath(item?.path)
                      ? 'text-accent bg-accent/10 shadow-inner-glow'
                      : 'text-text-primary hover:text-accent hover:bg-accent/5'
                  }`}
                >
                  <Icon 
                    name={item?.icon} 
                    size={18} 
                    className={`transition-all duration-300 ${
                      isActivePath(item?.path) 
                        ? 'text-accent scale-110' :'hover:scale-110 hover:text-accent'
                    }`}
                  />
                  <span className="font-heading">{item?.name}</span>
                  {isActivePath(item?.path) && (
                    <div className="ml-auto w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  )}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-border">
                <Button
                  variant="default"
                  fullWidth
                  className="bg-conversion hover:bg-conversion/90 text-conversion-foreground shadow-glow-sm hover:shadow-glow-md font-cta font-semibold"
                  iconName="Sparkles"
                  iconPosition="left"
                  iconSize={16}
                >
                  Start Your Journey
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;