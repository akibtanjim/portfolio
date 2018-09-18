import React from "react";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="main-menu">
      <div className="row profile">
        <div className="col-md-12">
          <div className="profile-sidebar">
            <div className="profile-userpic">
              <img
                src="https://0.academia-photos.com/45700104/13887011/14958930/s200_akib.tanjim.jpg"
                className="img-responsive"
                alt=""
              />
            </div>
            <div className="profile-usertitle">
              <div className="profile-usertitle-name">Marcus Doe</div>
              <div className="profile-usertitle-job">Developer</div>
            </div>
            <div className="profile-userbuttons">
              <button type="button" className="btn btn-success btn-sm">
                Follow
              </button>
              <button type="button" className="btn btn-danger btn-sm">
                Message
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-12" style={{ marginTop: 15 }}>
          <ul>
            <li>
              <a href="http://justinfarrow.com">
                <i className="fa fa-home fa-2x" />
                <span className="nav-text">Dashboard</span>
              </a>
            </li>
            <li className="has-subnav">
              <a>
                <i className="fa fa-laptop fa-2x" />
                <span className="nav-text">Stars Components</span>
              </a>
            </li>
            <li className="has-subnav">
              <a>
                <i className="fa fa-list fa-2x" />
                <span className="nav-text">Forms</span>
              </a>
            </li>
            <li className="has-subnav">
              <a>
                <i className="fa fa-folder-open fa-2x" />
                <span className="nav-text">Pages</span>
              </a>
            </li>
            <li>
              <a>
                <i className="fa fa-bar-chart-o fa-2x" />
                <span className="nav-text">Graphs and Statistics</span>
              </a>
            </li>
            <li>
              <a>
                <i className="fa fa-font fa-2x" />
                <span className="nav-text">Quotes</span>
              </a>
            </li>
            <li>
              <a>
                <i className="fa fa-table fa-2x" />
                <span className="nav-text">Tables</span>
              </a>
            </li>
            <li>
              <a>
                <i className="fa fa-map-marker fa-2x" />
                <span className="nav-text">Maps</span>
              </a>
            </li>
            <li>
              <a>
                <i className="fa fa-info fa-2x" />
                <span className="nav-text">Documentation</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
