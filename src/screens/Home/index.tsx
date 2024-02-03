import React from 'react';
import { StatusBar, TextInput, FlatList, View, Text } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import theme from '../../theme';
import {
  Wrapper,
  Header,
  HeaderTitle,
  Nav,
  InputContainer,
  ListCategories,
  CategoryIcon,
  Section,
  Title,
  ListPlaces
} from './components';
import { Card } from './components/Card';
import { usePlaces } from '../../hooks/usePlaces';

const places = [{}, {}];

const categoryIcons = [
  <MaterialIcons name="flight" size={24} color={theme.color.primary} />,
  <MaterialIcons name="beach-access" size={24} color={theme.color.primary} />,
  <MaterialIcons name="near-me" size={24} color={theme.color.primary} />,
  <MaterialIcons name="place" size={24} color={theme.color.primary} />,
];

const Home: React.FC = () => {
  const { places } = usePlaces();

  return (
    <Wrapper>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <Header>
        <Nav>
          <MaterialCommunityIcons name="sort-variant" size={24} color="white" />
          <MaterialIcons name="notifications-none" size={24} color="white" />
        </Nav>
        <HeaderTitle>
          Explore the{'\n'}beautiful places
        </HeaderTitle>
        <InputContainer>
          <MaterialIcons name="search" size={24} color="black" />
          <TextInput placeholder='Search places' />
        </InputContainer>
      </Header>
      <ListCategories>
        {categoryIcons.map((icon, index) => <CategoryIcon key={index}>{icon}</CategoryIcon>)}
      </ListCategories>
      <Section>
        <Title>
          Places
        </Title>
        <ListPlaces>
          <FlatList
            horizontal
            data={places}
            overScrollMode='never'
            renderItem={({ item: place }) => <Card place={place} />}
          />
        </ListPlaces>
      </Section>
      <Section>
        <Title>
          Recommended
        </Title>
        <ListPlaces>
          <FlatList
            horizontal
            overScrollMode='never'
            data={[...(places || [])].reverse()}
            renderItem={({ item: place }) => <Card place={place} recommended />}
          />
        </ListPlaces>
      </Section>
    </Wrapper>
  );
};

export { Home };