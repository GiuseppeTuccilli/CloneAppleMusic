import { isPlain } from "@reduxjs/toolkit";

const initialState = {
  audio: "",
  isplaying: false,
  title: "",
  cover: "",
};

const audioReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_AUDIO":
      return {
        ...state,
        audio: action.payload,
      };

    case "GET_TITLE":
      return {
        ...state,
        title: action.payload,
      };

    case "GET_COVER":
      return {
        ...state,
        cover: action.payload,
      };

    case "NOT_PLAYING":
      return {
        ...state,
        isplaying: false,
      };

    case "IS_PLAYING":
      return {
        ...state,
        isplaying: true,
      };

    default:
      return state;
  }
};

export default audioReducer;
