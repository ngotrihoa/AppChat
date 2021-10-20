import { login, signup, relogin, getListMessage } from "../../services/apiMap";
import { call, put } from "redux-saga/effects";
import { HttpStatusCode } from "../../common/constant";
import { AuthActions } from "../reducer/auth";
export const AuthSaga = {
  *login(action) {
    try {
      // Axios response data type
      const response = yield call(() => login(action.payload));
      if (response.status === HttpStatusCode.SUCCESS) {
        yield put(AuthActions.loginSucceed(response.data));
      }
    } catch (err) {}
  },

  *relogin(action) {
    try {
      const response = yield call(() => relogin(action.payload || {}));
      if (response.status === HttpStatusCode.SUCCESS) {
        yield put(AuthActions.reloginSucceed(response.data));
      }
    } catch (err) {}
  },

  *requestListMessage(action) {
    let response = yield call(getListMessage, action.payload);
    try {
      if (response.status === HttpStatusCode.SUCCESS) {
        let responseData = response.data.data;
        yield put(AuthActions.authSuccess({ listMessage: responseData }));
      } else {
        yield put(AuthActions.authFailure());
      }
    } catch (error) {
      yield put(AuthActions.authFailure(error));
    }
  },
};
