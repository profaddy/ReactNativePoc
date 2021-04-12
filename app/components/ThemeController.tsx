import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Button,IconButton } from 'react-native-paper';

import * as themeActions from 'app/store/actions/themeActions';
import * as loginActions from 'app/screens/Login/loginActions';
import { IThemeState } from 'app/models/reducers/theme';


interface IState {
  themeReducer: IThemeState;
}
interface IProps {
  isLoggedIn: boolean;
}

const ThemeController: React.FC<IProps> = (props: IProps) => {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);

  const dispatch = useDispatch();
  const onToggleTheme = () => dispatch(themeActions.setIsDarkTheme(!isDark));
  const onLogout = () => dispatch(loginActions.logOut());
  const iconName = isDark ? 'weather-night' : 'white-balance-sunny';
  const iconColor = isDark ? 'white' : 'black';
  const { isLoggedIn } = props;
  console.log(isLoggedIn,"isLoggedIn");

  return (
    <View style={styles.container}>
      <Switch value={isDark} onValueChange={onToggleTheme} />
      <Icon name={iconName} size={20} style={styles.icon} color={iconColor} onPress={onLogout}/>
      {isLoggedIn && 
        <Icon name={"logout"} size={20} style={styles.icon} color={iconColor} onPress={onLogout}/>
      }
 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 12,
  },
  icon: { marginLeft: 4 },
});

export default ThemeController;
