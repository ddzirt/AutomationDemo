import React from 'react';

import { Sentry } from 'react-native-sentry';

Sentry.config('https://c07b265d414c4a50aafb207373708151@sentry.io/1284394', {
  logLevel: SentryLog.Debug, // default SentryLog.None | Possible values:  .None, .Error, .Debug, .Verbose
  disableNativeIntegration: false, // default: false | Deactivates the native integration and only uses raven-js
  handlePromiseRejection: true // default: true | Handle unhandled promise rejections
}).install();
