import React from 'react'
import { withExpoSnack } from 'nativewind'

import RootNavigator from './navigator/RootNavigator'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </>
  )
}

export default withExpoSnack(App)
