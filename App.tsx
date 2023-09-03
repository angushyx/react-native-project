import React from 'react';
import { withExpoSnack } from 'nativewind';

import { Text, View } from 'react-native';
import { styled } from 'nativewind';
import TestScreen from './screens/TestScreen';

const StyledView = styled(View)
const StyledText = styled(Text)

const App = () => {
  return (
    <StyledView className="flex-1 items-center justify-center">
      <StyledText className="text-red-300">
        Try editing me! 🎉
      </StyledText>
      <TestScreen />
    </StyledView>
  );
}

export default withExpoSnack(App);
