import React, { ReactElement } from 'react';
import { View, Text, ImageBackground, Dimensions } from 'react-native';
import { Place } from '../../../../types/place';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import {
  Wrapper,
  Container,
  Title,
  InfoBar,
  Info,
  InfoIcon,
  InfoText,
  InfoTextWrapper
} from './components';

const placeImages = {
  'location1': <ImageBackground style={{ flex: 1 }} source={require('../../../../assets/images/location1.jpg')} />,
  'location2': <ImageBackground style={{ flex: 1 }} source={require('../../../../assets/images/location2.jpg')} />,
  'location3': <ImageBackground style={{ flex: 1 }} source={require('../../../../assets/images/location3.jpg')} />,
  'location4': <ImageBackground style={{ flex: 1 }} source={require('../../../../assets/images/location4.jpg')} />
};

interface IProps {
  place: Place;
};

const Card: React.FC<IProps> = ({ place }) => {
  return (
    <Wrapper>
      {placeImages[place.imageName as keyof typeof placeImages]}
      <Container>
        <Title>{place.name}</Title>
        <InfoBar>
          <Info>
            <InfoIcon name="place" size={20} />
            <InfoTextWrapper>
              <InfoText>{place.location}</InfoText>
            </InfoTextWrapper>
          </Info>

          <Info>
            <InfoIcon name="star" size={20} />
            <InfoTextWrapper>
              <InfoText>5.0</InfoText>
            </InfoTextWrapper>
          </Info>
        </InfoBar>
      </Container>
    </Wrapper>
  );
};

export { Card };
