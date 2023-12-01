import {
  TOGGLE_SIDEBAR,
  TOGGLE_RIGHT_SIDEBAR,
  CLEAR_ALERT,
  DISPLAY_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  // TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,

  HANDLE_CHANGE,
  CLEAR_VALUES,

  SEND_CARTITEMS_BEGIN,
  SEND_CARTITEMS_ERROR,
  SEND_CARTITEMS_SUCCESS,

  UPDATE_CARTITEMS_BEGIN,
  UPDATE_CARTITEMS_SUCCESS,
  UPDATE_CARTITEMS_ERROR,

  GET_CARTITEMS_SUCCESS,
  GET_CARTITEMS_ERROR,
  GET_CARTITEMS_BEGIN,

  DELETE_CARTITEMS_BEGIN,
  DELETE_FAVITEMS_BEGIN, 

  SEND_FAVITEMS_SUCCESS, 
  SEND_FAVITEMS_BEGIN, 
  SEND_FAVITEMS_ERROR, 

  GET_FAVITEMS_BEGIN, 
  GET_FAVITEMS_SUCCESS, 
  GET_FAVITEMS_ERROR, 

  UPDATE_FAVITEMS_BEGIN, 
  UPDATE_FAVITEMS_SUCCESS, 
  UPDATE_FAVITEMS_ERROR, 
  

  // CREATE_JOB_BEGIN,
  // CREATE_JOB_SUCCESS,
  // CREATE_JOB_ERROR,
  // GET_JOBS_BEGIN,
  // GET_JOBS_SUCCESS,
  // SET_EDIT_JOB,
  // DELETE_JOB_BEGIN,
  // EDIT_JOB_BEGIN,
  // EDIT_JOB_SUCCESS,
  // EDIT_JOB_ERROR,
  // SHOW_STATS_SUCCESS,
  // SHOW_STATS_BEGIN,
  // CLEAR_FILTERS,
} from "./actions";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, ...initialState, showSidebar: !state.showSidebar };
  }
  if (action.type === TOGGLE_RIGHT_SIDEBAR) {
    return {
      ...state,
      ...initialState,
      showRightSidebar: !state.showRightSidebar,
    };
  }

  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  if (action.type === SETUP_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,

      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  // if (action.type === TOGGLE_SIDEBAR) {
  //   return { ...state, showSidebar: !state.showSidebar };
  // }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      // userLocation: "",
      // jobLocation: "",
    };
  }

  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      // userLocation: action.payload.location,
      // jobLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: "User Profile Updated!",
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type == SEND_CARTITEMS_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type == SEND_CARTITEMS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Cart Items Sent!",
    };
  }
  if (action.type === SEND_CARTITEMS_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type == UPDATE_CARTITEMS_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type == UPDATE_CARTITEMS_SUCCESS) {
    // console.log(action.payload)
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: "Cart Items Updates!",
    };
  }
  if (action.type === UPDATE_CARTITEMS_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type == GET_CARTITEMS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type == GET_CARTITEMS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      retrievedItems: action.payload.cartItems,
      found: true,
    };
  }
  if (action.type == GET_CARTITEMS_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
      found: false,
    };
  }
  if (action.type == DELETE_CARTITEMS_BEGIN) {
    return { ...state, isLoading: true };
  }

  //-------------fav list -------------------
  if (action.type == SEND_FAVITEMS_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type == SEND_FAVITEMS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Cart Items Sent!",
    };
  }
  if (action.type === SEND_FAVITEMS_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }


  if (action.type == GET_FAVITEMS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type == GET_FAVITEMS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      retrievedItems: action.payload.favItems,
      found: true,
    };
  }
  if (action.type == GET_FAVITEMS_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
      found: false,
    };
  }
  if (action.type == UPDATE_FAVITEMS_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type == UPDATE_FAVITEMS_SUCCESS) {
    // console.log(action.payload)
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: "Fav Items Updates!",
    };
  }
  if (action.type === UPDATE_FAVITEMS_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type == DELETE_FAVITEMS_BEGIN) {
    return { ...state, isLoading: true };
  }
  
};

export default reducer;
