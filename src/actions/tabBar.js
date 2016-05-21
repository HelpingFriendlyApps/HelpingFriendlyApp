export const CHANGE_TAB = 'CHANGE_TAB';
export const RESET_SELECTED_TAB = 'RESET_SELECTED_TAB';

// These functions are our actions, and are accessible by components via this.props.xxx due to mapDispatchToProps

export const changeTab = (nextTab) => {
  return {
    type: CHANGE_TAB,
    nextTab
  };
}

export const resetSelectedTab = () => {
  return {
    type: RESET_SELECTED_TAB
  }
}
