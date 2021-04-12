import React from 'react';
import {useState} from 'react';
import { View,SafeAreaView,FlatList, Text,StyleSheet,StatusBar,TouchableOpacity } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import products from "./productList";
import { useDispatch } from 'react-redux';
import * as loginActions from 'app/screens/Login/loginActions';
import NavigationService from "app/navigation/NavigationService";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [columns,setColumns] = useState(2);
  // const onLogout = () => dispatch(loginActions.logOut());

  const renderItem = (item:object) => {
      const product = item.item;
    return (
      <TouchableOpacity  style={styles.item} onPress={()=> {
        console.log(`pressed product ${product.title}`);
        NavigationService.navigate('Product Details',{name:product.title,price:product.price,img:product.imgSource,description:product.description})
        }
      }>
          <Card>
    <Card.Cover source={{ uri: `${product.imgSource}200/300` }} />
    <Card.Content>
    <Title>{product.title}</Title>
    <Paragraph>Rs {product.price}</Paragraph>
    </Card.Content>
  </Card>
    </TouchableOpacity>
  )}
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
          <FlatList
          key={`${columns}$item.id}`}
          numColumns={columns}                  // set number of columns 
          // columnWrapperStyle={styles.row}
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
      </SafeAreaView>
      <Button icon="grid" mode="outlined" onPress={() => columns === 1 ? setColumns(2) : setColumns(1)}>
        Toggle Grid
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:5,
    // flexDirection:"row",
    // marginTop: StatusBar.currentHeight || 0,
  },

  item: {
    flex:0.5,
    // backgroundColor: '#f9c2ff',
    padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  row: {
    flex: 1,
    justifyContent: "space-around"
}
});

export default Home;
