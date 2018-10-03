class Search extends React.Component  {
  constructor(props) {
    super(props);
    
    this.state = {
      title: ''
    }
  }
  
  handleChange(event) {
    console.log(this.props);
    this.setState({title: event.target.value})
    this.props.onSearchInput(event.target.value);
  }
  

  
  render() {  
    return(
      <div className="search-bar form-inline">
        <input name="title" className="form-control" type="text" value={this.state.title} onChange={this.handleChange.bind(this)}/>
        <button onClick={(event) => console.log(event)} className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    )
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
// 