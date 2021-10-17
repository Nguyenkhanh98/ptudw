
import {createAction} from '@reduxjs/toolkit';
import {call, put, takeEvery} from 'redux-saga/effects';
import {toastr} from 'react-redux-toastr';

import {UserConstant} from './constants';

const {AAD_LOGIN_PENDING, AAD_LOGIN_CLICK, AAD_LOGIN_FAILED, AAD_LOGIN_SUCCESS,
    AAD_LOGOUT_CLICK, AAD_LOGOUT_SUCCESS
} = UserConstant;

export const loginAction = createAction(AAD_LOGIN_CLICK, (payload) => {
    return {payload}
});

export const loginPending = createAction(AAD_LOGIN_PENDING);

export const loginSuccess = createAction(AAD_LOGIN_SUCCESS);

export const loginFailed = createAction(AAD_LOGIN_FAILED, (error) => {
    return {
        payload: {error}
    };
});

export const logOutAction = createAction(AAD_LOGOUT_CLICK);
export const logOutSuccess = createAction(AAD_LOGOUT_SUCCESS);
