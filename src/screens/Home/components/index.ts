import { StatusBar, TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
    background-color: ${({ theme }) => theme.color.white};
    flex: 1;
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.color.primary};
    padding-top: ${StatusBar.currentHeight}px;
`;

export const Nav = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
`;

export const HeaderTitle = styled.Text`
    font-size: 26px;
    font-weight: bold;
    padding: 0 20px;
    padding-top: 20px;
    color: ${({ theme }) => theme.color.white};
`;

export const InputContainer = styled.View`
    height: 40px;
    border: none;
    elevation: 12;
    margin: 0 20px;
    padding: 0 10px;
    gap: 5px;
    border-radius: 10px;
    align-items: center;
    transform: translateY(20px);
    position: relative;
    flex-direction: row;
    background-color: ${({ theme }) => theme.color.white};
`;