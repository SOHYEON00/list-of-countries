import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../../store";

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
    deleteRow: () => {
        console.log(ownProps);
      dispatch(actionCreators.deleteRow(ownProps.id));
    },
  };
};
export default connect(null, mapDispatchToProps)(CountryRow);
