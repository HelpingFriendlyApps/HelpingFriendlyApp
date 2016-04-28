import { REQUEST_TIPH_SETLIST, RECEIVE_TIPH_SETLIST } from '../actions/setlist';

const initialState = {
  showsOnDate: 0
};

export default setlist = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TIPH_SETLIST:
      return state;
    case RECEIVE_TIPH_SETLIST:
      return {
        ...state,
        showsOnDate: action.setlistData.total_entries,
        setlist: action.setlistData.data[0].taper_notes
      }
    default:
      return state;
  }
 }
