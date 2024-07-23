/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Search from './Screens/Search'
import Home from './Screens/Home'

import MaterialCommunityIcons from  'react-native-vector-icons/MaterialCommunityIcons'


     
const Tab= createBottomTabNavigator()

const App=  () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor:  'blue',
  };

  return (
    
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      
         <NavigationContainer>

           <Tab.Navigator
             screenOptions={({route})=>({
                    tabBarIcon:({color})=>{
                       
                       let iconName;
                         if(route.name === "home"){
                           iconName = 'home-city-outline'


                         }
                         else if(route.name==="search"){

                          iconName='city'
                         }
                          return <MaterialCommunityIcons name={iconName} size={25} color={color}/>
                    }

             })}

              tabBarOptions={{

                 activeTintColor: "lightblue",
                 inactiveTintColor: "gray"

              }}
              >
            
              <Tab.Screen name="home"  component={Home}
              
               initialParams={{city:"london"}}
              />
              <Tab.Screen name="search"  component={Search}/>

           </Tab.Navigator>
         </NavigationContainer>

    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 50,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 80,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
