import React from 'react';

import { View, Text, Button } from 'react-native';

type State = {
  throwRenderError: boolean,
};
class Home extends React.Component<State> {
  constructor(props) {
    super(props);

    this.state = {
      throwRenderError: false,
    };
  }

  crashApp = () => {
    // TODO: this will not show error boundary

    throw new Error('APP CRASH MANUAL VIA EVENT');
  };

  crashAppRender = () => {
    this.setState({ throwRenderError: true });
  };

  render() {
    const { throwRenderError } = this.state;
    // TODO: this will show error boundary
    if (throwRenderError) {
      throw new Error('APP CRASH MANUAL VIA RENDER');
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
        <Button title="Crash app via event" onPress={this.crashApp} />
        <Button title="Crash app via render" onPress={this.crashAppRender} />
      </View>
    );
  }
}

export default Home;
