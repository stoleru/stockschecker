import { 
  SETTINGS_GETALL_REQUEST, 
  SETTINGS_GETALL_SUCCESS,
  SETTINGS_GETALL_FAILURE,
  SETTINGS_UPDATE_REQUEST, 
  SETTINGS_UPDATE_SUCCESS,
  SETTINGS_UPDATE_FAILURE,
  STOCKS_GETALL_REQUEST, 
  STOCKS_GETALL_SUCCESS,
  STOCKS_GETALL_FAILURE,
  STOCKS_CREATE_REQUEST, 
  STOCKS_CREATE_SUCCESS,
  STOCKS_CREATE_FAILURE
} from "./actionTypes";

import {
  settingsService,
  stocksService
} from "./services";

function settingsGetAll() {
  return dispatch => {
    dispatch(request());

    settingsService.getAll()
      .then(
        settings => dispatch(success(settings)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: SETTINGS_GETALL_REQUEST } }
  function success(settings) { return { type: SETTINGS_GETALL_SUCCESS, settings } }
  function failure(error) { return { type: SETTINGS_GETALL_FAILURE, error } }
}

function settingsUpdate(key, value) {
  return dispatch => {
    dispatch(request(key, value));
    
    settingsService.update(key, value)
      .then(
        setting => { 
          alert('Settings updated');
          dispatch(success(setting));
        },
        error => {
          dispatch(failure(error.toString()));
        }
      );
  };

  function request(setting) { return { type: SETTINGS_UPDATE_REQUEST, setting } }
  function success(setting) { return { type: SETTINGS_UPDATE_SUCCESS, setting } }
  function failure(error) { return { type: SETTINGS_UPDATE_FAILURE, error } }
}

export const settingsActions = {
  getAll: settingsGetAll,
  update: settingsUpdate
};

// stocks actions here

function stocksGetAll() {
  return dispatch => {
    dispatch(request());

    stocksService.getAll()
      .then(
        stocks => dispatch(success(stocks)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: STOCKS_GETALL_REQUEST } }
  function success(stocks) { return { type: STOCKS_GETALL_SUCCESS, stocks } }
  function failure(error) { return { type: STOCKS_GETALL_FAILURE, error } }
}

function stockCreate(data) {
  return dispatch => {
    dispatch(request(data));
    
    stocksService.create(data)
      .then(
        stock => { 
          alert('Stock created');
          dispatch(success(stock));
        },
        error => {
          dispatch(failure(error.toString()));
        }
      );
  };

  function request(stock) { return { type: STOCKS_CREATE_REQUEST, stock } }
  function success(stock) { return { type: STOCKS_CREATE_SUCCESS, stock } }
  function failure(error) { return { type: STOCKS_CREATE_FAILURE, error } }
}

export const stocksActions = {
  getAll: stocksGetAll,
  create: stockCreate
};
