import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Dimensions, Platform } from 'react-native';

export default class Home extends Component {

  // The press function takes in an argument (movie name) and pushes to the navigator the individual movie page
  // It also passes along the name of the movie which will be used fetch information from the OMDB API
  press(id, inventoryAdjustment) {
    this.props.navigator.push({ 
      id: id,

      passProps: {
        inventoryAdjustment: inventoryAdjustment
      }

      
      // We can pass any information we want to the next scene as props
      
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Physical Plant</Text>
        {/*Each button will call the press function*/}
        <TouchableHighlight onPress={() => this.press(4, 'add')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.buttonText}>Add to Inventory</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press(4, 'subtract')} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.buttonText}>Take from Inventory</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.press(7)} style={styles.outerButton}>
          <View style={styles.innerButton}>
            <Text style={styles.buttonText}>Inventory Data</Text>
          </View>
        </TouchableHighlight>
        
      </View>
    );
  }
}

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#505050'
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 75,
    marginBottom: 50,
    fontWeight: 'bold',
    color: '#fff6d1'
  },
  buttonText: {
    fontSize: 20,
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light',
    textAlign: 'center',
    color: '#000000'
  },
  outerButton: {
    paddingVertical: 3,
    paddingHorizontal: 30
  },
  innerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ffff99',
    borderLeftWidth: 5,
    borderColor: '#ffcc33'
  }
});