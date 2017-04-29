import React, { Component } from 'react';
import  { View, StyleSheet, Text, Image } from 'react-native';
var Auth0Lock = require('react-native-lock');
var lock = new Auth0Lock({clientId: 'ILcw2gjVAScXc39CmwrP-f6RwZSdBrwI', domain: 'shuajo83.auth0.com'});


export default class Login extends Component {
	 render() {

		return (
			<View>

				<Text>Login</Text>

			</View>


		);
	}
  
// 	lock.show({}, (err, profile, token) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   // Authentication worked!
//   console.log('Logged in with Auth0!');
// });

	componentDidMount() {
    // Call the nextPage function which will transition us to the home page after 2 seconds
    setTimeout(() => this.nextPage(), 2000);
  }

  // The nextPage function takes us to the home page
  nextPage() {
    // Pushes a new route to the navigation stack. This will be our home page since it has an id of 1
    this.props.navigator.push({ 
      id: 1
    });

}
}

// "use strict";
 
// import React, { Component } from 'react';
 
// import { View, Text, TouchableHighlight, Image, TextInput, StyleSheet, Platform } from 'react-native';
 
// var Home = require("./Home");
 
// class LoginView extends Component {
 
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: "",
//             password: ""
//         };
//     }
 
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.title}>
//                     Sign In
//                 </Text>
//                 <View>
//                     <TextInput
//                         placeholder="Username"
//                         onChange={(event) => this.setState({username: event.nativeEvent.text})}
//                         style={styles.formInput}
//                         value={this.state.username} />
//                     <TextInput
//                         placeholder="Password"
//                         secureTextEntry={true}
//                         onChange={(event) => this.setState({password: event.nativeEvent.text})}
//                         style={styles.formInput}
//                         value={this.state.password} />
//                     <TouchableHighlight onPress={(this.onSubmitPressed.bind(this))} style={styles.button}>
//                         <Text style={styles.buttonText}>Submit</Text>
//                     </TouchableHighlight>
//                 </View>
//             </View>
//         );
//     }
 
//     onSubmitPressed() {
//         this.props.navigator.push({
//             title: "Secure Page",
//             component: Home,
//             passProps: {username: this.state.username, password: this.state.password},
//         });
//     }
 
// };
 
// var styles = StyleSheet.create({
//     container: {
//         padding: 30,
//         marginTop: 65,
//         alignItems: "stretch"
//     },
//     title: {
//         fontSize: 18,
//         marginBottom: 10
//     },
//     formInput: {
//         height: 36,
//         padding: 10,
//         marginRight: 5,
//         marginBottom: 5,
//         marginTop: 5,
//         flex: 1,
//         fontSize: 18,
//         borderWidth: 1,
//         borderColor: "#555555",
//         borderRadius: 8,
//         color: "#555555"
//     },
//     button: {
//         height: 36,
//         flex: 1,
//         backgroundColor: "#555555",
//         borderColor: "#555555",
//         borderWidth: 1,
//         borderRadius: 8,
//         marginTop: 10,
//         justifyContent: "center"
//     },
//     buttonText: {
//         fontSize: 18,
//         color: "#ffffff",
//         alignSelf: "center"
//     },
// });
 
// module.exports = LoginView;