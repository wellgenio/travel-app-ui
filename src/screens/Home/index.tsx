import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello world!</Text>
      </View>
    </SafeAreaView>
  );
};

export { Home };