export class Constants {
  static API_BASE = 'https://api-farmart.herokuapp.com/api/v1';
  static SIGNIN_URL = `${Constants.API_BASE}/signin`;
  static SIGNUP_URL = `${Constants.API_BASE}/users`;
  static PRODUCTS_URL = `${Constants.API_BASE}/products`;
  static FARMERS_URL = `${Constants.API_BASE}/farmers`;
  static VERIFICATION_URL = `${Constants.API_BASE}/verify`;
  static VERIFY_EMAIL_URL = `${Constants.VERIFICATION_URL}/email`;
  static VERIFY_USERNAME_URL = `${Constants.VERIFICATION_URL}/username`;
  static VERIFY_TOKEN_URL = `${Constants.VERIFICATION_URL}/token`;
  static ORDERS_URL = `${Constants.API_BASE}/orders`;
  static FARMERS_ORDERS_URL = `${Constants.ORDERS_URL}/farmers`;
}
