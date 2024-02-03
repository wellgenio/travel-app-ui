import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

interface IProp {
  recommended: boolean;
}

export const Wrapper = styled.View<IProp>`
  ${({ recommended }) => {
    if(recommended) {
      return `
        width: ${Dimensions.get('screen').width - 40}px;
        height: 100px;
      `;
    } else {
      return `
        width: ${Dimensions.get('screen').width / 2}px;
        height: 220px;
      `;
    }
  }}; 
  margin-right: 10px;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
`;

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: space-between;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  color: ${({ theme }) => theme.color.white};
`;

export const InfoBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.Text`
  flex-direction: row;
  align-items: center;
`;

export const InfoTextWrapper = styled.View`
  transform: translateY(-2px);
  transform: translateX(2px);
`;

export const InfoText = styled.Text`
  color: ${({ theme }) => theme.color.white};
`;

export const InfoIcon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.color.white};
`;