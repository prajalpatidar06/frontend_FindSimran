import { SET_CHAT, SET_CHATS, UPDATE_CHAT, LOADING_CHATS } from "../types";

const initialState = {
  groups: [],
  group: {},
  loading: false,
};

export default function ChangeState(state = initialState, action) {
  switch (action.type) {
    case LOADING_CHATS:
      return {
        ...state,
        loading: true,
      };

    case SET_CHATS:
      return {
        ...state,
        groups: action.payload,
        loading: false,
      };

    case SET_CHAT:
      return {
        ...state,
        group: action.payload,
        loading: false,
      };

    case UPDATE_CHAT:
      return {
        ...state,
        group: {
          ...state.group,
          messages: [...state.group.messages, action.payload],
        },
        loading: false,
      };

    default:
      return state;
  }
}
