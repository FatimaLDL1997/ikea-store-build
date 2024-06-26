import React, { useReducer, useEffect, useContext, useState } from "react";
import { toast } from "react-toastify";
import {
  TOGGLE_SIDEBAR,
  TOGGLE_RIGHT_SIDEBAR,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
  LOGOUT_USER,
  SEND_CARTITEMS_SUCCESS,
  SEND_CARTITEMS_BEGIN,
  SEND_CARTITEMS_ERROR,
  SEND_FAVITEMS_SUCCESS,
  SEND_FAVITEMS_BEGIN,
  SEND_FAVITEMS_ERROR,
  UPDATE_CARTITEMS_BEGIN,
  UPDATE_CARTITEMS_SUCCESS,
  UPDATE_CARTITEMS_ERROR,
  UPDATE_FAVITEMS_BEGIN,
  UPDATE_FAVITEMS_SUCCESS,
  UPDATE_FAVITEMS_ERROR,
  UPDATE_ADDRESS_BEGIN,
  UPDATE_ADDRESS_SUCCESS,
  UPDATE_ADDRESS_ERROR,
  GET_CARTITEMS_SUCCESS,
  GET_CARTITEMS_BEGIN,
  GET_CARTITEMS_ERROR,
  GET_FAVITEMS_BEGIN,
  GET_FAVITEMS_SUCCESS,
  GET_FAVITEMS_ERROR,
  DELETE_CARTITEMS_BEGIN,
  DELETE_FAVITEMS_BEGIN,
  GET_SEARCHED_BEGIN,
  GET_SEARCHED_SUCCESS,
  GET_SEARCHED_ERROR,
  HANDLE_CHANGE,
} from "./actions";

import reducer from "./reducers";
import axios from "axios";
// import products from "../utils/products";

// set as default
const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

