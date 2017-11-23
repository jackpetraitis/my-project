import {
    StackNavigator,
  } from 'react-navigation';
  
  class HomeScreen extends Component {
    render() {
      const {navigate} = this.props.navigation;
      return (
          <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigate('Profile', { name: 'Jane' })
          }
        />
      );
    }
  }
  
  class ProfileScreen extends Component {
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Text>Jane's profile butt.</Text>
      );
    }
  }
  
  const App1 = StackNavigator({
    App: { screen: App },
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
  });