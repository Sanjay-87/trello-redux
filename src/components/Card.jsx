import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import ModalComponent from './ModalComponents';
import { resetState } from '../actions/checklistActions';
import '../css/Card.css';

class Card extends Component {
  state = {
    show: false,
    setShow: false,
  };

  handleClose = () => {
    this.setState({ setShow: false, show: false });
    this.props.resetState();
  };

  handleShow = () => {
    this.setState({ setShow: true, show: true });
  };

  render() {
    const { listId, id, name, del } = this.props;
    return (
      <div>
        <div
          className="card bg-white rounded mt-1 mb-1"
          key={id}
          id={id}
          onClick={this.handleShow}
        >
          <div className="card-body">
            {name}
            <span className="close" onClick={() => del(id, listId)}>
              &times;
            </span>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <ModalComponent id={id} name={name} handleClose={this.handleClose} />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { resetState };

export default connect(mapStateToProps, mapDispatchToProps)(Card);
