import { combineReducers } from 'redux';
import counter from './counter';
import sheetListData from './sheetListData';

export default combineReducers({
  counter,
  sheetListData
})
