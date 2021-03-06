import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control w-25 mx-auto"
          placeholder="Search for an Employee"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
