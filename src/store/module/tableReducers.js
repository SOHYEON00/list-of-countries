import axios from "axios";

/* action types */

const DELETE_ROW_NORMAL = "DELETE_ROW_NORMAL";

const GET_LIST = "GET_LIST";
const GET_LIST_SUCCESS = "GET_LIST_SUCCESS";
const GET_LIST_ERROR = "GET_LIST_ERROR";

const SORTING_LIST_ASCE = "SORTING_LIST_ASCE";
const SORTING_LIST_DESC = "SORTING_LIST_DESC";

const SEARCH = "SEARCH";

const ADD_COUNTRY = "ADD_COUNTRY";

/* actions */

export const deleteDataNormal = (name) => {
  return { type: DELETE_ROW_NORMAL, name: (name) };
};

export const sortingListASCE = (category, sortedArray) => {
  return { type: SORTING_LIST_ASCE, sorted: sortedArray, category: category, direction: 'ASCE'}
}
export const sortingListDESC = (category, sortedArray) => {
  return { type: SORTING_LIST_DESC, sorted: sortedArray, category: category, direction: 'DESC'}
}

//keyword, search만 변경 후 기존 state 리턴
export const getKeyword = (keyword) => {
  return { type: SEARCH, keyword: keyword}
}

export const addCountry = (countryInfo) => {
  return { type: ADD_COUNTRY, new: countryInfo}
}


export const getCountries = () => async (dispatch) => {
  dispatch({ type: GET_LIST }); // 요청 시작
  try {
    const countries = await axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes"
      )
      .then((res) => res.data);

    dispatch({ type: GET_LIST_SUCCESS, countries });
  } catch (err) {
    dispatch({ type: GET_LIST_ERROR, error: err });
  }
};


/* reducer */

const initialState = {
  loading: false,
  data: [],
  error: null,
  sorting: false,
  keyword: ''
};
export default function CountryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        sorting: false,
        loading: false,
        data: [],
        error: null,
      };
    case GET_LIST_SUCCESS:
      return {
        ...state,
        loading: true,
        data: action.countries,
        error: null,
      };
    case GET_LIST_ERROR:
      return {
        ...state,
        loading: true,
        data: [],
        error: null,
      };
    case ADD_COUNTRY:
      return {
        ...state,
        data: state.data.concat(action.new)
      }
    case DELETE_ROW_NORMAL:
      return {
        ...state,
        deletedId: action.id,
        data: state.data.filter((e) => e.name !== action.name),
      };
    case SORTING_LIST_ASCE:
      return {
        ...state,
        sorting: true,
        data: action.sorted,
        category: action.category,
        direction: action.direction
      };
      case SORTING_LIST_DESC:
      return {
        ...state,
        sorting: true,
        data: action.sorted,
        category: action.category,
        direction: action.direction
      };
      case SEARCH:
        return {
            ...state,
            data: state.data,
            search: true,
            keyword: action.keyword
        };

  
    default:
      return state;
  }
}