import React from 'react';
import ReactDOM from 'react-dom/client';

import StateMachineWizard from './StateMachineWizard';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StateMachineWizard />
  </React.StrictMode>,
);
