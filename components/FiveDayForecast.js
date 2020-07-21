import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert} from 'react-native';
import {StatusBar} from "expo-status-bar";
import FiveDayForecastTab from "./FiveDayForecastTab";
import {API_KEY, LAT, LON} from "../assets/constants";
import WeatherDetails from "../models/WeatherDetails";


export default class FiveDayForecast extends React.Component{

    state =  {
        forecast: []
    }

    dailyTabPressHandler = (weatherDetails) => {
        this.props.navigation.navigate({routeName: "DailyForecast", params: {weatherDetails: weatherDetails}});
    }

    componentDidMount() {
        fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${LAT}&lon=${LON}&exclude=hourly,current,minutely?&APPID=${API_KEY}&units=metric`
        )
            .then(res => res.json())
            .then(json => {
                console.log(json);
                console.log('daily time!!! \n\n\n')
                console.log(json.daily[0].weather[0].icon);
                this.setState({
                    forecast: json,
                });
            });
    }

    fiveDayForecast = () => {
        let forecastElement = []
        let weekday = new Array();
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        if (this.state.forecast.length===0)
            return;
        // Outer loop to create parent
        for (let i = 0; i < 5; i++) {

            let icon = this.state.forecast.daily[i].weather[0].icon;
            let dayTemp = this.state.forecast.daily[i].temp.day;
            let nightTemp = this.state.forecast.daily[i].temp.night;
            let summary = this.state.forecast.daily[i].weather[0].main;
            let description = this.state.forecast.daily[i].weather[0].description;
            let dayOfWeek = weekday[new Date(this.state.forecast.daily[i].dt *1000).getDay()];

            forecastElement.push(<FiveDayForecastTab pressHandler={this.dailyTabPressHandler} weatherDetails={new WeatherDetails(icon, dayTemp, nightTemp, summary, description, dayOfWeek)}></FiveDayForecastTab>)
        }
        return forecastElement
    }

    render()
    {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>5 Day Forecast for Toronto</Text>

                {this.fiveDayForecast()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        color: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
        fontSize:26,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#1F1C2C',
        justifyContent: 'center',
        alignContent: 'center'
    }
});