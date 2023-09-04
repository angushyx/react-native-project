import { View, Text } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)

const OrdersScreen = () => {
  return (
    <StyledView className="flex-1 items-center justify-center">
      <StyledText className="text-red-400 py-5">Order Screen</StyledText>
    </StyledView>
  )
}

export default OrdersScreen
