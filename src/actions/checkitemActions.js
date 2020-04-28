import {
  FETCH_CHECKITEMS,
  ADD_CHECKITEM,
  DELETE_CHECKITEM,
  UPDATE_CHECKITEM_STATE,
  UPDATE_CHECKITEM_NAME,
} from './types';

// const key = `bed715afda8e811a4276182ca183e3b0`;
// const token =
//   '55b8bcaf396fd0b49537b2f24e39f580510fcea6a648a53a958af4f43330de85';

const key = localStorage.getItem('key');
const token = localStorage.getItem('token');

export const fetchCheckItems = (id) => (dispatch) => {
  fetch(
    `https://api.trello.com/1/checklists/${id}/checkItems?&key=${key}&token=${token}`,
    {
      method: 'GET',
    }
  )
    .then((response) => response.json())
    .then((checkitems) => {
      dispatch({
        type: FETCH_CHECKITEMS,
        payload: { checkitems, id },
      });
    });
};

export const addCheckItem = (name, id) => (dispatch) => {
  fetch(
    `https://api.trello.com/1/checklists/${id}/checkItems?name=${name}&key=${key}&token=${token}`,
    {
      method: 'post',
    }
  )
    .then((response) => response.json())
    .then((checkitem) => {
      dispatch({
        type: ADD_CHECKITEM,
        payload: { checkitem, id },
      });
    });
};

export const deleteCheckItem = (checklistId, id) => (dispatch) => {
  fetch(
    `https://api.trello.com/1/checklists/${checklistId}/checkItems/${id}?key=${key}&token=${token}`,
    {
      method: 'DELETE',
    }
  )
    .then((response) => response.json())
    .then((checkitem) => {
      dispatch({
        type: DELETE_CHECKITEM,
        payload: { id, checklistId, checkitem },
      });
    });
};

export const updateCheckItemState = (cardId, id, check) => (dispatch) => {
  fetch(
    `https://api.trello.com/1/cards/${cardId}/checkItem/${id}/?state=${check}&key=${key}&token=${token}`,
    {
      method: 'put',
    }
  )
    .then((response) => response.json())
    .then(() => {
      dispatch({
        type: UPDATE_CHECKITEM_STATE,
      });
    });
};

export const updateCheckItemName = (cardId, id, name) => (dispatch) => {
  fetch(
    `https://api.trello.com/1/cards/${cardId}/checkItem/${id}/?name=${name}&key=${key}&token=${token}`,
    {
      method: 'put',
    }
  )
    .then((response) => response.json())
    .then(() => {
      dispatch({
        type: UPDATE_CHECKITEM_NAME,
      });
    });
};
