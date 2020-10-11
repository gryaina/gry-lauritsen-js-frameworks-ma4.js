import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";


export default function SearchRecipe({ handleSearch }) {
  return (
    <InputGroup className="search">
      <FormControl
        placeholder="Search by name..."
        onChange={event => handleSearch(event)}
      />
    </InputGroup>
  );
}

SearchRecipe.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
