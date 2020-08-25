import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';
import Wallpaper from './Wallpaper';

import arrowImg from '../images/left-arrow.png';
import buttonImg from '../images/button.png';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import ChatBot from 'react-native-chatbot';
import {getSubjects} from '../service/SubjectService';

const SIZE = 40;

export default class SubjectScreen extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };
  }

  componentWillMount() {
    // call login service
    getSubjects(function(result) {
      result.forEach(function(data) {
        console.log("Response :" + JSON.stringify(data));
        console.log("Subject :" + data.subject);
      });          
    });
  }


  render() {
    return (
      <>
        <View style={styles.container}>
          <ChatBot steps={steps} />
        </View>
      </>
    );
  }
}

const steps = [
  {
    id: '0',
    message: 'Welcome to learning chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Here we can learn physics,chemistry,english etc',
    trigger: '2',
  },
  {
    id: '2',
    options : [
      {value:'Science', label:'Science', trigger: '3'},
      {value:'English', label:'English', trigger: '4'}
    ] 
  },
  {
    id: '3',
    options : [
      {value:'Physics', label:'Physics', trigger: '5'},
      {value:'Chemistry', label:'Chemistry', trigger: '6'}
    ] 
  },
  {
    id: '4',
    options : [
      {value:'Rhymes', label:'Rhymes', trigger: '7'},
      {value:'Grammer', label:'Grammer', trigger: '8'}
    ] 
  },
  {
    id: '5',
    options : [
      {value:'Newton Laws of Motion', label:'Newton Laws of Motion', trigger: '9'},
      {value:'Light', label:'Light', trigger: '10'}
    ] 
  },
  {
    id: '6',
    options : [
      {value:'Acids', label:'Acids', trigger: '15'},
      {value:'Base', label:'Base', trigger: '16'}
    ] 
  },
  {
    id: '9',
    message: 'Newton\'s laws of motion are three physical laws that, together, laid the foundation for classical mechanics. They describe the relationship between a body and the forces acting upon it, and its motion in response to those forces. The 3 laws of motion are First law of motion- Every object moves in a straight line unless acted upon by a force. Second law of motion- The acceleration of an object is directly proportional to the net force exerted and inversely proportional to the object\'s mass. Third law of motion- For every action, there is an equal and opposite reaction.',
    trigger: '17',
  },
  {
    id: '10',
    message: 'Light, or Visible Light, commonly refers to electromagnetic radiation that can be detected by the human eye. The entire electromagnetic spectrum is extremely broad, ranging from low energy radio waves with wavelengths that are measured in meters, to high energy gamma rays with wavelengths that are less than 1 x 10-11 meters.',
    trigger: '17',
  },
  {
    id: '7',
    options : [
      {value:'Wheels on the bus', label:'Wheels on the bus', trigger: '11'},
      {value:'Humpty Dumpty', label:'Humpty Dumpty', trigger: '12'}
    ] 
  },
  {
    id: '8',
    options : [
      {value:'Noun', label:'Noun', trigger: '13'},
      {value:'Pronoun', label:'Pronoun', trigger: '14'}
    ] 
  },
  {
    id: '11',
    message: 'A noun is a word that functions as the name of a specific object or set of objects, such as living creatures, places, actions, qualities, states of existence, or ideas. However, noun is not a semantic category, so that it cannot be characterized in terms of its meaning.',
    trigger: '17',
  },
  {
    id: '12',
    message: 'A pronoun is a word that replaces a noun in a sentence. For example, "Jeremy ran so fast, you\'d think his life was on the line." The pronoun "his" saved us from repeating the name Jeremy again. Common pronouns include I, me, mine, she, he, it, we, and us.',
    trigger: '17',
  },
  {
    id: '13',
    message: 'https://www.youtube.com/watch?v=8Jo587cyAJo',
    trigger: '17',
  },
  {
    id: '14',
    message: 'https://www.youtube.com/watch?v=1MP8O7JGBEM',
    trigger: '17',
  },
  {
    id: '15',
    message: 'Acid, any substance that in water solution tastes sour, changes the colour of certain indicators e.g. reddens blue litmus paper), reacts with some metals e.g. iron to liberate hydrogen, reacts with bases to form salts, and promotes certain chemical reactions. Examples of acids include the inorganic substances known as the mineral acids—sulfuric, nitric, hydrochloric, and phosphoric acids',
    trigger: '17',
  },
  {
    id: '16',
    message: 'Base, in chemistry, any substance that in water solution is slippery to the touch,tastes bitter, changes the colour of indicators e.g., turns red litmus paper blue, reacts with acids to form salts, and promotes certain chemical reactions. Examples of bases are the hydroxides of the alkali and alkaline earth metals sodium, calcium, etc.',
    trigger: '17',
  },
  {
    id: '17',
    options : [
      {value:'Thanks for using learing chatbot', label:'Thanks', trigger: '18'},
      {value:'Continue', label:'You want continue with any other topics', trigger: '2'}
    ] 
  },
  {
    id: '18',
    message: 'Bye!',
    end: true,
  },

];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  btncontainer: {
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
    backgroundColor: '#1703fc',
  },
  circle: {
    height: SIZE,
    width: SIZE,
    marginTop: -SIZE,
    borderRadius: 100,
    backgroundColor: '#1703fc',
  },
  image: {
    width: 24,
    height: 24,
  },
  btnimage: {
    width: 150,
    height: 80,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  text: {
    fontSize: 25,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

