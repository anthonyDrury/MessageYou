export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_DATA":
      return action.data;

    default:
      return state;
  }
}
