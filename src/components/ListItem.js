import React, { Component } from 'react';
import { CardSection } from './common';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component {
  render () {

    const { titleStyle } = styles;
    // console.log(this.props);
    const { id, title } = this.props.library.item

    return (
      <TouchableWithoutFeedback 
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    ); 
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default connect(null, actions)(ListItem);