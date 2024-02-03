import React from 'react';
import { View, Text, ImageBackground, StatusBar } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Button, Container, Paragraph, SafeAreaWrapper, Title } from './components';

export interface SplashScreenProps extends StackScreenProps<any, any> { };

const Splash: React.FC<SplashScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={{ flex: 1 }} source={require('../../assets/images/onboardImage.jpg')} />
      <SafeAreaWrapper>
        <Container>
          <Title>Discover{'\n'}world with us</Title>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod quae nulla, praesentium consequuntur ad sequi.</Paragraph>
          <Button onPress={() => navigation.push('Home')}><Text>Get Started</Text></Button>
        </Container>
      </SafeAreaWrapper>
    </View>
  );
};

export { Splash };