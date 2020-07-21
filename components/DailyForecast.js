import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DailyForecast = props => {

    const weatherDetails = props.navigation.getParam('weatherDetails');

    return (
        <View style={styles.weatherContainer}>
            <View style={styles.headerContainer}>
                <Image source = {{uri: "http://openweathermap.org/img/wn/"+weatherDetails.icon+"@4x.png"}}
                       style = {{ width:200, height: 200 }}
                />
                <Text style={styles.tempText}>Day : {weatherDetails.dayTemp}˚</Text>
                <Text style={styles.tempText}>Night : {weatherDetails.nightTemp}˚</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{weatherDetails.summary}</Text>
                <Text style={styles.subtitle}>{weatherDetails.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1,
        backgroundColor: '#f7b733',
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 50
    },
    tempText: {
        fontSize: 48,
        color: '#fff'
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40
    },
    title: {
        fontSize: 48,
        color: '#fff'
    },
    subtitle: {
        fontSize: 24,
        color: '#fff'
    }
});

DailyForecast.navigationOptions = navigationData => {
    const weatherDetails = navigationData.navigation.getParam('weatherDetails');

    return {
        headerTitle : weatherDetails.dayOfWeek
    };

};

export default DailyForecast;