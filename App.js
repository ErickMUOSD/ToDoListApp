import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from "./src/screens/Home";


const Stack = createNativeStackNavigator();

const App: () => Node = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Keeper',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 30,
                        },
                        headerStyle: {
                            backgroundColor: 'yellow'
                        }
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default App;