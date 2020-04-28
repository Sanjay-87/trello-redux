import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import listReducer from './listReducer';
import cardReducer from './cardReducer';
import checklistReducer from './checklistReducer';
import checkitemReducer from './checkitemReducer';

const appReducer = combineReducers({
  boards: boardReducer,
  lists: listReducer,
  cards: cardReducer,
  checklists: checklistReducer,
  checkitems: checkitemReducer,
});

export default appReducer;
