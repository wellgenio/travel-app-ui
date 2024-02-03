import React from 'react';

import { placeImages } from '../../../../components';
import { Place } from '../../../../types/place';
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

interface IProps {
  place: Place;
  recommended?: boolean;
};

const Card: React.FC<IProps> = ({ place, recommended = false }) => {
  return (
    <Wrapper recommended={recommended}>
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
