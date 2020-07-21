import { createStackNavigator } from 'react-navigation-stack'
import DailyForecast from "./DailyForecast";
import {createAppContainer} from "react-navigation";
import FiveDayForecast from "./FiveDayForecast";

const Navigator = createStackNavigator({
    FiveDayForecast : FiveDayForecast,
    DailyForecast : DailyForecast,
});

export default createAppContainer(Navigator);