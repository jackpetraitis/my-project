import {React, Component} from 'react';
class MyAppHeaderText extends Component {
  render() {
    return (
      <Text style={{fontSize: 20}}>
        {this.props.children}
      </Text>
    );
  }
}