import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/screens/Login/loginActions';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';

interface IState {
  loginReducer: ILoginState;
}
interface IProps {
  name: string;
  price: number;
  img: string;
}
const ProductDetails: React.FC<IProps> = (props: IProps) => {
  console.log(props, 'props');
  const { name, img, price, description } = props.route.params;
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: `${img}700/1500`,
        }}
      />
      <View style={styles.detailContainer}>
        <Title>{name}</Title>

        <Text>Rs {price}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 50,
  },
  detailContainer: {
    marginHorizontal: 10,
  },
  tinyLogo: {
    width: '100%',
    height: '70%',
    // resizeMode: 'stretch',
  },
});

export default ProductDetails;
