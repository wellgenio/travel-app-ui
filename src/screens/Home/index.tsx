import React from 'react';
import { StatusBar, TextInput } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { Wrapper, Header, HeaderTitle, Nav, InputContainer } from './components';

const Home: React.FC = () => {
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
        </Wrapper>
    );
};

export { Home };