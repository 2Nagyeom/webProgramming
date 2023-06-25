const store = () => {
  let state;
  let subScripArr = [];

  function getState() {
    return { ...state };
  }

  function dispatcher(action) {
    console.log(action,'dispatcher');
    state = dispatch(state, action);
    subScripArr.forEach((value) => value());
  }

  function subScrip(func) {
    subScripArr.push(func);
  }

  return { getState, dispatcher, subScrip };
};

const initialState = {
  companyX: null,
  companyY: null,
  center: [],
  resultRating: [],
  resultRatingText: [], 
};

const dispatch = (state = initialState, action) => {
  switch (action.type) {
    case "setCompnyXY":
      return {
        ...state,
        companyX: action.param.companyX,
        companyY: action.param.companyY,
      };
    case "setCenter":
      return { ...state, center: [...state.center, action.param] };
    case "setResultRating":
      return { ...state, resultRating: [...action.param] };
    case "setResultRatingText":
      return { ...state, resultRatingText: [...action.param] };
    default:
      break;
  }
};

export default store();
