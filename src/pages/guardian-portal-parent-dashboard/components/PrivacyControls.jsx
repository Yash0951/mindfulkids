import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';
import Select from '../../../components/ui/Select';

const PrivacyControls = () => {
  const [dataSharing, setDataSharing] = useState({
    analytics: true,
    research: false,
    marketing: false,
    thirdParty: false
  });

  const [screenTimeSettings, setScreenTimeSettings] = useState({
    dailyLimit: '60',
    weeklyLimit: '420',
    breakReminders: true,
    bedtimeMode: true,
    bedtimeStart: '20:00',
    bedtimeEnd: '07:00'
  });

  const [childAutonomy, setChildAutonomy] = useState({
    selfReporting: true,
    activityChoice: true,
    progressSharing: false,
    friendConnections: false
  });

  const [notifications, setNotifications] = useState({
    progressUpdates: true,
    milestoneAlerts: true,
    weeklyReports: true,
    expertTips: true,
    emergencyAlerts: true
  });

  const dailyLimitOptions = [
    { value: '30', label: '30 minutes' },
    { value: '45', label: '45 minutes' },
    { value: '60', label: '1 hour' },
    { value: '90', label: '1.5 hours' },
    { value: '120', label: '2 hours' },
    { value: 'unlimited', label: 'No limit' }
  ];

  const weeklyLimitOptions = [
    { value: '210', label: '3.5 hours/week' },
    { value: '300', label: '5 hours/week' },
    { value: '420', label: '7 hours/week' },
    { value: '600', label: '10 hours/week' },
    { value: 'unlimited', label: 'No limit' }
  ];

  const handleDataSharingChange = (key, value) => {
    setDataSharing(prev => ({ ...prev, [key]: value }));
  };

  const handleScreenTimeChange = (key, value) => {
    setScreenTimeSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleAutonomyChange = (key, value) => {
    setChildAutonomy(prev => ({ ...prev, [key]: value }));
  };

  const handleNotificationChange = (key, value) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="glass rounded-2xl p-6 shadow-cosmic">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
            <Icon name="Shield" size={24} className="text-success" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-foreground">Privacy & Controls</h2>
            <p className="text-sm text-text-secondary">Manage your family's data and screen time settings</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          iconName="Download"
          iconPosition="left"
          className="border-success/30 text-success hover:bg-success/10"
        >
          Export Data
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Data Sharing Preferences */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Data Sharing Preferences</h3>
            <div className="space-y-4">
              <div className="bg-surface/20 rounded-xl p-4 border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">Anonymous Analytics</h4>
                    <p className="text-sm text-text-secondary">
                      Help improve the platform by sharing anonymous usage data
                    </p>
                  </div>
                  <Checkbox
                    checked={dataSharing?.analytics}
                    onChange={(e) => handleDataSharingChange('analytics', e?.target?.checked)}
                    className="ml-4"
                  />
                </div>
                <div className="flex items-center space-x-2 text-xs text-success">
                  <Icon name="Shield" size={12} />
                  <span>No personal information shared</span>
                </div>
              </div>

              <div className="bg-surface/20 rounded-xl p-4 border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">Research Participation</h4>
                    <p className="text-sm text-text-secondary">
                      Contribute to child wellness research studies (optional)
                    </p>
                  </div>
                  <Checkbox
                    checked={dataSharing?.research}
                    onChange={(e) => handleDataSharingChange('research', e?.target?.checked)}
                    className="ml-4"
                  />
                </div>
                <div className="flex items-center space-x-2 text-xs text-accent">
                  <Icon name="BookOpen" size={12} />
                  <span>IRB-approved studies only</span>
                </div>
              </div>

              <div className="bg-surface/20 rounded-xl p-4 border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">Marketing Communications</h4>
                    <p className="text-sm text-text-secondary">
                      Receive personalized recommendations and updates
                    </p>
                  </div>
                  <Checkbox
                    checked={dataSharing?.marketing}
                    onChange={(e) => handleDataSharingChange('marketing', e?.target?.checked)}
                    className="ml-4"
                  />
                </div>
              </div>

              <div className="bg-surface/20 rounded-xl p-4 border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">Third-Party Integrations</h4>
                    <p className="text-sm text-text-secondary">
                      Allow integration with educational platforms and health apps
                    </p>
                  </div>
                  <Checkbox
                    checked={dataSharing?.thirdParty}
                    onChange={(e) => handleDataSharingChange('thirdParty', e?.target?.checked)}
                    className="ml-4"
                  />
                </div>
                <div className="flex items-center space-x-2 text-xs text-warning">
                  <Icon name="AlertTriangle" size={12} />
                  <span>Review each integration individually</span>
                </div>
              </div>
            </div>
          </div>

          {/* Child Autonomy Settings */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Child Autonomy</h3>
            <div className="space-y-4">
              <div className="bg-surface/20 rounded-xl p-4 border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">Self-Reporting</h4>
                    <p className="text-sm text-text-secondary">
                      Allow child to report their own mood and feelings
                    </p>
                  </div>
                  <Checkbox
                    checked={childAutonomy?.selfReporting}
                    onChange={(e) => handleAutonomyChange('selfReporting', e?.target?.checked)}
                    className="ml-4"
                  />
                </div>
              </div>

              <div className="bg-surface/20 rounded-xl p-4 border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">Activity Choice</h4>
                    <p className="text-sm text-text-secondary">
                      Let child choose their own mindfulness activities
                    </p>
                  </div>
                  <Checkbox
                    checked={childAutonomy?.activityChoice}
                    onChange={(e) => handleAutonomyChange('activityChoice', e?.target?.checked)}
                    className="ml-4"
                  />
                </div>
              </div>

              <div className="bg-surface/20 rounded-xl p-4 border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">Progress Sharing</h4>
                    <p className="text-sm text-text-secondary">
                      Allow child to share achievements with family
                    </p>
                  </div>
                  <Checkbox
                    checked={childAutonomy?.progressSharing}
                    onChange={(e) => handleAutonomyChange('progressSharing', e?.target?.checked)}
                    className="ml-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screen Time & Notifications */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Screen Time Management</h3>
            <div className="space-y-4">
              <div className="bg-surface/20 rounded-xl p-4 border border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Daily Limit</label>
                    <Select
                      options={dailyLimitOptions}
                      value={screenTimeSettings?.dailyLimit}
                      onChange={(value) => handleScreenTimeChange('dailyLimit', value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Weekly Limit</label>
                    <Select
                      options={weeklyLimitOptions}
                      value={screenTimeSettings?.weeklyLimit}
                      onChange={(value) => handleScreenTimeChange('weeklyLimit', value)}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-surface/20 rounded-xl p-4 border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">Break Reminders</h4>
                    <p className="text-sm text-text-secondary">
                      Gentle reminders to take breaks during longer sessions
                    </p>
                  </div>
                  <Checkbox
                    checked={screenTimeSettings?.breakReminders}
                    onChange={(e) => handleScreenTimeChange('breakReminders', e?.target?.checked)}
                    className="ml-4"
                  />
                </div>
              </div>

              <div className="bg-surface/20 rounded-xl p-4 border border-border">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">Bedtime Mode</h4>
                    <p className="text-sm text-text-secondary">
                      Automatically restrict access during bedtime hours
                    </p>
                  </div>
                  <Checkbox
                    checked={screenTimeSettings?.bedtimeMode}
                    onChange={(e) => handleScreenTimeChange('bedtimeMode', e?.target?.checked)}
                    className="ml-4"
                  />
                </div>
                
                {screenTimeSettings?.bedtimeMode && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Bedtime Start</label>
                      <input
                        type="time"
                        value={screenTimeSettings?.bedtimeStart}
                        onChange={(e) => handleScreenTimeChange('bedtimeStart', e?.target?.value)}
                        className="w-full p-2 bg-input border border-border rounded-lg text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Wake Up Time</label>
                      <input
                        type="time"
                        value={screenTimeSettings?.bedtimeEnd}
                        onChange={(e) => handleScreenTimeChange('bedtimeEnd', e?.target?.value)}
                        className="w-full p-2 bg-input border border-border rounded-lg text-foreground"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Notification Preferences */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Notification Preferences</h3>
            <div className="space-y-4">
              <div className="bg-surface/20 rounded-xl p-4 border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">Progress Updates</h4>
                    <p className="text-sm text-text-secondary">
                      Daily summaries of your child's mindfulness activities
                    </p>
                  </div>
                  <Checkbox
                    checked={notifications?.progressUpdates}
                    onChange={(e) => handleNotificationChange('progressUpdates', e?.target?.checked)}
                    className="ml-4"
                  />
                </div>
              </div>

              <div className="bg-surface/20 rounded-xl p-4 border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">Milestone Alerts</h4>
                    <p className="text-sm text-text-secondary">
                      Celebrations when your child reaches new achievements
                    </p>
                  </div>
                  <Checkbox
                    checked={notifications?.milestoneAlerts}
                    onChange={(e) => handleNotificationChange('milestoneAlerts', e?.target?.checked)}
                    className="ml-4"
                  />
                </div>
              </div>

              <div className="bg-surface/20 rounded-xl p-4 border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">Weekly Reports</h4>
                    <p className="text-sm text-text-secondary">
                      Comprehensive weekly insights and recommendations
                    </p>
                  </div>
                  <Checkbox
                    checked={notifications?.weeklyReports}
                    onChange={(e) => handleNotificationChange('weeklyReports', e?.target?.checked)}
                    className="ml-4"
                  />
                </div>
              </div>

              <div className="bg-surface/20 rounded-xl p-4 border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">Expert Tips</h4>
                    <p className="text-sm text-text-secondary">
                      Personalized advice from child psychology experts
                    </p>
                  </div>
                  <Checkbox
                    checked={notifications?.expertTips}
                    onChange={(e) => handleNotificationChange('expertTips', e?.target?.checked)}
                    className="ml-4"
                  />
                </div>
              </div>

              <div className="bg-surface/20 rounded-xl p-4 border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">Emergency Alerts</h4>
                    <p className="text-sm text-text-secondary">
                      Important safety and security notifications (cannot be disabled)
                    </p>
                  </div>
                  <Checkbox
                    checked={notifications?.emergencyAlerts}
                    disabled
                    className="ml-4"
                  />
                </div>
                <div className="flex items-center space-x-2 text-xs text-warning">
                  <Icon name="AlertTriangle" size={12} />
                  <span>Required for child safety</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
        <div className="flex space-x-4">
          <Button
            variant="outline"
            className="border-error/30 text-error hover:bg-error/10"
            iconName="Trash2"
            iconPosition="left"
          >
            Delete All Data
          </Button>
          <Button
            variant="outline"
            className="border-warning/30 text-warning hover:bg-warning/10"
            iconName="Download"
            iconPosition="left"
          >
            Export Data
          </Button>
        </div>
        
        <div className="flex space-x-4">
          <Button
            variant="outline"
            className="border-text-secondary/30 text-text-secondary hover:bg-surface/20"
          >
            Reset to Defaults
          </Button>
          <Button
            variant="default"
            className="bg-success hover:bg-success/90"
            iconName="Save"
            iconPosition="left"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyControls;