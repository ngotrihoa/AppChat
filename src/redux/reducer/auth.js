import { createActions, createReducer } from "reduxsauce";
import { parseJwt } from "../../common/functions";
import { createSelector } from "reselect";
const { Types, Creators } = createActions({
  loginRequest: ["payload"],
  loginSucceed: ["payload"],
  relogin: ["payload"],
  reloginSucceed: ["payload"],
  setConversationSocketReady: ["payload"],
  setNotificationSocketReady: ["payload"],
  setUserSocketReady: ["payload"],
  requestListMessage: ["payload"],

  authSuccess: ["payload"],
  authFailure: ["payload"],
});

export const AUTH_INITIAL_STATE = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isFetching: false,
  socketReadyFlags: {
    conversation: false,
    notification: false,
    user: false,
  },

  listMessage: {},
};

const selectSelf = state => state.auth;
const selectAccessToken = createSelector(
  selectSelf,
  state => state.accessToken
);
const selectAllSocketFlags = createSelector(
  selectSelf,
  state => state.socketReadyFlags
);

const handleLoginSucceed = (state, { payload }) => {
  return {
    ...state,
    isFetching: false,
    user: parseJwt(payload.accessToken),
    accessToken: payload.accessToken,
    refreshToken: payload.refreshToken,
  };
};

const request = state => ({
  ...state,
  isFetching: true,
});

export const finish = (state = AUTH_INITIAL_STATE, payload) => {
  let data = payload.data ? payload.data : {};
  return {
    ...state,
    isFetching: false,
    ...data,
  };
};

const handleReloginSucceed = (state, { payload }) => {
  return {
    ...state,
    isFetching: false,
    accessToken: payload.accessToken,
  };
};

const setConversationSocketReady = state => {
  return {
    ...state,
    socketReadyFlags: { ...state.socketReadyFlags, conversation: true },
  };
};
const setNotificationSocketReady = state => {
  return {
    ...state,
    socketReadyFlags: { ...state.socketReadyFlags, notification: true },
  };
};
const setUserSocketReady = state => {
  return {
    ...state,
    socketReadyFlags: { ...state.socketReadyFlags, user: true },
  };
};

export const AuthTypes = Types;
export const AuthActions = Creators;

export const selectIsLogin = createSelector(selectAccessToken, accessToken => {
  if (accessToken) {
    const parsedToken = parseJwt(accessToken);
    const now = Date.now();
    return parsedToken.exp * 1000 > now ? true : false;
  } else return false;
});

export const selectSocketConnectionSuccess = createSelector(
  selectAllSocketFlags,
  socketFlags => {
    const socketList = { ...socketFlags };
    Object.keys(socketFlags).map(key => {
      if (!socketList[key]) delete socketList[key];
    });
    return Object.keys(socketFlags).length === Object.keys(socketFlags).length;
  }
);

export const AuthReducer = createReducer(AUTH_INITIAL_STATE, {
  [AuthTypes.LOGIN_SUCCEED]: handleLoginSucceed,
  [AuthTypes.SET_CONVERSATION_SOCKET_READY]: setConversationSocketReady,
  [AuthTypes.SET_NOTIFICATION_SOCKET_READY]: setNotificationSocketReady,
  [AuthTypes.SET_USER_SOCKET_READY]: setUserSocketReady,
  [AuthTypes.RELOGIN_SUCCEED]: handleReloginSucceed,
  [AuthTypes.REQUEST_LIST_MESSAGE]: request,

  [AuthTypes.AUTH_SUCCESS]: finish,
  [AuthTypes.AUTH_FAILURE]: finish,
});
