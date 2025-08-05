import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const MessageBottle = () => {
  const [childMessage, setChildMessage] = useState({
    name: '',
    age: '',
    message: '',
    emoji: '',
    drawing: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emojiOptions = ['😊', '🌟', '🦄', '🌈', '🎨', '🎵', '🌙', '⭐', '🎈', '🌸'];

  const handleSubmit = (e) => {
    e?.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setChildMessage({ name: '', age: '', message: '', emoji: '', drawing: null });
    }, 3000);
  };

  const handleEmojiSelect = (emoji) => {
    setChildMessage(prev => ({ ...prev, emoji }));
  };

  if (isSubmitted) {
    return (
      <div className="glass p-8 rounded-3xl text-center">
        <div className="w-20 h-20 mx-auto mb-6 bg-magical-gradient rounded-full flex items-center justify-center animate-bounce">
          <Icon name="Sparkles" size={32} color="white" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-accent mb-4">
          Your message is floating to us! ✨
        </h3>
        <p className="text-text-secondary">
          Thank you for sharing your magical thoughts with us!
        </p>
      </div>
    );
  }

  return (
    <div className="glass p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 bg-conversion/20 rounded-full flex items-center justify-center">
          <Icon name="MessageCircle" size={24} color="var(--color-conversion)" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
          Message in a Bottle 🍼
        </h3>
        <p className="text-text-secondary">
          Send us your magical thoughts and drawings!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Your magical name"
            type="text"
            placeholder="What should we call you?"
            value={childMessage?.name}
            onChange={(e) => setChildMessage(prev => ({ ...prev, name: e?.target?.value }))}
            required
          />
          <Input
            label="How old are you?"
            type="number"
            placeholder="Your age"
            min="6"
            max="12"
            value={childMessage?.age}
            onChange={(e) => setChildMessage(prev => ({ ...prev, age: e?.target?.value }))}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Pick your favorite emoji ✨
          </label>
          <div className="grid grid-cols-5 gap-3">
            {emojiOptions?.map((emoji, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleEmojiSelect(emoji)}
                className={`w-12 h-12 rounded-xl text-2xl transition-all duration-300 hover:scale-110 ${
                  childMessage?.emoji === emoji
                    ? 'bg-accent/20 ring-2 ring-accent shadow-glow-sm'
                    : 'bg-surface hover:bg-accent/10'
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Tell us your magical story
          </label>
          <textarea
            className="w-full h-32 px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-text-secondary resize-none focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
            placeholder="What's your favorite activity? What new magic would you like to see?"
            value={childMessage?.message}
            onChange={(e) => setChildMessage(prev => ({ ...prev, message: e?.target?.value }))}
            required
          />
        </div>

        <div className="text-center">
          <Button
            type="submit"
            variant="default"
            className="bg-conversion hover:bg-conversion/90 text-conversion-foreground shadow-glow-sm hover:shadow-glow-md"
            iconName="Send"
            iconPosition="right"
            disabled={!childMessage?.name || !childMessage?.age || !childMessage?.message}
          >
            Send My Message ✨
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MessageBottle;