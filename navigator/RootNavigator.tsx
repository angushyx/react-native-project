import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator'

export type RootStackParamList = {
  Main: undefined
}

const RootStack = createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen
          name="Main"
          component={TabNavigator}
        ></RootStack.Screen>
      </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default RootNavigator
