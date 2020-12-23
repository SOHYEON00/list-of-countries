import { createStore } from "redux";

const NEW = "NEW";

const getNewList = (list) => {
    console.log(list);
    return {
        type: NEW,
        list
    }
}

const CountryReducer = (state=[], action) => {
    switch(action.type) {
        case NEW: 
            return [action.list];
        default: 
            return state;
    }
}

const store = createStore(CountryReducer);

export const actionCreators = {
    getNewList
};

export default store;