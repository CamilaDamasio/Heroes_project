import React from 'react';

const Search = ({ value, onChange }) => {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <form className="search-bar">
      <label htmlFor="searchText" data-testid="text-input-label" className="search">
        Pesquisar:
          <input
            type="search"
            value={ value }
            onChange={handleChange}
            className="input-search"
          />
        </label>
    </form>
  )
}

export default Search;
