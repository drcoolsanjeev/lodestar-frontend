import React from 'react';

import '@patternfly/react-core/dist/styles/base.css';

import { SessionProvider } from '../context/session_context/session_context';
import { VersionProvider } from '../context/version_context/version_context';
import { EngagementProvider } from '../context/engagement_context/engagement_context';
import { ErrorBoundary } from '../components/error_boundary';
import { FeatureToggles } from '../context/feature_toggles/feature_toggles';
import { ServiceProvider } from '../context/service_provider_context/service_provider_context';
import { FeedbackProvider } from '../context/feedback_context';

export const TestStateWrapper = ({ children = null }) => {
  return (
    <ServiceProvider shouldUseFaked={true}>
      <FeedbackProvider>
        <SessionProvider>
          <EngagementProvider>
            <VersionProvider>
              <FeatureToggles>{children}</FeatureToggles>
            </VersionProvider>
          </EngagementProvider>
        </SessionProvider>
      </FeedbackProvider>
    </ServiceProvider>
  );
};