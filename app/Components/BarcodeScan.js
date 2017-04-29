import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import BarcodeScanner, { Exception, FocusMode, BarcodeType, pauseScanner, resumeScanner } from 'react-native-barcode-scanner-google';



export default class BarcodeScan extends Component {
  scan(id, data, type) {
    this.props.navigator.push({ 
      id: id,

      passProps: {
        type: type,
        data: data
      }
      // We can pass any information we want to the next scene as props
      
    });
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>Touch Screen to Focus</Text>
          <View style={styles.barcodeScannerContainer}>
          <BarcodeScanner style={styles.barcodeScanner}

            barcodeType={BarcodeType.ALL}
              
              onBarcodeRead={({data, type}) =>  {
                  var data = data;
                  console.log(data);
                  this.scan(5, data, this.props.type)
              }}
              onException={exceptionKey => {
                  // check instructions on Github for a more detailed overview of these exceptions.
                  switch (exceptionKey) {
                      case Exception.NO_PLAY_SERVICES:
                          // tell the user they need to update Google Play Services
                      case Exception.LOW_STORAGE:
                          // tell the user their device doesn't have enough storage to fit the barcode scanning magic
                      case Exception.NOT_OPERATIONAL:
                          // Google's barcode magic is being downloaded, but is not yet operational.
                      default: break;
                  }
              }}
              focusMode={FocusMode.TAP /* could also be TAP or FIXED */}
              
          />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(253,207,52)',
   
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  barcodeScannerContainer: {
    flex: 1,
    width: 300,
    height: 300
  },
  barcodeScanner: {
    flex: 1
    
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  // marginTop: 25,
  //  marginBottom: 10,
    fontWeight: 'bold',
    color: '#fff6d1'
  }
});