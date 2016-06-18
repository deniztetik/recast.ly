var Search = ({onChange, appGlue}) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={(e) => {
      console.log("Testing", e);
      return onChange(e.target.value)
    }
    }/>
    <button className="btn hidden-sm-down" onClick = {() =>appGlue()}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

window.Search = Search;
