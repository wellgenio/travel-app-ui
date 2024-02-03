import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {  TouchableOpacity } from 'react-native';
import { Place } from '../../types/place';
import { placeImages } from '../../components';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../../theme';

import { 
  Wrapper, 
  Header, 
  HeaderContent, 
  NavBar, 
  InfoBar, 
  Title, 
  Stars, 
  StarText, 
  Content, 
  Favorite,
  ContentHeader,
  TextLocation,
  AboutText,
  Description,
  Footer,
  Price,
  PriceBold,
  Button,
  ButtonText
} from './components';

export interface DetailsScreenProps extends StackScreenProps<any, any> { };

const Details: React.FC<DetailsScreenProps> = ({ route, navigation }) => {
  const { place } = route.params as { place: Place; };

  return (
    <Wrapper>
      <Header>
        {placeImages[place.imageName as keyof typeof placeImages]}
        <HeaderContent>
          <NavBar>
            <TouchableOpacity onPress={() => navigation.pop()}>
              <MaterialIcons name="arrow-back-ios" size={24} color='white' />
            </TouchableOpacity>
            <MaterialIcons name="more-vert" size={24} color='white' />
          </NavBar>
          <InfoBar>
            <Title>{place.name}</Title>
            <Stars>
              <MaterialIcons name="star" size={24} color={theme.color.orange} />
              <StarText>5.0</StarText>
            </Stars>
          </InfoBar>
        </HeaderContent>
      </Header>
      <Content>
        <Favorite>
          <MaterialIcons name="favorite" size={38} color='red' />
        </Favorite>
        <ContentHeader>
          <MaterialIcons name="place" size={24} color={theme.color.primary} />
          <TextLocation>{place.location}</TextLocation>
        </ContentHeader>
        <AboutText>About the trip</AboutText>
        <Description>{place.details}</Description>
      </Content>
      <Footer>
        <Price>
          <PriceBold>$100</PriceBold>/PER DAY
        </Price>
        <Button>
          <ButtonText>Book Now</ButtonText>
        </Button>
      </Footer>
    </Wrapper>
  );
};

export { Details };