import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import InteractiveGamesHub from './pages/interactive-games-hub-mindfulness-activities';
import Homepage from './pages/homepage-interactive-children-s-wellness-platform';
import ContactPage from './pages/contact-the-starry-goodbye';
import GuardianPortalParentDashboard from './pages/guardian-portal-parent-dashboard';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<ContactPage />} />
        <Route path="/interactive-games-hub-mindfulness-activities" element={<InteractiveGamesHub />} />
        <Route path="/homepage-interactive-children-s-wellness-platform" element={<Homepage />} />
        <Route path="/contact-the-starry-goodbye" element={<ContactPage />} />
        <Route path="/guardian-portal-parent-dashboard" element={<GuardianPortalParentDashboard />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
