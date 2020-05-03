import {
  EDIT_TYPE,
  EDIT_STATUS,
} from '../constants/sheetListData'

export default function counter (state = {
  editType: 'sort',
  editStatus: false,
}, action) {
  switch (action.type) {
    case EDIT_TYPE:
      return {
        ...state,
        editType: action.data
      };
    case EDIT_STATUS:
      return {
        ...state,
        editStatus: action.data
      };
    default:
      return state
  }
}
