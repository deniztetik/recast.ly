var Search = ({onChange, handleSearchClick}) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onBlur={() => {
      console.log("Testing");
      return onChange("you searched foo")
    }
    }/>
    <button className="btn hidden-sm-down" onClick = {() =>console.log("One part done")}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

window.Search = Search;
