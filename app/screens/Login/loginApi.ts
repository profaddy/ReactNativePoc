//@ts-nocheck
import ApiUtil from 'app/utils/ApiUtil';

export interface IGetLoginData {
  email: string;
  password: string;
}

export interface IResponseGet {
  data: any;
  error: object;
}

export const loginUser = async (payload: object) => {
  const response: IResponseGet = await ApiUtil({
    endpoint: `login`,
    method: 'post',
    headers: {},
    data: payload,
  });

  return response.data;
};
