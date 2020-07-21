import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';

import Navigator from "./components/Navigator";
import FiveDayForecast from "./components/FiveDayForecast";
import {API_KEY, LAT, LON} from "./assets/constants";

export default class App extends React.Component {

    render() {
        return(
             <Navigator styles={styles.container} />
        )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1F1C2C',
      justifyContent: 'center',
      alignContent: 'center'
    }
  });