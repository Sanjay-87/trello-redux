import { FETCH_LISTS, ADD_LIST, RESET_LIST } from './types';

const key = localStorage.getItem('key');
const token = localStorage.getItem('token');

export const fetchLists = (id) => (dispatch, getState) => {
  fetch(`https://api.trello.com/1/boards/${id}/lists?key=${key}&token=${token}`)
    .then((response) => response.json())
    .then((lists) => {
      dispatch({
        type: FETCH_LISTS,
        payload: lists,
      });
    });
};

export const addList = (name, id) => (dispatch) => {
  fetch(
    `https://api.trello.com/1/lists?name=${name}&idBoard=${id}&key=${key}&token=${token}`,
    { method: 'post' }
  )
    .then((response) => response.json())
    .then((list) => {
      dispatch({
        type: ADD_LIST,
        payload: { list, id },
      });
    });
};

export const resetState = () => (dispatch) => {
  dispatch({
    type: RESET_LIST,
  });
};
