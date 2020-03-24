const initialState = {
  stories: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "HOMEPAGE_DETAILS_FETCHED":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
