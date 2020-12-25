const SEARCH = "SEARCH";
const FILTER_BY_KEYWORD = "FILTER_BY_KEYWORD";

const initialState = {
    loading: false,
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
                search: true,
                keyword: action.keyword
            };
        // case FILTER_BY_KEYWORD:
        //     return {
        //         ...state,
        //         search: true,
        //         keyword: action.keyword
        //     }
        default:
            return state;
    }
  }