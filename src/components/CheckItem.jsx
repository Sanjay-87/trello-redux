import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/CheckItem.css';
import {
  updateCheckItemState,
  updateCheckItemName,
} from '../actions/checkitemActions';

class CheckItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: `bed715afda8e811a4276182ca183e3b0`,
      token: `55b8bcaf396fd0b49537b2f24e39f580510fcea6a648a53a958af4f43330de85`,
      checked: props.State === 'complete' ? true : false,
      strike: props.State === 'complete' ? true : false,
      checkItemCliked: false,
      name: props.name,
    };
  }

  handleCheck = () => {
    this.setState({
      checked: !this.state.checked,
      strike: !this.state.strike,
    });

    let check = this.state.checked ? 'incomplete' : 'complete';
    // fetch(
    //   `https://api.trello.com/1/cards/${this.props.cardId}/checkItem/${this.props.id}/?state=${check}&key=${this.state.key}&token=${this.state.token}`,
    //   {
    //     method: 'put',
    //   }
    // );
    const { cardId, id } = this.props;
    this.props.updateCheckItemState(cardId, id, check);
  };

  handleClick = () => {
    this.setState({
      checkItemCliked: true,
    });
  };

  onChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onSubmit = (e) => {
    this.setState({
      checkItemCliked: false,
    });

    // fetch(
    //   `https://api.trello.com/1/cards/${this.props.cardId}/checkItem/${this.props.id}/?name=${this.state.name}&key=${this.state.key}&token=${this.state.token}`,
    //   {
    //     method: 'put',
    //   }
    // );
    const { cardId, id } = this.props;
    this.props.updateCheckItemName(cardId, id, this.state.name);
  };

  render() {
    return (
      <div className="check-item d-flex justify-content-between">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id={this.props.id}
            checked={this.state.checked}
            onChange={this.handleCheck}
          />
          <label className="custom-control-label" for={this.props.id}></label>
        </div>
        {!this.state.checkItemCliked ? (
          <div
            className="item-name"
            style={{
              textDecoration: this.state.strike ? 'line-through' : null,
            }}
            onClick={this.handleClick}
          >
            {this.state.name}
          </div>
        ) : (
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder={this.props.name}
              onChange={this.onChange}
            ></input>
            <button type="submit" className="btn btn-primary btn-sm">
              SAVE
            </button>
          </form>
        )}
        <span
          className="close-cI"
          onClick={() => this.props.deleteCheckItem(this.props.id)}
        >
          &times;
        </span>
      </div>
    );
  }
}

// export default CheckItem;

const mapStateToProps = (state) => {};

const mapDispatchToProps = {
  updateCheckItemState,
  updateCheckItemName,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckItem);
