const initialState = [];

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case "DATA_RECEIVED": {
      return action.payload;
    }
    default:
      return state;
  }
}
