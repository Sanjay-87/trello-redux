import { FETCH_CARDS, ADD_CARD, DELETE_CARD } from './types';

const key = localStorage.getItem('key');
const token = localStorage.getItem('token');

export const fetchCards = (id) => (dispatch, getState) => {
  fetch(
    `https://api.trello.com/1/lists/${id}/cards?key=${key}&token=${token}`,
    { method: `GET` }
  )
    .then((response) => response.json())
    .then((cards) => {
      dispatch({
        type: FETCH_CARDS,
        payload: { cards, id },
      });
    });
};

export const addCard = (name, id) => (dispatch) => {
  fetch(
    `https://api.trello.com/1/cards?idList=${id}&name=${name}&key=${key}&token=${token}`,
    { method: 'post' }
  )
    .then((response) => response.json())
    .then((card) => {
      dispatch({
        type: ADD_CARD,
        payload: { card, name, id },
      });
    });
};

export const deleteCard = (id, listId) => (dispatch) => {
  fetch(`https://api.trello.com/1/cards/${id}?&key=${key}&token=${token}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((card) => {
      dispatch({
        type: DELETE_CARD,
        payload: { id, listId, card },
      });
    });
};
