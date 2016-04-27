export const CHANGE_TAB = 'CHANGE_TAB';

// These functions are our actions, and are accessible by components via this.props.xxx due to mapDispatchToProps

export function changeTab(nextTab) {
  return {
    type: CHANGE_TAB,
    nextTab
  };
}
