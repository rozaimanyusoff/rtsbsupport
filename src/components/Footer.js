import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container-fluid">
        <div className="row">
            <div className="col-sm-6 fw-lighter">
                <script>
                    document.write(new Date().getFullYear())
                </script> © RTSP Support Apps
            </div>
            <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block fw-lighter">
                    IT Section
                </div>
            </div>
        </div>
    </div>
    </footer>
  );
};

export default Footer;