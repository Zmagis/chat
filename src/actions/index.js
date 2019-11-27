import * as types from "../constants/ActionTypes";

let nextMessageId = 0;
let nextUserId = 0;

//messages I add
export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
});

export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
});

//messages from other users
export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
});

export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
});
