import React from 'react';
import { DashboardThemeProvider } from '../theme';
import { render } from '../../render';
import { ReplicantProvider } from '../../ReplicantProvider';
import { SceneList } from '../components/scene-list';

const App = () => {
  return <DashboardThemeProvider><ReplicantProvider>
    <SceneList />
  </ReplicantProvider></DashboardThemeProvider>;
};

render(<App />);
