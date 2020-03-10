export function nameReducer(state = "George", action) {
  switch (action.type) {
    case "NAME_CHANGE":
      return action.payload;
    default:
      return state;
  }
}
