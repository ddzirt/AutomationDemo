import React from 'react';

import { Sentry, SentryLog } from 'react-native-sentry';

import Navigator from './config/Routes';

import { ErrorBoundary } from './components/ErrorBoundary';

Sentry.config('https://c07b265d414c4a50aafb207373708151@sentry.io/1284394', {
  logLevel: SentryLog.Debug, // default SentryLog.None | Possible values:  .None, .Error, .Debug, .Verbose
  disableNativeIntegration: false, // default: false | Deactivates the native integration and only uses raven-js
  handlePromiseRejection: true, // default: true | Handle unhandled promise rejections
}).install();

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Navigator />
      </ErrorBoundary>
    );
  }
}

// Sentry.captureException(new Error('Oops we crash the app!'), {
//   logger: 'my.module',
// });

export default App;
