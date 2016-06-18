var Nav = ({onChange, handleSearchClick}) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search onChange={onChange} onClick={handleSearchClick}/>
    </div>
  </nav>
);

window.Nav = Nav;
