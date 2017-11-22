import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MyAppHeaderText } from './MyAppHeaderText';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Banana extends Component {
  render() {
      let pic = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };
      return (
          <Image source={pic} style={{width: 193, height: 110}}/>
      );
  }
}


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Banana></Banana>
        <Text>Open up App.js to start working on  <Text style={{color:'red'}}>nested text in</Text> your app!</Text>
        <Text>Changes you make will automatically BLAZINGLY FAST reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
