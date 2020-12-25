import React from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { getKeyword, filterByKeword } from "../../store/module/tableReducers";

function SearchBar({state, debouncedHandleChange, keyword}) {
    const dispatch = useDispatch();

    const filteredByKeword = (keywordState, state) => {
        //검색어(keywordState)에 맞게 filter
        // 입력값이 없는 경우 250개 전부 리턴
        const sorted = state.filter((e) =>
            {if(e.name === undefined) { return [];}
            return e.name.toLowerCase().includes(keywordState.toLowerCase()) ||
            e.alpha2Code.toLowerCase().includes(keywordState.toLowerCase()) ||
            e.callingCodes.includes(keywordState) ||
            e.capital.toLowerCase().includes(keywordState.toLowerCase()) ||
            e.region.toLowerCase().includes(keywordState.toLowerCase())} 
        );
        return sorted;
    }
    
    
    const debouncedHandle = debounce(debouncedHandleChange, 100);

    const onKeywordHandler = (e) => {
        debouncedHandle(e.currentTarget.value);
        dispatch(getKeyword(e.currentTarget.value));
         
        // //현재 입력값, state입력
        // const filtered = filteredByKeword(e.currentTarget.value, state);
    
        // dispatch(filterByKeword(filtered));

    };
    

  return (
    <p>
      <input type="text" value={keyword} onChange={onKeywordHandler} />
    </p>
  );
}


export default SearchBar;
