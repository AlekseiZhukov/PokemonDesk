const initialState = {
  loading: false,
};

const app = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_TYPES':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
export default app;
