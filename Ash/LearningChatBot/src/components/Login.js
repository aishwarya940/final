import React, {Component} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  Easing,
  Alert,
  Text,
  ScrollView,
} from 'react-native';

import {Actions, ActionConst} from 'react-native-router-flux';

import spinner from '../images/loading.gif';
import {getLogin} from '../service/LoginService';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

import UserInput from './UserInput';
import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      phone:'',
      password:'',
      isLoading: false,
      genValidate:false,
      pwdValidate:false,
    };
    this.showPass = this.showPass.bind(this);
    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    this._onPress = this._onPress.bind(this);
  }

  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }

  
  _onPress() {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});
    console.log("Phone ::" + this.state.phone);
    console.log("Password :::"+this.state.password);

    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      this._onGrow();
    }, 2000);

    // call login service
    getLogin(this.state.phone, this.state.password, function(result) {
      result.forEach(function(data) {
        console.log("Data :" + JSON.stringify(data));
        console.log("Data :" + data.phone);
        Actions.subjectScreen();
        this.setState({isLoading: false});
        this.buttonAnimated.setValue(0);
        this.growAnimated.setValue(0);

      });          
    });

    // setTimeout(() => {
    //     Actions.subjectScreen();
    //     this.setState({isLoading: false});
    //     this.buttonAnimated.setValue(0);
    //     this.growAnimated.setValue(0);
    //   }, 2300);  

  }

  _onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();
  }

  validate(text,type) {
    console.log("Validate called :" + text);
    const mobileVal = /^(\d{10}$)/;
    if(type == 'data') {
      if(mobileVal.test(text)) {
        this.setState({phone:text});
        this.setState({genValidate:true});
      } else {
        this.setState({genValidate:false});
      }
    } 
  }

  pwdValidate(text,type) {
    if(type == 'password') {
        this.setState({password:text});
        this.setState({pwdValidate:true});
      } else {
        this.setState({pwdValidate:false});
      }
  }

  render() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    });

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <UserInput
          style={[!this.state.genValidate ? styles.error : null]}
          source={usernameImg}
          placeholder="Phone"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          onChangeText={(text) => this.validate(text,'data')}
        />
        <UserInput
          source={passwordImg}
          secureTextEntry={this.state.showPass}
          placeholder="Password"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          onChangeText={(text) => this.pwdValidate(text,'password')}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEye}
          onPress={this.showPass}>
          <Image source={eyeImg} style={styles.iconEye} />
        </TouchableOpacity>

        <Animated.View style={{width: changeWidth}}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onPress}
            activeOpacity={1}>
            {this.state.isLoading ? (
              <Image source={spinner} style={styles.image} />
            ) : (
              <Text style={styles.text}>LOGIN</Text>
            )}
          </TouchableOpacity>
          <Animated.View
            style={[styles.circle, {transform: [{scale: changeScale}]}]}
          />
        </Animated.View>
      </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btnEye: {
    position: 'absolute',
    top: 70,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
  buttoncontainer: {
    flex: 1,
    top: -95,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1703fc',
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#03f0fc',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#03f0fc',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  image: {
    width: 24,
    height: 24,
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
 scrollview: {
   backgroundColor: 'transparent'
 }
});
