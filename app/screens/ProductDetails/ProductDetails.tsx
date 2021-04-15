import React from 'react';
import {
  Container,
  StyledImage,
  DetailedContainer,
  StyledText,
  StyledTitle,
} from './styles';
import { ILoginState } from 'app/models/reducers/login';

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
    <Container>
      <StyledImage
        source={{
          uri: `${img}700/1500`,
        }}
      />
      <DetailedContainer>
        <StyledTitle>{name}</StyledTitle>
        <StyledText>Rs {price}</StyledText>
        <StyledText>{description}</StyledText>
      </DetailedContainer>
    </Container>
  );
};

export default ProductDetails;
