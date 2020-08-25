import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  Easing,
  Alert,
  TextInput,
  ScrollView,
  Text,
} from 'react-native';

import {Actions, ActionConst} from 'react-native-router-flux';

import spinner from '../images/loading.gif';
import {getSubjects} from '../service/SubjectService';
import Wallpaper from './Wallpaper';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
import arrowImg from '../images/left-arrow.png';
import buttonImage from '../images/button.png';

const SIZE = 40;

export default class SubjectScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      subject: '',
    };

    this._onPress = this._onPress.bind(this);
    this.growAnimated = new Animated.Value(0);
  }


  SubjectScreen() {
    // $.getJSON('https://randomuser.me/api/')
    //   .then(({ results }) => this.setState({ subject: results }));
    getSubjects(function(result) {
      result.forEach(function(data) {       
        console.log("Response :" + JSON.stringify(data));
        console.log("Subject :" + data.subject);
      });          
    });
  }

  componentWillMount() {
    this.SubjectScreen();
  }

  _onPress() {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});

    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      Actions.pop();
    }, 500);
  }

  render() {
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, SIZE],
    });
    return (
      <>
      <Wallpaper>

          <View style={styles.container}>
            <TouchableOpacity
              onPress={this._onPress}
              style={styles.button}
              activeOpacity={1}>
              <Image style={styles.image} source={arrowImg} />
            </TouchableOpacity>
            <Animated.View
              style={[styles.circle, {transform: [{scale: changeScale}]}]}
            />
          </View>

          <View style={styles.buttonContainer}>
            {this.state.subject.map(info => <Text style={styles.text}>{info.subject}</Text>)}
          </View>
      </Wallpaper>
      </>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    //alignItems: 'flex-end',
    //justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 1,
    margin: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE,
    height: SIZE,
    borderRadius: 100,
    zIndex: 99,
    backgroundColor: '#03f0fc',
  },
  circle: {
    height: SIZE,
    width: SIZE,
    marginTop: -SIZE,
    borderRadius: 100,
    backgroundColor: '#03f0fc',
  },
  image: {
    width: 24,
    height: 24,
  },
  text: {
    color: 'black',
    backgroundColor: 'transparent',
  },
});