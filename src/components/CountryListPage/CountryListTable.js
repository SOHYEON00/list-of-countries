import React from "react";
import CountryRow from "./CountryListTable/CountryRow";
import CategoryRow from "./CountryListTable/CategoryRow";

function CountryListTable({ loading, error, list, searchStatus, keyword }) {
  let arrCategory = []; //카테고리 출력용 배열
  let arrCountry = []; //나라 출력용 배열
  let printList = list;

  const filteredByKeword = (keywordState, state) => {
    //검색어(keywordState)에 맞게 filter
    // 입력값이 없는 경우 250개 전부 리턴
    const filtered = state.filter((e) => {
      return (
        e.name.toLowerCase().includes(keywordState.toLowerCase()) ||
        e.alpha2Code.toLowerCase().includes(keywordState.toLowerCase()) ||
        e.callingCodes.includes(keywordState) ||
        e.capital.toLowerCase().includes(keywordState.toLowerCase()) ||
        e.region.toLowerCase().includes(keywordState.toLowerCase())
      );
    });
    return filtered;
  };

  //API에 요청을 보낸 경우 loading:true
  if (loading) {
    if (error) {
      //API와 통신했지만 오류난 경우
      return <article>Sorry, fail to get the list of countries.</article>;
    }

    //검색어가 입력된 경우
    if (searchStatus) {
      printList = filteredByKeword(keyword, printList); //검색어 기준으로 필터링
      if (printList.length === 0) {
        //검색결과가 없는 경우
        printList = list; //초기화
        return <article> No result, plz try other.</article>; //결과없음 출력
      }
    }

    arrCategory = Object.keys(printList[0]).map((e, i) => {
      return <CategoryRow subject={e} key={i} />;
    });

    arrCountry = printList.map((e, i) => {
      return <CountryRow {...e} key={i} />;
    });
  }
  return (
    <main>
      <table>
        <thead>
          <tr>
            <th className="deleteBtn">DEL</th>
            {arrCategory}
          </tr>
        </thead>
        <tbody>{arrCountry}</tbody>
      </table>
    </main>
  );
}

export default CountryListTable;
