import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import {StatusBar} from "expo-status-bar";

export default function FiveDayForecastTab(props) {

    return (
        <TouchableHighlight onPress={() => props.pressHandler(props.weatherDetails)} underlayColor="white">
            <View style={styles.tab} >
            <View style={styles.leftSide}>
                <Text style={styles.headerText}>{props.weatherDetails.dayOfWeek}</Text>
                <View style={styles.leftSideTemp}>
                    <Text style={styles.text}>DAY: {props.weatherDetails.dayTemp}˚   / </Text>
                    <Text style={styles.text}>NIGHT: {props.weatherDetails.nightTemp}˚</Text>
                </View>
            </View>
            <View style={styles.rightSide}>
                <Image source = {{uri: "http://openweathermap.org/img/wn/"+props.weatherDetails.icon+"@2x.png"}}
                       style = {{ width: 50, height: 50, alignSelf: 'flex-end', justifyContent: 'flex-end' }}
                />
            </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    tab: {
        flexDirection: 'row', flexWrap: 'wrap',
        backgroundColor: '#f7b733',
        width:350,
        height: 50,
        margin: 20
    },
    text: {
        lineHeight: 20,
        color: '#fff',
        marginTop: 5,
        marginLeft: 20,
        fontSize:16,
        fontWeight: 'bold',
    },
    headerText: {
        lineHeight: 20,
        color: '#fff',
        marginTop: 5,
        marginLeft: 5,
        fontSize:20,
        fontWeight: 'bold',
    },
    rightSide: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    leftSide: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 12,
    },
    leftSideTemp: {
        flexDirection: 'row',
        fontSize: 10,
    },
});