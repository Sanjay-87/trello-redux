import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import TextInput from './TextInput';
import PropTypes from 'prop-types';
import { fetchCards, addCard, deleteCard } from '../actions/cardActions';
// import store from '../store';

export class List extends Component {
  state = {
    btnClicked: false,
    addCard: true,
    cardName: '',
  };

  componentDidMount() {
    // console.log(store.getState().lists);
    this.props.fetchCards(this.props.id);
  }

  del = (id, listId) => {
    this.props.deleteCard(id, listId);
  };

  handleClick = () => {
    this.setState({
      btnClicked: true,
      addCard: false,
    });
  };

  handleClose = () => {
    this.setState({
      btnClicked: false,
      addCard: true,
    });
  };

  onChange = (e) => {
    this.setState({ cardName: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const card = { name: this.state.cardName };
    this.props.addCard(card.name, this.props.id);
  };

  render() {
    // store.getState().lists.items = [];
    let { cards } = this.props;
    let Cards = cards[`${this.props.id}`] ? cards[`${this.props.id}`] : [];
    return (
      <div className="list ml-2" style={{ width: ' 272px' }}>
        <div
          className="list rounded"
          style={{
            backgroundColor: '#f4f5f7',
            width: '272px',
          }}
        >
          <div>
            <h5 className="text-sm ml-3 p-2" style={{ fontWeight: '700' }}>
              {this.props.name}
            </h5>
          </div>

          <div className="Cards">
            <div className="cards text-sm mt-2 ml-2 mr-2 mb-2" id="cards">
              {Cards.map((card) => (
                <Card
                  key={card.id}
                  name={card.name}
                  id={card.id}
                  del={this.del}
                  listId={this.props.id}
                />
              ))}
              {this.state.addCard ? (
                <div
                  className="btn w-100 text-left add-card"
                  style={{ color: '#5e6c84' }}
                  onClick={this.handleClick}
                >
                  {Cards.length === 0 ? '+ Add card' : '+ Add another card'}
                </div>
              ) : null}
            </div>
            {this.state.btnClicked ? (
              <TextInput
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                close={this.handleClose}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  cards: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  cards: state.cards,
});

const mapDispatchToProps = {
  fetchCards,
  addCard,
  deleteCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
