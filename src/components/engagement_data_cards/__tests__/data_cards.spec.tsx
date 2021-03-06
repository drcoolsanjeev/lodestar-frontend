import React from 'react';
import { render } from '@testing-library/react';
import { Engagement } from '../../../schemas/engagement';
import { EngagementSummaryCard } from '../engagement_summary_card/engagement_summary_card';
import { OpenShiftClusterSummaryCard } from '../openshift_cluster_card/openshift_cluster_card';
import { PointOfContactCard } from '../point_of_contact_card/point_of_contact_card';
import { TestStateWrapper } from '../../../common/test_state_wrapper';
describe('Engagement summary card', () => {
  test('matches snapshot', () => {
    expect(
      render(
        <TestStateWrapper>
          <EngagementSummaryCard
            onSave={() => {}}
            engagementFormConfig={{}}
            onChange={() => {}}
            currentEngagement={Engagement.fromFake(true)}
            currentEngagementChanges={Engagement.fromFake(true)}
            missingRequiredFields={[]}
          />
        </TestStateWrapper>
      )
    ).toMatchSnapshot();
  });
});

describe('OpenShift Cluster Summary', () => {
  test('matches snapshot', () => {
    expect(
      render(
        <TestStateWrapper>
          <OpenShiftClusterSummaryCard
            onSave={() => {}}
            engagementFormConfig={{}}
            onChange={() => {}}
            currentEngagement={Engagement.fromFake(true)}
            currentEngagementChanges={Engagement.fromFake(true)}
            missingRequiredFields={[]}
          />
        </TestStateWrapper>
      )
    ).toMatchSnapshot();
  });
});

describe('Point of Contact Card', () => {
  test('matches snapshot', () => {
    expect(
      render(
        <TestStateWrapper>
          <PointOfContactCard
            onSave={() => {}}
            engagementFormConfig={{}}
            onChange={() => {}}
            currentEngagement={Engagement.fromFake(true)}
            currentEngagementChanges={Engagement.fromFake(true)}
            missingRequiredFields={[]}
          />
        </TestStateWrapper>
      )
    ).toMatchSnapshot();
  });
});
