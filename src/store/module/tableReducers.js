import axios from "axios";

const DELETE_ROW = "DELETE";
const GET_LIST = "GET_LIST";
const GET_LIST_SUCCESS = "GET_LIST_SUCCESS";
const GET_LIST_ERROR = "GET_LIST_ERROR";

export const deleteData = (id) => {
  return { type: DELETE_ROW, id: parseInt(id) };
};

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

const initialState = {
  loading: false,
  data: [],
  error: null,
};
export default function CountryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        loading: false,
        data: [],
        error: null,
      };
    case GET_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
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
    case DELETE_ROW:
      return {
        ...state,
        data: state.data.filter((e, i) => i !== action.id),
      };
    default:
      return state;
  }
}
