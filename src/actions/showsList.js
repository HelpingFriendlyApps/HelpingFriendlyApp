export const SELECT_SHOW = 'SELECT_SHOW';

export const selectShow = (selectedShowID) => {
  return {
    type: SELECT_SHOW,
    selectedShowID
  }
}
