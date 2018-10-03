
var Search = (props) => {
  return(
    <div className="search-bar form-inline">
      <input name="title" className="form-control" type="text" onChange={(event) => props.handleSearchInput(event)}/>
      <button onClick={(event) => event} className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  )
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
// 