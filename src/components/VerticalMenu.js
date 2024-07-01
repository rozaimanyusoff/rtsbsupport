import React, { useEffect } from 'react';
import MetisMenu from 'metismenujs';

const VerticalMenu = ({ permLevel }) => {
    useEffect(() => {
        new MetisMenu('#side-menu');
    }, [])
  const renderMenuItems = () => {
    if ([1, 3].includes(permLevel)) {
      return (
        <>
          <li>
            <a href="#" className="has-arrow waves-effect text-decoration-none">
              <i className="mdi mdi-cog-outline mdi-spin"></i>
              <span key="t-dashboard">Admin</span>
            </a>
            <ul className="sub-menu animated__animated animated__bounce" aria-expanded="false">
              <li>
                <a href="/apps/admin/admin" className="wave-effect text-decoration-none">Admin Data</a>
              </li>
              <li>
                <a href="/apps/admin/asset" className="wave-effect text-decoration-none">Asset Data</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="has-arrow waves-effect text-decoration-none">
              <i className="mdi mdi-map-marker"></i>
              <span key="t-dashboard">Telemetry Data</span>
            </a>
            <ul className="sub-menu animated__animated animated__bounce" aria-expanded="false">
              <li>
                <a href="/apps/tm/dma/dma" className="wave-effect text-decoration-none">DMA Event</a>
              </li>
              <li>
                <a href="/apps/tm/dma/compare" className="wave-effect text-decoration-none">DMA Data Analysis</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="has-arrow waves-effect text-decoration-none">
              <i className="mdi mdi-check-box-multiple-outline"></i>
              <span key="t-dashboard">JMS</span>
            </a>
            <ul className="sub-menu animated__animated animated__bounce" aria-expanded="false">
              <li>
                <a href="/apps/jms/job_banks" className="wave-effect text-decoration-none">Job Pre-Register</a>
              </li>
              <li>
                <a href="/apps/jms/job_banks_stg2" className="wave-effect text-decoration-none">Job PR (Staging)</a>
              </li>
              <li>
                <a href="/apps/jms/job_summary" className="wave-effect text-decoration-none">Job Summary</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="has-arrow waves-effect text-decoration-none">
              <i className="mdi mdi-cart"></i>
              <span key="t-dashboard">Stock System</span>
            </a>
            <ul className="sub-menu animated__animated animated__bounce" aria-expanded="false">
              <li>
                <a href="/apps/inventory/admin" className="wave-effect text-decoration-none">Store Admin</a>
              </li>
              <li>
                <a href="/apps/inventory/stock" className="wave-effect text-decoration-none">Stock Delivery</a>
              </li>
              <li>
                <a href="/apps/inventory/teams" className="wave-effect text-decoration-none">Repair Team</a>
              </li>
              <li>
                <a href="/apps/inventory/report" className="wave-effect text-decoration-none">Stock Report</a>
              </li>
            </ul>
          </li>
        </>
      );
    } else if ([34].includes(permLevel)) {
      return (
        <li>
          <a href="#" className="has-arrow waves-effect text-decoration-none">
            <i className="mdi mdi-cart"></i>
            <span key="t-dashboard">Stock System</span>
          </a>
          <ul className="sub-menu animated__animated animated__bounce" aria-expanded="false">
            <li>
              <a href="/apps/inventory/admin" className="wave-effect text-decoration-none">Store Admin</a>
            </li>
            <li>
              <a href="/apps/inventory/stock" className="wave-effect text-decoration-none">Stock Delivery</a>
            </li>
            <li>
              <a href="/apps/inventory/teams" className="wave-effect text-decoration-none">Repair Team</a>
            </li>
            <li>
              <a href="/apps/inventory/report" className="wave-effect text-decoration-none">Stock Report</a>
            </li>
          </ul>
        </li>
      );
    } else if ([36].includes(permLevel)) {
      return (
        <li>
          <a href="#" className="has-arrow waves-effect text-decoration-none">
            <i className="mdi mdi-cart"></i>
            <span key="t-dashboard">Stock System</span>
          </a>
          <ul className="sub-menu animated__animated animated__bounce" aria-expanded="false">
            <li>
              <a href="/apps/inventory/stock" className="wave-effect text-decoration-none">Stock Delivery</a>
            </li>
            <li>
              <a href="/apps/inventory/teams" className="wave-effect text-decoration-none">Repair Team</a>
            </li>
            <li>
              <a href="/apps/inventory/report" className="wave-effect text-decoration-none">Stock Report</a>
            </li>
          </ul>
        </li>
      );
    } else if ([13].includes(permLevel)) {
      return (
        <li>
          <a href="#" className="has-arrow waves-effect text-decoration-none">
            <i className="mdi mdi-cart"></i>
            <span key="t-dashboard">Stock System</span>
          </a>
          <ul className="sub-menu animated__animated animated__bounce" aria-expanded="false">
            <li>
              <a href="/apps/inventory/teams" className="wave-effect text-decoration-none">Repair Team</a>
            </li>
          </ul>
        </li>
      );
    } else if ([37].includes(permLevel)) {
      return (
        <li>
          <a href="#" className="has-arrow waves-effect text-decoration-none">
            <i className="mdi mdi-cart"></i>
            <span key="t-dashboard">Stock System</span>
          </a>
          <ul className="sub-menu animated__animated animated__bounce" aria-expanded="false">
            <li>
              <a href="/apps/inventory/teams" className="wave-effect text-decoration-none">Repair Team</a>
            </li>
            <li>
              <a href="/apps/inventory/report" className="wave-effect text-decoration-none">Stock Report</a>
            </li>
          </ul>
        </li>
      );
    } else {
      return (
        <li>
          <a href="#" className="has-arrow waves-effect text-decoration-none">
            <i className="mdi mdi-check-box-multiple-outline"></i>
            <span key="t-dashboard">JMS</span>
          </a>
          <ul className="sub-menu animated__animated animated__bounce" aria-expanded="false">
            <li>
              <a href="/apps/jms/job_banks" className="wave-effect text-decoration-none">Job Pre-Register</a>
            </li>
            <li>
              <a href="/apps/jms/job_summary" className="wave-effect text-decoration-none">Job Summary</a>
            </li>
          </ul>
        </li>
      );
    }
  };

  return (
    <div className="vertical-menu">
      <div data-simplebar className="h-100">
        <div id="sidebar-menu">
          {/* Left Menu Start */}
          <ul className="metismenu list-unstyled" id="side-menu" style={{ display: 'none' }}>
            {renderMenuItems()}
          </ul>
        </div>
        {/* Sidebar */}
      </div>
    </div>
  );
};

export default VerticalMenu;