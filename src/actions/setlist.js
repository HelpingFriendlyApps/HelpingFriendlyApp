export const REQUEST_TIPH_SETLIST = 'REQUEST_TIPH_SETLIST';
export const RECEIVE_TIPH_SETLIST = 'RECEIVE_TIPH_SETLIST';

export const requestTIPHSetlist = () => {
  return {
    type: REQUEST_TIPH_SETLIST
  }
}

export const receiveTIPHSetlist = (showsOnDate, setlist) => {
  return {
    type: RECEIVE_TIPH_SETLIST,
    showsOnDate,
    setlist
  }
}

export const fetchSetlist = (apiDate) => {
  return function(dispatch) {
    // Dispatch our REQUEST action, which will eventually show a spinner
    dispatch(requestTIPHSetlist());

    return fetch(`http://phish.in/api/v1/shows-on-day-of-year/${apiDate}?sort_attr=date&sort_dir=desc`)
      .then(res => res.json())
      .then(json => {
        const showsOnDate = json.total_entries;
        let setlist = json.data[0].taper_notes;
        dispatch(receiveTIPHSetlist(showsOnDate, setlist))
      });
  }
}
