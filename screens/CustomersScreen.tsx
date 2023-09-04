import { ScrollView, Text, Image, TextInput, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { styled } from 'nativewind'
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabStackParamsList } from '../navigator/TabNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigator/RootNavigator'

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamsList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamList>
>

const StyledText = styled(Text)
const StyledImage = styled(Image)
const StyledTextInput = styled(TextInput)
const StyledView = styled(View)
const StyledScrollView = styled(ScrollView)

const CustomersScreen = () => {
  const navigation = useNavigation<CustomerScreenNavigationProp>()

  const [input, setInput] = useState<string>('')

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <StyledScrollView className="bg-[#9C85A1]">
      <StyledImage
        source={{
          uri: 'https://images.unsplash.com/photo-1693322248761-9c337e9ae5df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3088&q=80',
        }}
        className="w-full h-64 blur-3xl"
      />
      <StyledView className="w-full h-16 bg-white">
        <StyledTextInput
          placeholder="Search by Customer..."
          onChangeText={setInput}
          defaultValue={input}
          className="border-b-[1px] text-lg border-slate-300 h-1/2 w-5/6 m-auto"
        />
      </StyledView>
      <StyledText className="text-green-200 p-3">{input + '🍕'}</StyledText>
    </StyledScrollView>
  )
}

export default CustomersScreen
