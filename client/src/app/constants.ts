export class Constants {
  static API_BASE = 'http://localhost:3201/api/v1';
  static SIGNIN_URL = `${Constants.API_BASE}/signin`;
  static SIGNUP_URL = `${Constants.API_BASE}/users`;
  static PRODUCTS_URL = `${Constants.API_BASE}/products`;
  static FARMERS_URL = `${Constants.API_BASE}/farmers`;
  static ORDERS_URL = `${Constants.API_BASE}/orders`;
  static FARMERS_ORDERS_URL = `${Constants.ORDERS_URL}/farmers`;
}
