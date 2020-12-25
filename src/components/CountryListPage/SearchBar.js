import React from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { getKeyword } from "../../store/module/tableReducers";

function SearchBar({debouncedHandleChange, keyword}) {
    const dispatch = useDispatch();
    
    const debouncedHandle = debounce(debouncedHandleChange, 100);

    const onKeywordHandler = (e) => {
        debouncedHandle(e.currentTarget.value);
        dispatch(getKeyword(e.currentTarget.value));
    };
    

  return (
    <p>
      <input type="text" onChange={onKeywordHandler} />
    </p>
  );
}


export default SearchBar;
