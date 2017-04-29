import React, { Component } from 'react';
import  { View, StyleSheet, Text, Image } from 'react-native';
import logo from './images/sw_logo.jpeg';

export default class Splash extends Component {
	render() {

		return (
			<View style={styles.wrapper}>

				<View style={styles.logoWrapper}>
					 <Image source = {logo} style={styles.logo}/>
					 <Text style={styles.logoText}>Southwestern University Inventory</Text>
				</View>

				<View>
					<Text style={styles.subtitle}>Powered by React Native</Text>
				</View>

			</View>


		);
	}

	 // Life-cycle method that will run the following code once the component has been mounted...
  componentDidMount() {
    // Call the nextPage function which will transition us to the home page after 2 seconds
    setTimeout(() => this.nextPage(), 2000);
  }

  // The nextPage function takes us to the home page
  nextPage() {
    // Pushes a new route to the navigation stack. This will be our home page since it has an id of 1
    this.props.navigator.push({ 
      id: 2
    });
  }

}


const styles = StyleSheet.create({

	wrapper: {
		backgroundColor: 'rgb(253,207,52)',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'

	},
	logoWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		height: 100,
		width: 100

	},
	logoText: {
		padding: 10,
		fontWeight: 'bold',
		fontSize: 21,
		color: '#000000'
	},
	subtitle: {
		padding: 20,
		color: '#000000'
	}


});