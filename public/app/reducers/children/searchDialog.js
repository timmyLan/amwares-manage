import { SEARCH_OPEN, SEARCH_CLOSE} from '../../actionType/children';
const initialState = {
  open: false
};

export default function searchDialogState(state = initialState, action) {
  switch (action.type) {
    case SEARCH_OPEN:
      return {
        ...state,
        open: true
      };
    case SEARCH_CLOSE:
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
}
