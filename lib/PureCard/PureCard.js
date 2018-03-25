import React,{Component} from 'react';
import {View,Text} from 'react-native';
class PureCard extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View>
        <Text>This is Component To Be Published</Text>
      </View>
    )
  }
}
export default PureCard;
