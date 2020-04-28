import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './List';
import PropTypes from 'prop-types';
import { fetchLists, addList } from '../actions/listActions';
import { fetchCards } from '../actions/cardActions';
import Header from './Header';
import TextInput from './TextInput';

export class Board extends Component {
  state = {
    boardId: this.props.match.params.boardId,
    boardName: this.props.match.params.boardName,
    fethedLists: false,
    btnClicked: false,
    addList: true,
    listName: '',
  };

  componentDidMount() {
    let boardId = this.props.match.params.boardId;
    this.props.fetchLists(boardId);
  }

  handleClick = () => {
    this.setState({
      btnClicked: true,
      addList: false,
    });
  };

  onChange = (event) => {
    this.setState({
      listName: event.target.value,
    });
  };

  handleClose = () => {
    this.setState({
      btnClicked: false,
      addList: true,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const list = { name: this.state.listName };
    this.props.addList(list.name, this.props.match.params.boardId);
  };

  render() {
    let { lists, match } = this.props;
    const Lists = lists.map((list) => {
      return <List key={list.id} name={list.name} id={list.id} />;
    });
    return (
      <div
        style={{
          backgroundImage: localStorage.getItem(
            this.props.match.params.boardId
          ),
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          height: '100vh',
        }}
      >
        <Header />
        <div className="text-white ml-3 font-weight-bold">
          <h2>{match.params.boardName}</h2>
        </div>
        <div style={{ height: '90vh', overflowx: 'auto', overflowY: 'hidden' }}>
          <div
            className="list-container d-flex p-2"
            style={{ maxHeight: '88vh' }}
          >
            {Lists}
            <div className="lists ml-2" style={{ width: ' 272px' }}>
              {this.state.btnClicked ? (
                <div
                  className="list rounded pt-2"
                  style={{ width: ' 272px', backgroundColor: '#f4f5f7' }}
                >
                  <TextInput
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    close={this.handleClose}
                  />
                </div>
              ) : (
                <button
                  className="btn text-left rounded text-white"
                  onClick={this.handleClick}
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    width: ' 272px',
                  }}
                >
                  {Lists.length !== 0 ? '+ Add another list' : '+ Add list'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  lists: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  lists: state.lists.items,
});

const mapDispatchToProps = { fetchLists, addList, fetchCards };

export default connect(mapStateToProps, mapDispatchToProps)(Board);
