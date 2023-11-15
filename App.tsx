import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon, NativeBaseProvider } from 'native-base';
import * as React from 'react';
import { LogBox, Platform } from 'react-native';

import { COLORS } from './src/constants/colors';
import Checkout from './src/screens/checkout';
import Home from './src/screens/home';
import Personality from './src/screens/personality';
import HotelSelect from './src/screens/personality/HotelSelect';
import Results from './src/screens/personality/Results';
import Review from './src/screens/personality/Review';
import Profile from './src/screens/profile';
import Search from './src/screens/search';
import VoiceSearch from './src/screens/voice-search';

LogBox.ignoreAllLogs(); //Ignore all log notifications
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Personality" component={Personality} />
      <Stack.Screen name="HotelSelect" component={HotelSelect} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName, opacity, type, size;

              if (route.name === 'Home') {
                iconName = 'home';
                type = 'material-community';
                opacity = focused ? 1 : 0.5;
              } else if (route.name === 'Search') {
                iconName = 'search';
                type = 'material';
                opacity = focused ? 1 : 0.5;
              } else if (route.name === 'VoiceSearch') {
                iconName = 'mic';
                type = 'material';
                opacity = focused ? 1 : 0.5;
                size = '5xl';
              } else if (route.name === 'Campaigns') {
                iconName = 'campaign';
                type = 'material';
                opacity = focused ? 1 : 0.5;
              } else {
                iconName = focused ? 'account' : 'account-outline';
                type = 'material-community';
                opacity = 1;
              }

              return (
                <Icon
                  mb="1"
                  as={
                    type === 'material' ? (
                      <MaterialIcons name={iconName as any} />
                    ) : (
                      <MaterialCommunityIcons name={iconName as any} />
                    )
                  }
                  color="white"
                  size={size || 'xl'}
                  opacity={opacity}
                />
              );
            },
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
              backgroundColor: COLORS.primary,
              paddingTop: 12,
              ...(Platform.OS === 'android' ? { height: 66 } : {}),
            },
          })}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="VoiceSearch" component={VoiceSearch} />
          <Tab.Screen name="Campaigns" component={Checkout} />
          <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
