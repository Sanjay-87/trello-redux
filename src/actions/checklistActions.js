import {
  FETCH_CHECKLISTS,
  ADD_CHECKLIST,
  DELETE_CHECKLIST,
  RESET_CHECKLIST,
} from './types';

const key = localStorage.getItem('key');
const token = localStorage.getItem('token');

export const fetchCheckLists = (id) => (dispatch) => {
  fetch(
    `https://api.trello.com/1/cards/${id}/checklists?&key=${key}&token=${token}`,
    {
      method: 'GET',
    }
  )
    .then((response) => response.json())
    .then((checklists) => {
      dispatch({
        type: FETCH_CHECKLISTS,
        payload: checklists,
      });
    });
};

export const addCheckList = (name, id) => (dispatch) => {
  fetch(
    `https://api.trello.com/1/checklists?idCard=${id}&name=${name}&key=${key}&token=${token}`,
    {
      method: 'post',
    }
  )
    .then((response) => response.json())
    .then((checklist) => {
      dispatch({
        type: ADD_CHECKLIST,
        payload: { checklist, id },
      });
    });
};

export const deleteCheckList = (id) => (dispatch) => {
  fetch(
    `https://api.trello.com/1/checklists/${id}/?key=${key}&token=${token}`,
    {
      method: 'delete',
    }
  )
    .then((response) => response.json())
    .then((checklist) => {
      dispatch({
        type: DELETE_CHECKLIST,
        payload: { checklist, id },
      });
    });
};

export const resetState = () => (dispatch) => {
  dispatch({
    type: RESET_CHECKLIST,
  });
};
