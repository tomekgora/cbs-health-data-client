const initialState = [];

export default function dataReducer(state = initialState, action) {
  const DATA_RECEIVED = "DATA_RECEIVED";

  switch (action.type) {
    case DATA_RECEIVED: {
      return action.payload;
    }
    default:
      return state;
  }
}
