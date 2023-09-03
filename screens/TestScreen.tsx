import { View, Text } from 'react-native'
import React from 'react'
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

const TestScreen = () => {

  return (
    <StyledView>
      <StyledText className='text-red-400 py-5'>Test Screen 321323</StyledText>
    </StyledView>
  )
}

export default TestScreen
