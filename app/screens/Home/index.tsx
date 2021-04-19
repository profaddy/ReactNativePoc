import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, TouchableOpacity } from 'react-native';
import {
  StyledTitle,
  Container,
  StyledButton,
  StyledSafeAreaView,
  StyledCard,
  StyledParagraph,
} from './styles.ts';
import styles from './styles';
import products from './productList';
import NavigationService from 'app/navigation/NavigationService';
import * as productActions from './productActions';

const Home: React.FC = () => {
  const [products1, setProducts1] = useState([]);
  const productList = useSelector(
    (state: IState) => state.productReducer.productList
  );

  const dispatch = useDispatch();
  const [columns, setColumns] = useState(2);
  // const onLogout = () => dispatch(loginActions.logOut());
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    dispatch(productActions.getProducts());
    // console.log(productList, 'productList in component');
  };
  console.log(productList, 'productList in component');

  const renderItem = (item: object) => {
    const product = item.item;
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          console.log(`pressed product ${product.title}`);
          NavigationService.navigate('Product Details', {
            name: product.title,
            price: product.price,
            img: product.imgSource,
            description: product.description,
          });
        }}
      >
        <StyledCard>
          <StyledCard.Cover source={{ uri: `${product.imgSource}200/300` }} />
          <StyledCard.Content>
            <StyledTitle>{product.title}</StyledTitle>
            <StyledParagraph>Rs {product.price}</StyledParagraph>
          </StyledCard.Content>
        </StyledCard>
      </TouchableOpacity>
    );
  };
  return (
    <Container>
      <StyledSafeAreaView style={styles.container}>
        <FlatList
          key={`${columns}$item.id}`}
          numColumns={columns} // set number of columns
          // columnWrapperStyle={styles.row}
          data={productList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </StyledSafeAreaView>
      <StyledButton
        icon="grid"
        mode="outlined"
        onPress={() => (columns === 1 ? setColumns(2) : setColumns(1))}
      >
        Toggle Grid
      </StyledButton>
    </Container>
  );
};

export default Home;
