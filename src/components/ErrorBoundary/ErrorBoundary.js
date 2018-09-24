import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

import { Sentry } from 'react-native-sentry';

type State = {
  // hasError: Boolean,
  error: any,
  errorInfo: String,
};
class ErrorBoundary extends React.Component<State> {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    Sentry.captureException(error, errorInfo);
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;

    if (error && errorInfo) {
      // You can render any custom fallback UI
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>App has crashed!</Text>
        </View>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any,
};

export default ErrorBoundary;
