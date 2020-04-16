import React from 'react';
import { View, Text, FileSystem } from 'magic-script-components';

export default class MyApp extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      message: props.message
    };
  }

  componentDidMount() {
    FileSystem.writeFile('text.txt', 'Lorem ipsum color amet', 'utf8')
    .then((success) => {
      console.log('File written successfully!');
    })
    .then((err) => {
      console.log(err.message);
    });
  }

  render () {
    return (
      <View name="main-view">
        <Text textSize={0.1} localPosition={[-0.3, 0, 0]}>
          Hello Magic Script
        </Text>
      </View>
    );
  }
}
