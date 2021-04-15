import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Text, Button, TextInput, Title } from 'react-native-paper';
const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 12,
  },
});
export const ScrollView = styled.ScrollView``;
export const StyledButton = styled(Button)`
  font-size: 50px;
  margin-top: 12px;
`;
export const FormContainerWrapper = styled.View`
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
`;
export const FormContainer = styled.View`
  margin: 20px;
  justify-content: center;
`;
export const FormField = styled.View`
  margin-bottom: 20px;
`;
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const StyledTextInput = styled(TextInput)``;
export const StyledTitle = styled(Title)``;
export const StyledView = styled.View``;
export const StyledText = styled(Text)``;
export default styles;
