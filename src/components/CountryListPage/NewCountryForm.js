import React from 'react'

function NewCountryForm() {

    const formTextHandler = (e) => {

    }
    const formArrayHandler = (e) => {

    }
    const formSubmitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form>
         
                    <label>Name</label>
                    <input type="text" onChange={formTextHandler}></input>

                    <label>Alpha2Code</label>
                    <input type="text" onChange={formTextHandler}></input>

                    <label>CallingCodes</label>
                    <input type="number" onChange={formArrayHandler}></input>

                    <label>Capital</label>
                    <input type="text" onChange={formTextHandler}></input>

                    <label>Region</label>
                    <input type="text" onChange={formTextHandler}></input>
  
                <input type="submit" onSubmit={formSubmitHandler} />
            </form>
        </div>
    )
}

export default NewCountryForm
