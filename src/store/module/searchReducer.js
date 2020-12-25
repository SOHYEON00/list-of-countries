
// const SEARCH = "SEARCH";
// const FILTER_BY_KEYWORD = "FILTER_BY_KEYWORD";

// //keyword, search만 변경 후 기존 state 리턴
// export const getKeyword = (keyword) => {
//     return { type: SEARCH, keyword: keyword}
// }

// //검색어로 필터링된 배열 리턴
// export const filterByKeword = (array) => {
//     return {type: FILTER_BY_KEYWORD, data: array}
// }

// const initialState = {
//     search: false,
//     keyword: '',
//     data: []
// }

// export default function searchReducer(state=initialState, action) {
//     switch(action.type){
//         case SEARCH:
//             return {
//                 ...state,
//                 data: state.data,
//                 search: true,
//                 keyword: action.keyword
//             };
//         case FILTER_BY_KEYWORD:
//             return {
//                 ...state,
//                 data: action.data,
//                 search: true,
//             }
//         default:
//             return state;
//     }
// }