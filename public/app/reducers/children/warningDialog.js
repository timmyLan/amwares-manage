/**
 * Created by llan on 2016/6/14.
 */
import { WARNING_OPEN, WARNING_CLOSE } from '../../actionType/children';
const initialState = {
  open: false,
  row: {}
};

export default function warningDialogState(state = initialState, action) {
  switch (action.type) {
    case WARNING_OPEN:
      return {
        ...state,
        open: true,
        row: action.row
      };
    case WARNING_CLOSE:
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
}
