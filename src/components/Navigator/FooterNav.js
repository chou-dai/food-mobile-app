import React, { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Home from '../../Home';
import Calendar from '../../Calendar';
import Gallery from '../../Gallery';
import Setting from '../../Setting';
import { withTheme } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FAB } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import CameraScreen from '../../CameraScreen';

const Tab = createBottomTabNavigator();

const FooterNav = (props) => {

  return (
		<Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: props.theme.colors.main,
        tabBarActiveBackgroundColor: props.theme.colors.base,
        tabBarInactiveBackgroundColor: props.theme.colors.base,
        tabBarStyle: {
          backgroundColor: props.theme.colors.base,
          borderTopWidth: 0,
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.9,
          shadowRadius: 3,
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home" component={ Home }
        options={{
          tabBarLabel: 'ホーム',
          tabBarIcon: ({ color }) => (
            <Entypo name="home"
              style={{
                fontSize: 25,
                color: color
              }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Calendar" component={ Calendar }
        options={{
          tabBarLabel: 'カレンダー',
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-sharp"
              style={{
                fontSize: 25,
                color: color
              }}
            />
          )
        }}
      />
      <Tab.Screen
        name='camera' component={ CameraScreen }
        options = {() => ({
          tabBarLabel: 'カメラ',
          tabBarButton: () => (
            <View style={styles.shadow}>
              <LinearGradient
                colors={['rgba(240,152,25,1)', 'rgba(255,88,88,1)']} 
                start={{x: 0.0, y: 1}} 
                end={{x: 1, y: 1}}
                style={styles.linearGradient}
              >
                <FAB style={styles.fab} icon="camera" color="#ddd"
                  onPress={() => {
                    props.navigation.navigate('Camera');
                  }}
                />
              </LinearGradient>
            </View>
          )
        })}
      />
      <Tab.Screen
        name="Gallery" component={ Gallery }
        options={{
          tabBarLabel: 'ギャラリー',
          tabBarIcon: ({ color }) => (
            <Ionicons name="apps-sharp"
              style={{
                fontSize: 25,
                color: color,
              }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Setting" component={ Setting }
        options={{
          tabBarLabel: '設定',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings"
              style={{
                fontSize: 25,
                color: color
              }}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  linearGradient: {
    position: 'relative',
    width: 52,
    height: 52,
    marginLeft: 20,
    marginRight: 20,
    top: -10,
    borderRadius: 25,
    overflow: 'hidden',
  },
  fab: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
})

export default withTheme(FooterNav);