export const initialState = {
  showSidebar: false,
  showRightSidebar: false,

  isLoading: false,

  showAlert: false,
  alertText: "",
  alertType: "",

  user: user ? JSON.parse(user) : null,
  token: token,
  retrievedItems: [],
  // found: false,
  // cartItems: items ? JSON.parse(items):[],
  // cartList: cartList,

  // userLocation: userLocation || "",
  // showSidebar: false,
  // isEditing: false,
  // editJobId: "",
  // position: "",
  // company: "",
  // jobLocation: userLocation || "",
  // jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  // jobType: "full-time",
  // statusOptions: ["pending", "interview", "declined"],
  // status: "pending",
  // jobs: [],
  prods: [],
  // totalJobs: 0,
  // numOfPages: 1,
  // page: 1,
  // stats: {},
  // monthlyApplications: [],

  search: "",
  // searchStatus: "all",
  // searchType: "all",
  // sort: "latest",
  // sortOptions: ["latest", "oldest", "a-z", "z-a"],
};
// console.log("origin")
// console.log(token)
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(
    () => updateState({}),

    []
  );

  const [total, setTotal] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  const [totalFavs, setTotalFavs] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);
  const [show, setShow] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [index, setIndex] = useState(0);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [found, setFound] = useState(false);
  const [foundFav, setFoundFav] = useState(false);

  const [displaySearched, setDisplaySearched] = useState(false);

  const [receiveType, setReceiveType] = useState("");
  const [receivePrice, setReceivePrice] = useState(0);

  const [loading, setLoading] = useState(false);

  const [activeProd, setActiveProd] = useState(true);
  const [activeRm, setActiveRm] = useState(false);

  const [address, setAddress] = useState("A1B 2C3");

  // const [reloadCount, setReloadCount] = useState(()=>{
  //   const count = localStorage.getItem("reloadCount");
  //   console.log(count);
  //   return JSON.parse(count) ||0;
  // });
  //---------------------axios----------------
  //axios
  axios.defaults.headers["Authorization"] = `Bearer ${state.token}`;
  //axios instance setup
  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  // request
  authFetch.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //response
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser();
        console.log("logging out ......");
      }
      return Promise.reject(error);
    }
  );

  const [cartItems, setCartItems] = useState(() => {
    //getting local storage value if any
    const savedItems = localStorage.getItem("cartItems");
    // console.log(savedItems);
    return JSON.parse(savedItems) || [];
  });

  const [favItems, setFavItems] = useState(() => {
    //getting local storage value if any
    const savedItems = localStorage.getItem("favItems");
    // console.log(savedItems);
    return JSON.parse(savedItems) || [];
  });

  const [showPopUp, setShowPopUp] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const toggleInfoPopUp = () => {
    setShowInfo(!showInfo);
  };

  const setWindowDimensions = () => {
    //------------------window width --------------
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);

    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, [window.innerWidth]);

  const [title, setTitle] = useState(
    document.querySelector(".window-title").innerHTML
  );

  //-------------------alert-----------------------
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };
  const addCartItemsToLocalStorage = ({ cartItems }) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  const removeCartItemsFromLocalStorage = () => {
    localStorage.removeItem("cartItems");
  };

  const addFavItemsToLocalStorage = ({ favItems }) => {
    localStorage.setItem("favItems", JSON.stringify(favItems));
  };
  const removeFavItemsFromLocalStorage = () => {
    localStorage.removeItem("favItems");
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user)); //since user is an object
    localStorage.setItem("token", token);
  };
  //------------local storage------------------
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  const setupUser = async ({ currentUser, endpoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      //using template liSETUP to dynamically pass in arguments
      //frontend --> backend
      const response = await axios.post(
        `/api/v1/auth/${endpoint}`,
        currentUser
      );

      const { user, token } = response.data;
      // console.log(response.data);
      // console.log("good");

      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, alertText },
      });

      addUserToLocalStorage({
        user,
        token,
      });
    } catch (error) {
      //local storage later
      toast.error("Something you entered is wrong. Please try again!");
      // console.log(error.response);

      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  //--------------sidebar---------------------
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };
  const toggleRightSidebar = () => {
    dispatch({ type: TOGGLE_RIGHT_SIDEBAR });
  };
  //--------------logout user-------------
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
    removeCartItemsFromLocalStorage();
    removeFavItemsFromLocalStorage();
  };

  //------------------------------------

  const calTotal = () => {
    setTotal(0);
    cartItems.forEach((element) => {
      setTotal((oldTotal) => {
        oldTotal =
          oldTotal +
          parseFloat(element[0].price) * parseFloat(element[0].amount);
        // console.log(oldTotal)
        return oldTotal;
      });
    });
  };

  const calTotalProd = () => {
    setTotalProducts(0);
    cartItems.forEach((element) => {
      setTotalProducts((oldTotal) => {
        oldTotal = oldTotal + parseFloat(element[0].amount);
        return oldTotal;
      });
    });
  };

  const calTotalFav = () => {
    setTotalFavs(0);
    favItems.forEach((element) => {
      setTotalFavs((oldTotal) => {
        oldTotal = oldTotal + parseFloat(element[0].amount);
        return oldTotal;
      });
    });
    //  console.log('favs total: ')
    //  console.log(totalFavs)
  };

  //-------------backend functions ---------------

  const sendCartItems = async () => {
    dispatch({ type: SEND_CARTITEMS_BEGIN });
    try {
      await authFetch.post("/prod", {
        cartItems,
      });

      dispatch({ type: SEND_CARTITEMS_SUCCESS });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: SEND_CARTITEMS_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const updateCartItems = async (currentCartItems) => {
    dispatch({ type: UPDATE_CARTITEMS_BEGIN });
    try {
      await authFetch.patch(`/prod`, currentCartItems);
      dispatch({
        type: UPDATE_CARTITEMS_SUCCESS,
        payload: { currentCartItems, token, user },
      });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: UPDATE_CARTITEMS_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  //for search _____________
  const getSearchedItems = async () => {
    // console.log("searching items app context");

    let url = "/find";
    const { search } = state;
    if (search) {
      url = `/find?search=${search}`;
    }
    // console.log(url);
    dispatch({ type: GET_SEARCHED_BEGIN });
    try {
      const { data } = await authFetch(url);
      // console.log(data);

      const { prods } = data;
      // console.log(prods);

      dispatch({ type: GET_SEARCHED_SUCCESS, payload: { prods } });
    } catch (error) {
      // console.log("Error searching: " + error.message);
    }
    clearAlert();
  };

  const handleChange = ({ name, value }) => {
    dispatch({
      type: HANDLE_CHANGE,
      payload: { name, value },
    });
  };

  //__________________________
  const getCartItems = async () => {
    // console.log("getting");
    dispatch({ type: GET_CARTITEMS_BEGIN });
    try {
      const { data } = await authFetch.get("/prod");
      // console.log(data.retrievedItems);

      if (data.retrievedItems) {
        // console.log("successfully in");
        const { retrievedItems } = data;
        const { cartItems } = retrievedItems;

        setFound(true);
        addCartItemsToLocalStorage({ cartItems });
        dispatch({ type: GET_CARTITEMS_SUCCESS, payload: { cartItems } });
      }
      //  else {
      //   setFound(false);
      //   // console.log("no data retrieved");
      // }
    } catch (error) {
      // logoutUser()
      setFound(false);

      dispatch({
        type: GET_CARTITEMS_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const emptyCartItems = async () => {
    // console.log("starting Delete All");
    dispatch({ type: DELETE_CARTITEMS_BEGIN });
    try {
      // console.log("here........");
      await authFetch.delete("/prod");
    } catch (error) {
      // console.log("logging out! delete error");
    }
  };

  //----------------------backend for fav -------------

  const sendFavItems = async () => {
    dispatch({ type: SEND_FAVITEMS_BEGIN });
    try {
      await authFetch.post("/fav", {
        favItems,
      });

      dispatch({ type: SEND_FAVITEMS_SUCCESS });
    } catch (error) {
      if (error.response.status === 401) return;

      dispatch({
        type: SEND_FAVITEMS_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const getFavItems = async () => {
    // console.log("getting favs");
    dispatch({ type: GET_FAVITEMS_BEGIN });
    try {
      if (user != null) {
        const { data } = await authFetch.get("/fav");
        // console.log(data.retrievedItems);

        if (data.retrievedItems) {
          // console.log("favs gotten");
          const { retrievedItems } = data;
          const { favItems } = retrievedItems;

          setFoundFav(true);
          addFavItemsToLocalStorage({ favItems });
          dispatch({ type: GET_FAVITEMS_SUCCESS, payload: { favItems } });
        }
      }
      //  else {
      //   setFound(false);
      //   // console.log("no data retrieved");
      // }
    } catch (error) {
      // logoutUser()
      setFoundFav(false);

      dispatch({
        type: GET_CARTITEMS_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const updateFavItems = async (currentFavItems) => {
    dispatch({ type: UPDATE_FAVITEMS_BEGIN });
    try {
      if (user != null) {
        await authFetch.patch(`/fav`, currentFavItems);
        dispatch({
          type: UPDATE_FAVITEMS_SUCCESS,
          payload: { currentFavItems, token, user },
        });
      }
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: UPDATE_FAVITEMS_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const emptyFavItems = async () => {
    // console.log("starting Delete All Favs");
    dispatch({ type: DELETE_FAVITEMS_BEGIN });
    try {
      // console.log("here........");
      await authFetch.delete("/fav");
    } catch (error) {
      // console.log("logging out! delete error");
    }
  };

  function okNumber(myform) {
    var regex = /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]\d *$/;
    if (regex.test(myform) == false) {
      console.log("Invalid");

      return false;
    }
    console.log(" Valid ");

    return true;
  }

  const handleAddressChange = (e) => {
    e.preventDefault()
    let addressInput = document.getElementsByClassName("address")[0];

    // setAddress(e.children[0].target.value.toUpperCase());
    console.log(addressInput.style);
    console.log(okNumber(address));
    if (!okNumber(address)) {
      // setAddress('')
      toggleInfoPopUp()
      toast.error('Please make sure you use this format: A1B 2C3 or A1B2C3')
      addressInput.style.border = '3px solid red';
      console.log("please make sure you use this format: A1B 2C3");
    } else {
      addressInput.style.border = '3px solid green';
    }
  };

  //----------------------------------------------------

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function makeDelay(time) {
    await delay(time);
    setLoading(false);
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleSidebar,
        toggleRightSidebar,

        logoutUser,

        show,
        setShow,
        clicked,
        setClicked,
        title,
        setTitle,
        index,
        setIndex,

        windowHeight,
        windowWidth,
        setWindowHeight,
        setWindowWidth,
        setWindowDimensions,

        setupUser,

        displayAlert,

        cartItems,
        favItems,

        setCartItems,
        setFavItems,

        addCartItemsToLocalStorage,
        addFavItemsToLocalStorage,

        setShowPopUp,
        showPopUp,
        showInfo,
        setShowInfo,

        togglePopUp,
        toggleInfoPopUp,

        forceUpdate,
        total,
        calTotal,
        totalProducts,

        totalFavs,
        setTotalFavs,

        calTotalProd,
        calTotalFav,

        //backend
        sendCartItems,
        sendFavItems,

        getCartItems,
        getFavItems,

        updateCartItems,
        updateFavItems,

        emptyCartItems,
        emptyFavItems,

        found,
        foundFav,
        getSearchedItems,
        handleChange,

        displaySearched,
        setDisplaySearched,

        receiveType,
        setReceiveType,

        receivePrice,
        setReceivePrice,

        makeDelay,
        delay,

        loading,
        setLoading,

        activeProd,
        activeRm,
        setActiveProd,
        setActiveRm,

        setAddress,
        address,

        handleAddressChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
