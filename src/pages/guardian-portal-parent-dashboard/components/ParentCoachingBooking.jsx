import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ParentCoachingBooking = () => {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [sessionType, setSessionType] = useState('');
  const [bookingStep, setBookingStep] = useState(1);

  const experts = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Child Psychologist",
      specialties: ["Emotional Regulation", "Anxiety Management", "Sleep Issues"],
      rating: 4.9,
      reviews: 127,
      experience: "12+ years",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      bio: `Dr. Chen specializes in helping children develop emotional intelligence through mindfulness practices. She has extensive experience working with families to create sustainable wellness routines.`,
      nextAvailable: "Tomorrow",
      sessionTypes: ["Individual Consultation", "Family Session", "Follow-up Check-in"]
    },
    {
      id: 2,
      name: "Dr. Michael Rodriguez",
      role: "Developmental Specialist",
      specialties: ["ADHD Support", "Social Skills", "Behavioral Guidance"],
      rating: 4.8,
      reviews: 89,
      experience: "8+ years",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
      bio: `Dr. Rodriguez focuses on neurodevelopmental approaches to mindfulness, helping children with attention challenges find their unique path to inner calm.`,
      nextAvailable: "This Week",
      sessionTypes: ["ADHD-Focused Session", "Parent Guidance", "School Collaboration"]
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      role: "Family Therapist",
      specialties: ["Family Dynamics", "Sibling Relationships", "Parenting Strategies"],
      rating: 4.9,
      reviews: 156,
      experience: "15+ years",
      avatar: "https://images.unsplash.com/photo-1594824475317-8b7b3b6e8e8e?w=100&h=100&fit=crop&crop=face",
      bio: `Dr. Watson works with entire family systems to create harmonious environments where mindfulness can flourish naturally for all members.`,
      nextAvailable: "Next Week",
      sessionTypes: ["Family Therapy", "Parenting Workshop", "Crisis Support"]
    }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM", "7:00 PM", "8:00 PM"
  ];

  const sessionTypeOptions = [
    { value: "consultation", label: "Initial Consultation (60 min)" },
    { value: "follow-up", label: "Follow-up Session (45 min)" },
    { value: "family", label: "Family Session (90 min)" },
    { value: "crisis", label: "Crisis Support (30 min)" }
  ];

  const handleExpertSelect = (expert) => {
    setSelectedExpert(expert);
    setBookingStep(2);
  };

  const handleBookingConfirm = () => {
    setBookingStep(3);
  };

  if (bookingStep === 3) {
    return (
      <div className="glass rounded-2xl p-6 shadow-cosmic">
        <div className="text-center py-8">
          <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
            <Icon name="CheckCircle" size={40} className="text-success" />
          </div>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Booking Confirmed!</h2>
          <p className="text-text-secondary mb-6">
            Your session with {selectedExpert?.name} has been scheduled successfully.
          </p>
          
          <div className="bg-surface/20 rounded-xl p-6 border border-border mb-6 max-w-md mx-auto">
            <div className="space-y-3 text-left">
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">Expert:</span>
                <span className="text-sm font-medium text-foreground">{selectedExpert?.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">Date:</span>
                <span className="text-sm font-medium text-foreground">{selectedDate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">Time:</span>
                <span className="text-sm font-medium text-foreground">{selectedTime}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">Session Type:</span>
                <span className="text-sm font-medium text-foreground">
                  {sessionTypeOptions?.find(opt => opt?.value === sessionType)?.label}
                </span>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 justify-center">
            <Button
              variant="default"
              className="bg-accent hover:bg-accent/90"
              iconName="Calendar"
              iconPosition="left"
            >
              Add to Calendar
            </Button>
            <Button
              variant="outline"
              className="border-success/30 text-success hover:bg-success/10"
              onClick={() => setBookingStep(1)}
            >
              Book Another
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-6 shadow-cosmic">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-conversion/20 flex items-center justify-center">
            <Icon name="Calendar" size={24} className="text-conversion" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-foreground">Parent Coaching</h2>
            <p className="text-sm text-text-secondary">Book a session with our mindfulness experts</p>
          </div>
        </div>
        
        {bookingStep > 1 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setBookingStep(bookingStep - 1)}
            iconName="ArrowLeft"
            iconPosition="left"
            className="text-text-secondary hover:text-accent"
          >
            Back
          </Button>
        )}
      </div>
      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-4">
          {[1, 2, 3]?.map((step) => (
            <React.Fragment key={step}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                bookingStep >= step 
                  ? 'bg-accent text-background' :'bg-surface/30 text-text-secondary'
              }`}>
                {step}
              </div>
              {step < 3 && (
                <div className={`w-8 h-0.5 ${
                  bookingStep > step ? 'bg-accent' : 'bg-surface/30'
                }`}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      {bookingStep === 1 && (
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">Choose Your Expert</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experts?.map((expert) => (
              <div
                key={expert?.id}
                className="bg-surface/20 rounded-xl p-6 border border-border hover:border-accent/30 transition-all duration-300 cursor-pointer group"
                onClick={() => handleExpertSelect(expert)}
              >
                <div className="text-center mb-4">
                  <img
                    src={expert?.avatar}
                    alt={expert?.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto mb-3"
                  />
                  <h4 className="font-bold text-foreground mb-1">{expert?.name}</h4>
                  <p className="text-sm text-accent font-medium mb-2">{expert?.role}</p>
                  <p className="text-xs text-text-secondary">{expert?.experience} experience</p>
                </div>

                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={14} className="text-warning fill-current" />
                    <span className="text-sm font-medium text-foreground">{expert?.rating}</span>
                  </div>
                  <span className="text-xs text-text-secondary">({expert?.reviews} reviews)</span>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-xs font-medium text-foreground">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {expert?.specialties?.map((specialty, index) => (
                      <span key={index} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-text-secondary mb-4 line-clamp-3">{expert?.bio}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} className="text-success" />
                    <span className="text-xs text-success font-medium">{expert?.nextAvailable}</span>
                  </div>
                  <Icon name="ChevronRight" size={16} className="text-accent group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {bookingStep === 2 && selectedExpert && (
        <div>
          <div className="flex items-center space-x-4 mb-6 p-4 bg-surface/20 rounded-xl border border-border">
            <img
              src={selectedExpert?.avatar}
              alt={selectedExpert?.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold text-foreground">{selectedExpert?.name}</h3>
              <p className="text-sm text-accent">{selectedExpert?.role}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Session Type</label>
                <Select
                  options={sessionTypeOptions}
                  value={sessionType}
                  onChange={setSessionType}
                  placeholder="Choose session type"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Preferred Date</label>
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e?.target?.value)}
                  min={new Date()?.toISOString()?.split('T')?.[0]}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Additional Notes (Optional)</label>
                <textarea
                  className="w-full p-3 bg-input border border-border rounded-lg text-foreground placeholder-text-secondary resize-none"
                  rows={4}
                  placeholder="Share any specific concerns or topics you'd like to discuss..."
                ></textarea>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-3">Available Times</label>
              <div className="grid grid-cols-2 gap-3">
                {timeSlots?.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedTime === time
                        ? 'bg-accent text-background' :'bg-surface/30 text-foreground hover:bg-accent/20 hover:text-accent border border-border'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              {selectedDate && selectedTime && sessionType && (
                <div className="mt-6 p-4 bg-accent/5 rounded-xl border border-accent/20">
                  <h4 className="font-semibold text-foreground mb-3">Booking Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Date:</span>
                      <span className="text-foreground font-medium">{selectedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Time:</span>
                      <span className="text-foreground font-medium">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Duration:</span>
                      <span className="text-foreground font-medium">
                        {sessionTypeOptions?.find(opt => opt?.value === sessionType)?.label?.match(/\((.+)\)/)?.[1]}
                      </span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-border">
                      <span className="text-text-secondary">Cost:</span>
                      <span className="text-accent font-bold">Free Consultation</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <Button
              variant="default"
              className="bg-conversion hover:bg-conversion/90"
              onClick={handleBookingConfirm}
              disabled={!selectedDate || !selectedTime || !sessionType}
              iconName="Calendar"
              iconPosition="left"
            >
              Confirm Booking
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParentCoachingBooking;