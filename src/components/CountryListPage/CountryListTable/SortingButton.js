import React from "react";
import {actionCreators} from "../../../store/module/store";
import {connect} from "react-redux";

function SortingButton() {
  return (
    <>
      <button>ASCE</button>
      <button>DESC</button>
    </>
  );
}



export default connect(null)(SortingButton);
