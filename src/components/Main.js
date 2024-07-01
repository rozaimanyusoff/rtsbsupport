import React from 'react';
import Menu from './Navbar';
import VerticalMenu from './VerticalMenu';

const Main = () => {
  return (
    <div id="layout-wrapper">
      <Menu />
      <VerticalMenu />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <h4 className="mb-sm-3 font-size-18 fw-bold">
              TEAM DASHBOARD <span id="adminNotice" className="text-danger blink"></span>
            </h4>
            <div id="main"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;