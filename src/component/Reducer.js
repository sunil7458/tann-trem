export const intialstage = {
  basket: [],
};

export const reducer = (state = intialstage, action) => {
  console.log(action , "kkk");
  console.log(state);
  switch (action.type) {
    case "ADD":
        console.log(state ,"state")
      return { ...state, basket: [...state.basket, action.payload] };

    default:
      return state;
  }
};
