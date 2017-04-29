import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet, Platform } from 'react-native';


export default class AdjustInventory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      barcode: this.props.data
    };
    this.handlePress = this.handlePress.bind(this);
  }

  // When the component mounts..
  componentDidMount() {
    // Call our detchData function on the movie that was passed in as props
   // this.fetchData(this.props.barcode)
  }

  // fetchData(barcode) {
  //   // We pass the movie the user entered in into the URL for the API call.
  //   fetch('http://localhost:3000/items')
  //   .then(response => response.json())
  //   .then((responseData) => {
  //     // After the data is received, we set this.state.movie to the result of the API call.
  //     console.log(responseData);
  //     this.setState({ item: responseData });
  //     this.setState({ loading: false });
  //   })
  //   .catch(err => console.log(err));
  // }

  // The handlePress function will return us to the previous page
  handlePress() {
    this.props.navigator.pop();
  }

  render() {

       

      return (
        <View style={styles.container}>

           <View style={styles.header}>
            <Text style={styles.title}>Inventory Form</Text>
          </View>

          

          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
            <View style={styles.infoTextContainer}>
              <Text style={styles.bigInfoText}>You've scanned:</Text>
              <Text style={styles.smallInfoText}>test</Text>
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.bigInfoText}>How many are you Taking?</Text>
              <Text style={styles.smallInfoText}>Test</Text>
            </View>
           
          </View>

         
        </View>
      );
    } 
    
    
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(253,207,52)'
  },
  infoTextContainer: {
    flexDirection: 'column', 
    alignItems: 'center'
  },
  bigInfoText: {
    fontSize: 32, 
    fontWeight: 'bold', 
    color: 'white'
  },
  smallInfoText: {
    color: 'white', 
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light'
  },
  bigLightText: {
    color: 'white', 
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light',
    fontSize:25, 
    textAlign:'center'
  },
  text: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    marginBottom: 20,
    color: 'white',
    fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Avenir-Light',
    textAlign: 'center'
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 50,
  },
  title: {
    color: '#fff6d1',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
