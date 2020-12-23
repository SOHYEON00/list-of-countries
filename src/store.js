import { createStore } from "redux";

const FIRST = "NEW";
const DELETE = "DELETE";

const getNewList = (list) => {
    return {
        type: FIRST,
        list
    }
}
const deleteRow = (id) => {
    return {
        type: DELETE,
        id: parseInt(id)
    }
}

const CountryReducer = (state=[], action) => {
    switch(action.type) {
        case FIRST: 
            return [action.list];
        case DELETE:
            if(state.length === 1) return state[0].filter((e,i) => (i !== action.id));
            else return state.filter((e,i) => (i !== action.id));
        default: 
            return state;
    }
}

const store = createStore(CountryReducer);

export const actionCreators = {
    getNewList,
    deleteRow
};

export default store;