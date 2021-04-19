import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Text, Button, TextInput, Title } from 'react-native-paper';
// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   // },
//   // formContainer: {
//   //   // flex:1,
//   //   width:"100%",
//   //   marginLeft:20,
//   //   // marginLeft:20,
//   //   marginRight:20
//   // }
// });
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
  margin: 20px;
  justify-content: center;
`;
export const ErrorText = styled(Text)`
  font-size: 10;
  color: red;
`;
export const StyledTextInput = styled(TextInput)``;
export const StyledTitle = styled(Title)`
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;
export const StyledView = styled.View``;
export const StyledText = styled(Text)``;
