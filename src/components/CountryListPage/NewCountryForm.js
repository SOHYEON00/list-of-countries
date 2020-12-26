import React from "react";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import { addCountry } from "../../store/module/tableReducers";

//  validators
const required = (value) => (value ? undefined : "Required");
const isString = (value) =>
  !isNaN(value) ? "Type Strings(No Number)" : undefined;
const chkLength = (value) =>
  value.length === 2 ? undefined : "Type Only 2 alphabets ex)AO";

const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const firstWordlowerToUpper = (words) => {
    const firstLetter = words.charAt(0);
    return firstLetter.toUpperCase() + words.slice(1);
}

const NewCountryForm = ({ actionAdd }) => {
  const onSubmit = (values) => {
    
    //첫글자만 대문자로 변환
    values.name = firstWordlowerToUpper(values.name);
    values.capital = firstWordlowerToUpper(values.capital);
    values.region = firstWordlowerToUpper(values.region);

    //alpha2Code 대문자로 변환
    values.alpha2Code = values.alpha2Code.toUpperCase();

    //string으로 입력된 callingCodes 배열로 변환
    const array = values.callingCodes.split(","); //callingCodes를 ,을 기준으로 배열로 변환한 값
    const checkedIsNaN = []; 
    
    array.forEach((e) => {
        if(!(isNaN(e))) { //입력된 callingCodes 중, 숫자인 경우만 추가
            checkedIsNaN.push(e); 
        }
    })
    values.callingCodes = checkedIsNaN;

    actionAdd(values); //country list에 추가하는 action dispatch
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        name: "",
        alpha2Code: "",
        callingCodes: "",
        capital: "",
        region: "",
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h2>Add New Country Info</h2>

          <Field
            name="name"
            component="input"
            type="text"
            validate={composeValidators(required, isString)}
          >
            {({ input, meta }) => (
              <div>
                <label>Name</label>
                <input
                  value={input.value}
                  onChange={input.onChange}
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field
            name="alpha2Code"
            component="input"
            type="text"
            validate={composeValidators(required, chkLength)}
          >
            {({ input, meta }) => (
              <div>
                <label>Alpha2Code</label>
                <input
                  value={input.value}
                  onChange={input.onChange}
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field
            name="callingCodes"
            component="input"
            type="text"
            validate={required}
          >
            {({ input, meta }) => (
              <div>
                <label>CallingCodes</label>
                <input
                  value={input.value}
                  onChange={input.onChange}
                  placeholder="number, number, ..."
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Field
            name="capital"
            component="input"
            type="text"
            validate={composeValidators(required, isString)}
          >
            {({ input, meta }) => (
              <div>
                <label>Capital</label>
                <input
                  value={input.value}
                  onChange={input.onChange}
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Field
            name="region"
            component="input"
            type="text"
            validate={composeValidators(required, isString)}
          >
            {({ input, meta }) => (
              <div>
                <label>Region</label>
                <input
                  value={input.value}
                  onChange={input.onChange}
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <div className="submitBtn">
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    />
  );
};

function mapDispatchToProps(dispatch) {
  return { actionAdd: (countryInfo) => dispatch(addCountry(countryInfo)) };
}

export default connect(null, mapDispatchToProps)(NewCountryForm);
