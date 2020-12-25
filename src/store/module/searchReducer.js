const SEARCH = "SEARCH";
const FILTER_BY_KEYWORD = "FILTER_BY_KEYWORD";

const initialState = {
    loading: false,
    data: [],
    error: null,
    sorting: false,
    search: false,
    keyword: ''
  };
export default function searchReducer(state=initialState, action) {
    switch(action.type){
        case SEARCH:
            return {
                ...state,
                data: state.data,
                search: true,
                keyword: action.keyword
            };
        case FILTER_BY_KEYWORD:
            return {
                ...state,
                data: action.data,
                search: true,
            }
        default:
            return state;
    }
  }