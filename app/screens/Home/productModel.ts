export interface IProductListState {
  id: number;
  title: string;
  description: string;
  price: number;
  imgSource: string;
}
export interface IProductsState {
  productList: Array<any>;
  fetchingStatus: string;
}
interface IResponse {
  data: any;
}

export interface IProductListResponseState {
  type: String;
  response: IResponse;
}
