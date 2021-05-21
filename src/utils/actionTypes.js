export const actionTypes = {
  INITIATE_LOGIN: 'INITIATE_LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',

  INITIATE_LOGOUT: 'INITIATE_LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE',

  ROUTE_TO_PATH: 'ROUTE_TO_PATH',

  GET_ALL_ZONES: 'GET_ALL_ZONES',
  GET_ALL_ZONES_SUCCESS: 'GET_ALL_ZONES_SUCCESS',
  GET_ALL_ZONES_FAILURE: 'GET_ALL_ZONES_FAILURE',

  GET_SITES_BASED_ZONE_ID: 'GET_SITES_BASED_ZONE_ID',
  GET_SITES_BASED_ZONE_ID_SUCCESS: 'GET_SITES_BASED_ZONE_ID_SUCCESS',
  GET_SITES_BASED_ZONE_ID_FAILURE: 'GET_SITES_BASED_ZONE_ID_FAILURE',

  GET_SLOTS_BASED_SITE_ID: 'GET_SLOTS_BASED_SITE_ID',
  GET_SLOTS_BASED_SITE_ID_SUCCESS: 'GET_SLOTS_BASED_SITE_ID_SUCCESS',
  GET_SLOTS_BASED_SITE_ID_FAILURE: 'GET_SLOTS_BASED_SITE_ID_FAILURE',
};
