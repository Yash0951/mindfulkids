import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const ParentContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    priority: 'normal',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const subjectOptions = [
    { value: 'technical', label: 'Technical Support' },
    { value: 'billing', label: 'Billing & Subscriptions' },
    { value: 'safety', label: 'Child Safety Concern' },
    { value: 'partnership', label: 'Partnership Inquiry' },
    { value: 'feedback', label: 'General Feedback' },
    { value: 'other', label: 'Other' }
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low Priority' },
    { value: 'normal', label: 'Normal Priority' },
    { value: 'high', label: 'High Priority' },
    { value: 'urgent', label: 'Urgent (Safety Related)' }
  ];

  const handleSubmit = (e) => {
    e?.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        priority: 'normal',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="glass p-8 rounded-3xl text-center">
        <div className="w-20 h-20 mx-auto mb-6 bg-success/20 rounded-full flex items-center justify-center">
          <Icon name="CheckCircle" size={32} color="var(--color-success)" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-success mb-4">
          Message Received Successfully
        </h3>
        <p className="text-text-secondary mb-4">
          Thank you for reaching out. We'll respond within 24 hours for normal inquiries, or immediately for urgent safety concerns.
        </p>
        <div className="text-sm text-text-secondary bg-surface/50 rounded-lg p-4">
          <p><strong>Response Time:</strong> 2-24 hours</p>
          <p><strong>Reference ID:</strong> MK-{Date.now()?.toString()?.slice(-6)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="glass p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
          <Icon name="Shield" size={24} color="var(--color-primary)" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
          Parent & Guardian Contact
        </h3>
        <p className="text-text-secondary">
          We're here to support your family's mindfulness journey
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            type="text"
            placeholder="Your name"
            value={formData?.name}
            onChange={(e) => handleInputChange('name', e?.target?.value)}
            required
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@example.com"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            required
          />
        </div>

        <Input
          label="Phone Number (Optional)"
          type="tel"
          placeholder="+1 (555) 123-4567"
          value={formData?.phone}
          onChange={(e) => handleInputChange('phone', e?.target?.value)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Subject"
            options={subjectOptions}
            value={formData?.subject}
            onChange={(value) => handleInputChange('subject', value)}
            placeholder="Choose a topic"
            required
          />
          <Select
            label="Priority Level"
            options={priorityOptions}
            value={formData?.priority}
            onChange={(value) => handleInputChange('priority', value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Message Details
          </label>
          <textarea
            className="w-full h-32 px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-text-secondary resize-none focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
            placeholder="Please provide detailed information about your inquiry..."
            value={formData?.message}
            onChange={(e) => handleInputChange('message', e?.target?.value)}
            required
          />
        </div>

        {formData?.priority === 'urgent' && (
          <div className="bg-error/10 border border-error/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="AlertTriangle" size={20} color="var(--color-error)" className="mt-0.5" />
              <div>
                <h4 className="font-semibold text-error mb-1">Urgent Safety Concern</h4>
                <p className="text-sm text-text-secondary">
                  For immediate safety concerns, please also call our 24/7 support line: 
                  <span className="font-semibold text-foreground"> 1-800-MINDFUL</span>
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center">
          <Button
            type="submit"
            variant="default"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-sm hover:shadow-glow-md"
            iconName="Send"
            iconPosition="right"
            disabled={!formData?.name || !formData?.email || !formData?.subject || !formData?.message}
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ParentContactForm;