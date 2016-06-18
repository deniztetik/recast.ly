var Nav = ({onChange, appGlue}) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search onChange={onChange} appGlue={appGlue}/>
    </div>
  </nav>
);

window.Nav = Nav;
