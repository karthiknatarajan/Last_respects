import { takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../utils/actionTypes';
import loginSaga from './loginSaga';
import routeURLSaga from './routeURLSaga';
import getAllZoneSaga from './getAllZoneSaga';
import getSitesBasedOnZoneIdSaga from './getSitesBasedOnZoneIdSaga';
import getSlotsBasedOnSiteIdSaga from './getSlotsBasedOnSiteIdSaga';

export default function* saga() {
  yield takeLatest(actionTypes.INITIATE_LOGIN, loginSaga);
  yield takeLatest(actionTypes.ROUTE_TO_PATH, routeURLSaga);
  yield takeLatest(actionTypes.GET_ALL_ZONES, getAllZoneSaga);
  yield takeLatest(actionTypes.GET_SITES_BASED_ZONE_ID, getSitesBasedOnZoneIdSaga);
  yield takeLatest(actionTypes.GET_SLOTS_BASED_SITE_ID, getSlotsBasedOnSiteIdSaga);
}
