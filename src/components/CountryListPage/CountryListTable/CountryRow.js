import React from "react";
import { connect } from "react-redux";
import { deleteData } from "../../../store/module/tableReducers";

function CountryRow({ name, alpha2Code, callingCodes, capital, region, deleteRow}) {
    
  return (
    <tr>
      <td>
        <button onClick={deleteRow}>DEL</button>
      </td>
      <td>{name}</td>
      <td>{alpha2Code}</td>
      <td>{callingCodes}</td>
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
