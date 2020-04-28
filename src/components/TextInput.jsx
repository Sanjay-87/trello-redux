import React, { Component } from 'react';

class Textinput extends Component {
  state = {};

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <textarea
            className="form-control ml-2"
            id="text-area"
            rows="3"
            style={{ width: '95%' }}
            onChange={this.props.onChange}
          ></textarea>
          <div className="card-composer">
            <button
              type="submit"
              className="btn btn-success rounded ml-2 mt-2 mb-2"
            >
              Add
            </button>
            <span
              className="btn close-text"
              style={{ fontSize: '24px' }}
              onClick={this.props.close}
            >
              &times;
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default Textinput;
