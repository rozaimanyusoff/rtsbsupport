import React from 'react';
import brandLogo from '../assets/logo/Ranhill Technologies Logo (Original).png'; // Adjust the path as necessary

const Navbar = ({ userName, userLevel }) => {
  const brandName = 'RTSB';

  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          <div className="navbar-brand-box">
            <a
              href="https://www.ranhilltechnologies.com.my"
              class="logo logo-light"
            >
              <span class="logo-sm">
                <img
                  src={brandLogo}
                  alt="Logo"
                  className="img-fluid me-2"
                  style={{ width: "40px", height: "auto" }}
                />
              </span>

              <span class="logo-lg float-start">
                <img
                  src={brandLogo}
                  alt="Logo"
                  className="img-fluid me-2"
                  style={{ width: "40px", height: "auto" }}
                />
                <span class="title-3 align-middle brand-logo"></span>
                <span class="font-size-24 font-weight-bold text-secondary">
                  {brandName}
                </span>
              </span>
            </a>
          </div>

          {/* Button for toggling the vertical menu */}
          <button
            type="button"
            className="btn btn-sm px-3 font-size-16 header-item waves-effect"
            id="vertical-menu-btn"
          >
            <i className="fa fa-fw fa-bars"></i>
          </button>
        </div>

        {/* Clock component */}
        <div id="clock" className="justify-content-center">
          <p className="unit" id="hours"></p>
          <p className="unit" id="minutes"></p>
          <p className="unit" id="seconds"></p>
          <p className="unit" id="ampm"></p>
        </div>

        {/* User dropdown */}
        <div className="d-flex">
          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item waves-effect"
              id="page-header-user-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="rounded-circle header-profile-user"
                src="assets/images/users/avatar-1.jpg"
                alt="Header Avatar"
              />
              <span className="d-none d-xl-inline-block ms-1 fw-light">
                Welcome {userName}-{userLevel}
              </span>
              <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="/profile">
                <i className="bx bx-user font-size-16 align-middle me-1"></i>{" "}
                <span key="t-profile">User Profile</span>
              </a>
              <a className="dropdown-item d-block" href="/settings">
                <i className="bx bx-wrench font-size-16 align-middle me-1"></i>{" "}
                <span key="t-settings">Setting</span>
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item text-danger" href="/logout">
                <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>{" "}
                <span key="t-logout">Logout</span>
              </a>
            </div>
          </div>

          {/* Optional dropdown */}
          <div className="dropdown d-inline-block">
            {/* Button for toggling the right bar */}
            {/* <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
              <i className="bx bx-cog bx-spin"></i>
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
