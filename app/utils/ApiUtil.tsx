//@ts-nocheck
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
interface IAPIUtil {
  endpoint: string;
  method: 'get' | 'post' | 'put' | 'delete';
  params?: any;
  data?: any;
  headers?: any;
  authenticated?: boolean;
}

// export const envBackendBaseUrl = `${config_data.tvault.protocol}://${config_data.tvault.ip}:${config_data.tvault.port}/v1/${config_data.tvault.project_id}`;

export const getRequestHeaders = (headers) => {
  const mandatoryHeaders = {
    Accept: 'application/json',
  };

  let authHeaders = {};
  //   if (process.env.NODE_ENV === 'production') {
  //     const api = window.parent.pluginApi('TrillioOvirtPluginReact');
  //     authHeaders = {
  //       'x-auth-project-id': 'admin',
  //       'x-ovirtauth-token': api.ssoToken(),
  //     };
  //   } else {
  //     authHeaders = {
  //       'X-OvirtAuth-User': 'admin@internal',
  //       'X-OvirtAuth-Password': '52T8FVYZJse',
  //       'x-auth-project-id': 'admin',
  //     };
  //   }
  let mergedHeaders = { ...headers, ...authHeaders };
  let requestHeaders = Object.assign({}, mandatoryHeaders, mergedHeaders);

  //   if (process.env.REACT_APP_COOKIE_MOCK) {
  //     window.console.log('Injecting  cookie header');
  //     requestHeaders.headers = {
  //       ...requestHeaders.headers,
  //       Cookie: process.env.REACT_APP_COOKIE_MOCK,
  //     };
  //   }

  return requestHeaders;
};

const getHost = (endpoint: string) => {
  //   const host = envBackendBaseUrl ? envBackendBaseUrl : window.location.host;
  const host = 'https://60793301460a6600174fb30a.mockapi.io/api/v1/';
  return process.env.NODE_ENV !== 'production'
    ? `${host}/${endpoint}`
    : `${host}/${endpoint}`;
};

export default (args: IAPIUtil): any => {
  // if (!isEmpty(config_data)) {
  const { endpoint, method, params, data, headers } = args;

  const requestHeaders = getRequestHeaders(headers);
  const url = getHost(endpoint);

  const config = {
    withCredentials: false,
    method,
    params,
    headers: requestHeaders,
    data,
    url,
  };

  return new Promise((resolve: any, reject: any) => {
    axios.request(config).then(
      (response: any) => {
        if (response.status >= 200 && response.status <= 209) {
          resolve({ error: false, data: response.data });
        } else {
          reject({ error: true, data: response.statusText });
        }
      },
      (errorObj) => {
        console.error(errorObj, 'errorObj');
        if (errorObj && errorObj.response && errorObj.response.data) {
          reject({ error: true, data: errorObj.response.data });
        } else {
          reject({ error: true, data: errorObj });
        }
      }
    );
  });
  // }
  // else {
  //   alert('configuration file not present, Please add the file and try again');
  // }
};
