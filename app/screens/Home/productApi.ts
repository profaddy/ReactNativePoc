//@ts-nocheck
import ApiUtil from 'app/utils/ApiUtil';

export interface IGetProductsData {
  id: number;
  title: string;
  description: string;
  price: number;
  imgSource: string;
}

export interface IResponseGet {
  data: any;
  error: object;
}

export const getProductList: IGetProductsData | object = async () => {
  const response: IResponseGet = await ApiUtil({
    endpoint: 'products',
    method: 'get',
    headers: {},
  });

  return response.data;
};
