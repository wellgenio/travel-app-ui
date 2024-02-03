import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const SafeAreaWrapper = styled(SafeAreaView)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Container = styled.View`
  justify-content: center;
  align-content: center;
  flex: 1;
  padding: 0 40px;
  transform: translateY(90px);
`;

export const Title = styled.Text`
  font-size: 35;
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
`;

export const Paragraph = styled.Text`
  line-height: 25px;
  margin: 20px auto;
  color: ${({ theme }) => theme.color.white};
`;

export const Button = styled.TouchableOpacity`
  padding: 10px;
  width: 100px;
  border-radius: 6px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
`;