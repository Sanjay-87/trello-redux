import { FETCH_BOARDS, ADD_BOARD } from './types';

localStorage.setItem('key', 'bed715afda8e811a4276182ca183e3b0');
localStorage.setItem(
  'token',
  '55b8bcaf396fd0b49537b2f24e39f580510fcea6a648a53a958af4f43330de85'
);

const key = localStorage.getItem('key');
const token = localStorage.getItem('token');

export const fetchBoards = () => (dispatch, getState) => {
  fetch(`https://api.trello.com/1/members/me/boards?key=${key}&token=${token}`)
    .then((response) => response.json())
    .then((boards) => {
      dispatch({
        type: FETCH_BOARDS,
        payload: boards,
      });
    });
};

export const addBoard = (BoardName) => (dispatch) => {
  fetch(
    `https://api.trello.com/1/boards/?name=${BoardName}&key=${key}&token=${token}`,
    {
      method: 'POST',
    }
  )
    .then((response) => response.json())
    .then((board) => {
      dispatch({
        type: ADD_BOARD,
        payload: board,
      });
    });
};

// export const resetState = () => (dispatch) => {
//   dispatch({
//     type: RESET_STATE,
//   });
// };
