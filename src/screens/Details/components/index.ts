import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background-color: grey;
  position: relative;
  flex: 1;
`;

export const Header = styled.View`
  background-color: transparent;
  position: relative;
  width: 100%;
  height: 55%;
`;

export const HeaderContent = styled.View`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.2);
  padding: 20px;
  padding-top: ${StatusBar.currentHeight}px;
  justify-content: space-between;
  padding-bottom: 90px;
`;

export const NavBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InfoBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  width: 70%;
  color: ${({ theme }) => theme.color.white};
`;


export const Stars = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

export const StarText = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
`;

export const Favorite = styled.View`
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  right: 20px;
  top: -30px;
  width: 60px;
  height: 60px;
  elevation: 12;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.color.white};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  position: absolute;
  padding: 20px;
  padding-top: 40px;
  width: 100%;
  height: 50%;
  bottom: 0;
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextLocation = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.color.primary};
`;

export const AboutText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin: 20px 0;
`;

export const Description = styled.Text`
  line-height: 20px;
`;

export const Footer = styled.View`
  background-color: ${({ theme }) => theme.color.primary};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.color.light};
`;

export const PriceBold = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
`;

export const Button = styled.View`
  background-color: ${({ theme }) => theme.color.light};
  padding: 15px 40px;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.color.dark};
`;