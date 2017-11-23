import React, { Component } from 'react';
import {
  Button, 
  CameraRoll,
  Image,
  SliderIOS, 
  StyleSheet, 
  Switch, 
  Text, 
  View,
  TouchableOpacity
} from 'react-native';
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

function onPressLearnMore () {
  return;
};


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <View style={{flex: 1, marginHorizontal: 12}}>
            <Button
              onPress={onPressLearnMore}
              style={styles.menuButtons}
              title="Macros/Micros"
              color="#DDD"
              accessibilityLabel="Macros Micros"
            />
          </View>
          <View style={{flex: 1, marginHorizontal: 12}}>
            <Button
              onPress={onPressLearnMore}
              style={styles.menuButtons}
              title="Scanning"
              color="#DDD"
              accessibilityLabel="Scanning"
            />
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View style={{flex: 1, marginHorizontal: 12}}>
            <Button
              onPress={onPressLearnMore}
              style={styles.menuButtons}
              title="Meal Suggestions"
              color="#DDD"
              accessibilityLabel="Meals"
            />
          </View>
          <View style={{flex: 1, marginHorizontal: 12}}>
            <Button
              onPress={onPressLearnMore}
              style={styles.menuButtons}
              title="About"
              color="#DDD"
              accessibilityLabel="About"
            />
          </View>
        </View>
        <View style={styles.newcontainer}>
          <Banana />
          <Text>Open up App.js to start working on  <Text style={{color:'red'}}>nested text in</Text> your app!</Text>
          <Text>Changes you make will automatically BLAZINGLY FAST reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Greeting name='Rexxar' />
          <Greeting name='Jaina111' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuButtons: {
    marginHorizontal: 12
  },
  buttonRow: {
    flexDirection: 'row',
    margin: 12
  },
  Button: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    margin: 12
  },
  row: {
    flexDirection: 'row',
    flex: 1
  },
  url: {
    fontSize: 9,
    marginBottom: 14,
  },
  image: {
    margin: 4,
  },
  info: {
    flex: 1,
  },
  newcontainer: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});