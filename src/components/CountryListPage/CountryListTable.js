import React from "react";
import CountryRow from "./CountryListTable/CountryRow";
import CategoryRow from "./CountryListTable/CategoryRow";

function CountryListTable({ loading, error, list}) {
  let arrCategory = []; //카테고리 출력용 배열
  let arrCountry = []; //나라 출력용 배열

  //API에 요청을 보낸 경우 loading:true
  if (loading) {
    if (error) { //API와 통신했지만 오류난 경우
      return <div>Sorry, fail to get the list of countries.</div>;
    }

    //검색결과가 없는 경우
    if(list.length === 0) {
      return <div>There's no result.</div> 
    }
 
    arrCategory = Object.keys(list[0]).map((e, i) => {
      return <CategoryRow subject={e} key={i} />;
    });

    arrCountry = list.map((e, i) => {
      return <CountryRow {...e} id={i} key={i} />;
    });
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>DEL</th>
            {arrCategory}
          </tr>
        </thead>
        <tbody>{arrCountry}</tbody>
      </table>
    </div>
  );
}


export default (CountryListTable);
