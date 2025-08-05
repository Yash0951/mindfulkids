import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      category: 'Safety & Privacy',
      questions: [
        {
          question: 'How do you protect my child\'s privacy and data?',
          answer: `We take child privacy seriously and are fully COPPA compliant. We collect minimal data (only what's needed for the experience), never share personal information with third parties, and give parents full control over their child's account. All data is encrypted and stored securely.\n\nParents can view, download, or delete their child's data at any time through the Guardian Portal.`
        },
        {
          question: 'Is the content age-appropriate and safe?',
          answer: `All content is designed by child psychologists and reviewed by our safety team. We use positive, non-triggering language and imagery. There are no chat features or ways for children to communicate with strangers.\n\nIf you ever encounter content that concerns you, please contact us immediately at safety@mindfulkids.com.`
        }
      ]
    },
    {
      category: 'Screen Time & Usage',
      questions: [
        {
          question: 'How much screen time is recommended?',
          answer: `We recommend 10-15 minutes per day for optimal benefits without screen time concerns. The platform includes built-in break reminders and encourages offline practice.\n\nMany activities can be done away from the screen once learned, and we provide printable resources for screen-free mindfulness.`
        },
        {
          question: 'Can children use this independently?',
          answer: `Children ages 8+ can typically navigate independently, while younger children (6-7) benefit from initial parent guidance. The interface is designed to be intuitive, with large buttons and clear visual cues.\n\nWe always recommend parent involvement for the best family mindfulness experience.`
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          question: 'What devices and browsers are supported?',
          answer: `MindfulKids works on tablets, smartphones, and computers. We support:\n• iOS 12+ (Safari, Chrome)\n• Android 8+ (Chrome, Firefox)\n• Desktop: Chrome, Firefox, Safari, Edge\n\nFor the best experience, we recommend tablets or larger screens for children.`
        },
        {
          question: 'What if we experience technical issues?',
          answer: `Most issues can be resolved by refreshing the page or restarting the app. For persistent problems:\n1. Check your internet connection\n2. Clear browser cache\n3. Try a different browser\n4. Contact our support team at help@mindfulkids.com\n\nWe typically respond within 24 hours.`
        }
      ]
    },
    {
      category: 'Educational Use',
      questions: [
        {
          question: 'Can teachers use this in classrooms?',
          answer: `Yes! We offer special educational licensing with features like:\n• Bulk student accounts\n• Progress tracking for teachers\n• Curriculum alignment guides\n• Professional development resources\n\nContact education@mindfulkids.com for more information.`
        },
        {
          question: 'Is there research supporting the approach?',
          answer: `Our methods are based on established mindfulness research and child development principles. We partner with universities to study effectiveness and continuously improve our approach.\n\nResearch shows that mindfulness can improve attention, emotional regulation, and overall well-being in children.`
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const faqKey = `${categoryIndex}-${questionIndex}`;
    setOpenFAQ(openFAQ === faqKey ? null : faqKey);
  };

  return (
    <div className="glass p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 bg-warning/20 rounded-full flex items-center justify-center">
          <Icon name="HelpCircle" size={24} color="var(--color-warning)" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
          Frequently Asked Questions
        </h3>
        <p className="text-text-secondary">
          Common questions from mindful families like yours
        </p>
      </div>
      <div className="space-y-6">
        {faqData?.map((category, categoryIndex) => (
          <div key={category?.category}>
            <h4 className="text-lg font-heading font-semibold text-accent mb-4 flex items-center">
              <Icon name="Folder" size={18} className="mr-2" />
              {category?.category}
            </h4>
            
            <div className="space-y-3">
              {category?.questions?.map((faq, questionIndex) => {
                const faqKey = `${categoryIndex}-${questionIndex}`;
                const isOpen = openFAQ === faqKey;
                
                return (
                  <div
                    key={questionIndex}
                    className="bg-surface/50 rounded-lg border border-border overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface/70 transition-colors duration-300"
                    >
                      <span className="font-medium text-foreground pr-4">
                        {faq?.question}
                      </span>
                      <Icon
                        name={isOpen ? "ChevronUp" : "ChevronDown"}
                        size={20}
                        className={`text-accent transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-4">
                        <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                          {faq?.answer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-accent/10 rounded-lg text-center">
        <p className="text-sm text-text-secondary mb-2">
          Still have questions? We're here to help!
        </p>
        <p className="text-sm">
          <Icon name="Mail" size={16} className="inline mr-2 text-accent" />
          <span className="font-semibold text-accent">support@mindfulkids.com</span>
          <span className="mx-4 text-border">|</span>
          <Icon name="Phone" size={16} className="inline mr-2 text-accent" />
          <span className="font-semibold text-accent">1-800-MINDFUL</span>
        </p>
      </div>
    </div>
  );
};

export default FAQSection;