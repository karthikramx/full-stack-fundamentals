import "./search.css";

const Search = ({ placeholder, onChangeHandler }) => (
  <input
    className="search-box"
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default Search;
