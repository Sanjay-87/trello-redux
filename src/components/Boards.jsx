import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextInput from './TextInput';
// import PropTypes from 'prop-types';
import Header from './Header';
import { Link } from 'react-router-dom';
import { fetchBoards, addBoard } from '../actions/boardActions.js';

export class Boards extends Component {
  state = { btnClicked: false, addBoard: true, BoardName: '' };

  componentDidMount() {
    this.props.fetchBoards();
  }

  handleClick = () => {
    this.setState({
      btnClicked: true,
      addBoard: false,
    });
  };

  onChange = (event) => {
    this.setState({
      BoardName: event.target.value,
    });
  };

  handleClose = () => {
    this.setState({
      btnClicked: false,
      addBoard: true,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const board = { name: this.state.BoardName };
    this.props.addBoard(board.name);
  };

  render() {
    const boards = this.props.boards;
    return (
      <div className="boards">
        <Header />
        <div className="header m-auto p-2" style={{ width: '60%' }}>
          <div className="mb-3 text-light">
            <i className="fa fa-user fa-2x mr-3"></i>
            <span className="h1">Personal Board</span>
          </div>
        </div>
        <div
          className="board-container d-flex flex-wrap m-auto"
          style={{ width: '60%' }}
        >
          {boards.map((board) => {
            localStorage.setItem(
              board.id,
              `url(${board.prefs.backgroundImage})`
            );
            return (
              <div className=" mr-5 mb-5" key={board.id}>
                <Link
                  to={`/boards/${board.id}/${board.name}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="board text-white font-weight-bold p-2"
                    style={{
                      width: '14em',
                      height: '120px',
                      background:
                        board.prefs.backgroundImage !== null
                          ? `url(${board.prefs.backgroundImage})`
                          : `${board.prefs.backgroundColor}`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '100% 100%',
                    }}
                  >
                    {board.name}
                  </div>
                </Link>
              </div>
            );
          })}
          <div className=" mr-5 mb-5">
            {this.state.btnClicked ? (
              <TextInput
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                close={this.handleClose}
              />
            ) : (
              <div
                className="board btn font-weight-bold p-5"
                style={{
                  width: '14em',
                  height: '120px',
                  backgroundColor: '#f4f5f7',
                  color: '#172b4d',
                }}
                onClick={this.handleClick}
              >
                + Create Board
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  boards: state.boards.items,
});

const mapDispatchToProps = { fetchBoards, addBoard };

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
