import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import {
  Text,
  Button,
  TextInput,
  Title,
  Card,
  Paragraph,
} from 'react-native-paper';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },

  item: {
    flex: 0.5,
    padding: 20,
  },
});
export const Container = styled.View`
  flex: 1;
  margin-top: 5px;
`;
export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  margin-top: 5px;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  flex: 0.5;
  padding: 20px;
`;
export const StyledTitle = styled(Title)`
  font-size: 20px;
`;
export const StyledView = styled.View``;
export const StyledText = styled(Text)``;
export const StyledButton = styled(Button)``;
export const StyledCard = styled(Card)``;
export const StyledParagraph = styled(Paragraph)``;
export default styles;
