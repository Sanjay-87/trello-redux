import React, { Component } from 'react';
import CheckItem from './CheckItem';
import TextInput from './TextInput';
import image from '../images/done.png';
import '../css/Checklist.css';
import { connect } from 'react-redux';
import {
  fetchCheckItems,
  addCheckItem,
  deleteCheckItem,
} from '../actions/checkitemActions';

export class Checklist extends Component {
  state = {
    addItemCliked: false,
    addItemBtn: true,
    checkItemName: '',
  };

  componentDidMount() {
    this.props.fetchCheckItems(this.props.id);
  }

  deleteCheckItem = (id) => {
    this.props.deleteCheckItem(this.props.id, id);
  };

  handleClick = () => {
    this.setState({
      addItemCliked: true,
      addItemBtn: false,
    });
  };

  onChange = (e) => {
    this.setState({
      checkItemName: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const checkitem = { name: this.state.checkItemName };
    this.props.addCheckItem(checkitem.name, this.props.id);
  };

  handleClose = () => {
    this.setState({
      addItemCliked: false,
      addItemBtn: true,
    });
  };

  render() {
    const { checkitems } = this.props;
    let CheckItems = checkitems[`${this.props.id}`]
      ? checkitems[`${this.props.id}`]
      : [];
    return (
      <div className="checklist-card">
        <div className="checklist-head d-flex flex-row flex-wrap justify-content-between">
          <div className="title">
            <img src={image} alt="checkbox" />
            {' ' + this.props.name}
          </div>
          <button
            className="btn btn-light close-c btn-sm"
            onClick={() => this.props.del(this.props.id)}
          >
            Delete
          </button>
        </div>
        {CheckItems.map((item) => (
          <CheckItem
            id={item.id}
            name={item.name}
            key={item.id}
            State={item.state}
            cardId={this.props.cardId}
            deleteCheckItem={this.deleteCheckItem}
          />
        ))}
        {this.state.addItemBtn ? (
          <button
            className="btn btn-light close-c btn-sm add-item"
            onClick={this.handleClick}
          >
            Add an Item
          </button>
        ) : null}
        {this.state.addItemCliked ? (
          <TextInput
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            close={this.handleClose}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  checkitems: state.checkitems,
});

const mapDispatchToProps = { fetchCheckItems, addCheckItem, deleteCheckItem };

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);
