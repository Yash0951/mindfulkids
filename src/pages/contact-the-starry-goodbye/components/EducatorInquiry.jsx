import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const EducatorInquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    role: '',
    studentCount: '',
    ageRange: '',
    interests: [],
    timeline: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const roleOptions = [
    { value: 'teacher', label: 'Classroom Teacher' },
    { value: 'counselor', label: 'School Counselor' },
    { value: 'principal', label: 'Principal/Administrator' },
    { value: 'coordinator', label: 'Wellness Coordinator' },
    { value: 'therapist', label: 'School Therapist' },
    { value: 'other', label: 'Other' }
  ];

  const ageRangeOptions = [
    { value: '6-7', label: 'Ages 6-7 (Grade 1-2)' },
    { value: '8-9', label: 'Ages 8-9 (Grade 3-4)' },
    { value: '10-12', label: 'Ages 10-12 (Grade 5-6)' },
    { value: 'mixed', label: 'Mixed Age Groups' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (This Month)' },
    { value: 'quarter', label: 'This Quarter' },
    { value: 'semester', label: 'Next Semester' },
    { value: 'year', label: 'Next School Year' },
    { value: 'exploring', label: 'Just Exploring' }
  ];

  const interestOptions = [
    'Classroom Licensing',
    'Bulk Account Setup',
    'Curriculum Integration',
    'Teacher Training',
    'Progress Tracking',
    'Parent Communication Tools'
  ];

  const handleSubmit = (e) => {
    e?.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        institution: '',
        role: '',
        studentCount: '',
        ageRange: '',
        interests: [],
        timeline: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestChange = (interest, checked) => {
    setFormData(prev => ({
      ...prev,
      interests: checked
        ? [...prev?.interests, interest]
        : prev?.interests?.filter(i => i !== interest)
    }));
  };

  if (isSubmitted) {
    return (
      <div className="glass p-8 rounded-3xl text-center">
        <div className="w-20 h-20 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center">
          <Icon name="GraduationCap" size={32} color="var(--color-accent)" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-accent mb-4">
          Educational Inquiry Received
        </h3>
        <p className="text-text-secondary mb-4">
          Thank you for your interest in bringing MindfulKids to your educational setting. Our education team will contact you within 48 hours.
        </p>
        <div className="text-sm text-text-secondary bg-surface/50 rounded-lg p-4">
          <p><strong>Next Steps:</strong> Personalized demo & pricing</p>
          <p><strong>Contact:</strong> education@mindfulkids.com</p>
        </div>
      </div>
    );
  }

  return (
    <div className="glass p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
          <Icon name="GraduationCap" size={24} color="var(--color-accent)" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
          Educational Institution Inquiry
        </h3>
        <p className="text-text-secondary">
          Bring mindfulness to your classroom with specialized tools and support
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Contact Name"
            type="text"
            placeholder="Your full name"
            value={formData?.name}
            onChange={(e) => handleInputChange('name', e?.target?.value)}
            required
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@school.edu"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            required
          />
        </div>

        <Input
          label="Institution Name"
          type="text"
          placeholder="School or organization name"
          value={formData?.institution}
          onChange={(e) => handleInputChange('institution', e?.target?.value)}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Your Role"
            options={roleOptions}
            value={formData?.role}
            onChange={(value) => handleInputChange('role', value)}
            placeholder="Select your position"
            required
          />
          <Input
            label="Number of Students"
            type="number"
            placeholder="Approximate count"
            value={formData?.studentCount}
            onChange={(e) => handleInputChange('studentCount', e?.target?.value)}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Student Age Range"
            options={ageRangeOptions}
            value={formData?.ageRange}
            onChange={(value) => handleInputChange('ageRange', value)}
            placeholder="Select age group"
            required
          />
          <Select
            label="Implementation Timeline"
            options={timelineOptions}
            value={formData?.timeline}
            onChange={(value) => handleInputChange('timeline', value)}
            placeholder="When do you plan to start?"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-4">
            Areas of Interest (Select all that apply)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {interestOptions?.map((interest) => (
              <Checkbox
                key={interest}
                label={interest}
                checked={formData?.interests?.includes(interest)}
                onChange={(e) => handleInterestChange(interest, e?.target?.checked)}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Additional Information
          </label>
          <textarea
            className="w-full h-32 px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-text-secondary resize-none focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
            placeholder="Tell us about your specific needs, current wellness programs, or any questions you have..."
            value={formData?.message}
            onChange={(e) => handleInputChange('message', e?.target?.value)}
          />
        </div>

        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={20} color="var(--color-accent)" className="mt-0.5" />
            <div>
              <h4 className="font-semibold text-accent mb-1">Educational Benefits</h4>
              <p className="text-sm text-text-secondary">
                Our platform includes progress tracking, curriculum alignment, teacher resources, and parent communication tools designed specifically for educational environments.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            type="submit"
            variant="default"
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow-sm hover:shadow-glow-md"
            iconName="Send"
            iconPosition="right"
            disabled={!formData?.name || !formData?.email || !formData?.institution || !formData?.role}
          >
            Request Information
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EducatorInquiry;