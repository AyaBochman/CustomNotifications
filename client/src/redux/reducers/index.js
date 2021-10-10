import { GET_NOTIFICATIONS } from '../actions';

export default function reducers(state, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_NOTIFICATIONS: {
      return {
        ...state,
        notifications: payload,
      };
    }
    default:
      return state;
  }
}
