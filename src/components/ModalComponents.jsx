import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checklist from './Checklist';
import '../css/ModalComponent.css';
import {
  fetchCheckLists,
  addCheckList,
  deleteCheckList,
  resetState,
} from '../actions/checklistActions';

export class ModalComponents extends Component {
  state = {
    ChecklistName: '',
  };

  componentDidMount() {
    this.props.fetchCheckLists(this.props.id);
  }

  componentWillUnmount() {
    this.props.resetState();
  }

  del = (id) => {
    this.props.deleteCheckList(id);
  };

  onChange = (e) => {
    this.setState({
      ChecklistName: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const Checklist = { name: this.state.ChecklistName };
    this.props.addCheckList(Checklist.name, this.props.id);
  };

  render() {
    const { checklists } = this.props;
    return (
      <div>
        <header className="header d-flex justify-content-between">
          {this.props.name}
          <span
            className="close-m"
            id={this.props.id}
            onClick={this.props.handleClose}
          >
            &times;
          </span>
        </header>
        <div className="m-container" data-id={this.props.id}>
          <h3>Add Checklist</h3>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              card-id={this.props.id}
              placeholder="Add a Checklist"
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-secondary add-checklist">
              Add
            </button>
          </form>
        </div>
        <div className="checklists">
          {checklists.map((checklist) => (
            <Checklist
              id={checklist.id}
              name={checklist.name}
              key={checklist.id}
              del={this.del}
              cardId={this.props.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  checklists: state.checklists.items,
});

const mapDispatchToProps = {
  fetchCheckLists,
  addCheckList,
  deleteCheckList,
  resetState,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponents);
