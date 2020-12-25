import React from "react";
import { connect} from "react-redux";
import { deleteData } from "../../../store/module/tableReducers";

function CountryRow({ name, alpha2Code, callingCodes, capital, region, deleteRow}) {
  
  //callingCode가 배열이므로
  //[0].value
  //[1].value 식으로 출력
  const arrCallingCode = callingCodes.map((e,i) => {return <p key={i}>{e}</p>});

  return (
    <tr>
      <td>
        <button onClick={deleteRow}>DEL</button>
      </td>
      <td>{name}</td>
      <td>{alpha2Code}</td>
      <td>{arrCallingCode}</td>
      <td>{capital}</td>
      <td>{region}</td>
    </tr>
  );
}
 
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteRow: () => { dispatch(deleteData(ownProps.id));},
  };
};
export default connect(null, mapDispatchToProps)(CountryRow);
