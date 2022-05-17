import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import Dashboard from './src/screens/Dashboard';
import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

// // create a stack navigator
const AppNavigator = createStackNavigator(
    {
        HomeScreen,
        LoginScreen,
        RegisterScreen,
        Dashboard,
    },
    {
        initialRouteName: 'HomeScreen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#white',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
);

const AppContainer = createAppContainer(AppNavigator);

// export default function App() {
//     return (
//         <>
//             <AppContainer />
//         </>
//     );
// }

// // const Router = createStackNavigator(
// //     {
// //         HomeScreen,
// //         LoginScreen,
// //         RegisterScreen,
// //         Dashboard,
// //     },
// //     {
// //         initialRouteName: 'HomeScreen',
// //         headerMode: 'none',
// //     },
// // );
// //
// // export default App;
// // export default createAppContainer(AppNavigator);

const MyComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'LoginScreen', title: 'LoginScreen' },
        { key: 'RegisterScreen', title: 'RegisterScreen' },
        { key: 'Dashboard', title: 'Dashboard' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        LoginScreen: LoginScreen,
        RegisterScreen: RegisterScreen,
        Dashboard: Dashboard,
    });

    return (
        // <View>
        <>
            {/* <AppContainer /> */}
            <BottomNavigation navigationState={{ index, routes }} onIndexChange={setIndex} renderScene={renderScene} />
        </>
        // </View>
    );
};

export default MyComponent;


// create a bottom navigator and a top navigator
// const AppNavigator = createStackNavigator(
//     {
//         HomeScreen,
//         LoginScreen,
//         RegisterScreen,
//         Dashboard,
//     },
//     {
//         initialRouteName: 'HomeScreen',
//         headerMode: 'none',
//     },
// );
//
// const AppContainer = createAppContainer(AppNavigator);
//
// export default function App() {
//     return (
//         <>
//             <AppContainer />
//         </>
//     );
// }

// create a bottom navigator at the bottom of the screen
// at the bottom of the screen
// bottom navigation is a component that allows you to navigate between different screens
// bottom navigation is a component that allows you to navigate between different screens
// bottom navigation is a component that allows you to navigate between different screens
