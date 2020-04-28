import React from 'react';
import logo from '../images/trello-logo.png';
import { Link } from 'react-router-dom';
import { resetState } from '../actions/listActions';
import { connect } from 'react-redux';

function Header(props) {
  const resetState = () => {
    props.resetState();
  };

  return (
    <div
      className="navbar"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
    >
      <Link to={`/`}>
        <div className="mr-1">
          <button className="btn btn-dark" onClick={resetState}>
            <i className="fa fa-home fa-lg"></i>
          </button>
        </div>
      </Link>
      <div className="m-auto">
        <img src={logo} alt="" style={{ height: '2em' }} />
      </div>
    </div>
  );
}

// export default Header;

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { resetState };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
