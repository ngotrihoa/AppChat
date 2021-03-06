const SOCKET_CHAT_HOST = 'https://chat-app-socket-cn11.herokuapp.com';
// const SOCKET_CHAT_HOST = 'http://localhost:3001';
const PEERJS_SERVER = 'peerjs-cn11-server.herokuapp.com';

const SOCKET_NAMESPACE = {
  USER: "/USER",
  CONVERSATION: "/CONVERSATION",
  NOTIFICATION: "/NOTIFICATION",
  CALL: "/CALL",
};

const SOCKET_ON_ACTIONS = {
  AUTHEN_SUCCESS: "AUTHEN_SUCCESS",
  AUTHEN_FAIL: "AUTHEN_FAIL",
  USER_QUIT_APPLICATION: "USER_QUIT_APPLICATION",
  USER_JOIN_APPLICATION: "USER_JOIN_APPLICATION",
  LIST_FRIEND: "LIST_FRIEND",
  EMIT_MESSAGE: "EMIT_MESSAGE",
  EMIT_NOTIFICATION: "EMIT_NOTIFICATION",
  SOCKET_READY: "SOCKET_READY",
  EMIT_IS_TYPING: "EMIT_IS_TYPING",
  EMIT_STOP_TYPING: "EMIT_STOP_TYPING",
  JOIN_NEW_ROOM: "JOIN_NEW_ROOM",
  EMIT_LIST_USER_RESPONSE: "EMIT_LIST_USER_RESPONSE",
  EMIT_SIGNAL_OFFER: "EMIT_SIGNAL_OFFER",
  EMIT_SIGNAL_ANSWER: "EMIT_SIGNAL_ANSWER",
  USERS_JOIN_ROOM: "USERS_JOIN_ROOM",
  EMIT_SOMEONE_CALL: "EMIT_SOMEONE_CALL",
};

const SOCKET_EMIT_ACTIONS = {
  ON_DISCONNECT: "ON_DISCONNECT",
  ON_MESSAGE: "ON_MESSAGE",
  ON_STOP_TYPING: "ON_STOP_TYPING",
  ON_TYPING: "ON_TYPING",
  ON_AUTHENTICATE: "ON_AUTHENTICATE",
  ON_SENDING_SIGNAL: "ON_SENDING_SIGNAL",
  ON_GET_LIST_USER_IN_ROOM: "ON_GET_LIST_USER_IN_ROOM",
  ON_SEND_OFFER_SIGNAL: "ON_SEND_OFFER_SIGNAL",
  ON_SEND_ANSWER_SIGNAL: "ON_SEND_ANSWER_SIGNAL",
  ON_CALL_VIDEO_INFO: "ON_CALL_VIDEO_INFO",
};
const HttpStatusCode = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  NETWORK_ERROR: 500,
};

const MESSAGE_TYPE = {
  TEXT: 0,
  IMAGE: 1,
  ICON: 2,
  VIDEO: 3,
  TEXT_AND_IMAGE: 4,
};

const MESSAGE_STATUS = {
  ERROR: -1,
  PENDING: 0,
  FULFILLED: 1,
};

const CONVERSATION_TYPE = {
  SINGLE: 0,
  GROUP: 1,
};

const FRIEND_STATUS = {
  FRIEND: 1,
  PENDING: 0,
  STRANGE: -1,
  BLOCK: -2,
};

const NOTIFICATION_TYPE = {
  FRIEND_REQUEST: 1,
  NEW_MESSAGE: 0,
  ACCEPT_FRIEND_REQUEST: 2,
};

const NOTIFICATION_STATUS = {
  REJECT: -1,
  PENDING: 0,
  FULFILLED: 1,
};

export {
  SOCKET_CHAT_HOST,
  SOCKET_NAMESPACE,
  SOCKET_ON_ACTIONS,
  SOCKET_EMIT_ACTIONS,
  HttpStatusCode,
  MESSAGE_TYPE,
  MESSAGE_STATUS,
  PEERJS_SERVER,
  CONVERSATION_TYPE,
  FRIEND_STATUS,
  NOTIFICATION_TYPE,
  NOTIFICATION_STATUS,
};
