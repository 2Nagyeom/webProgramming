const store = () => {
    let state;
    let subScripArr = [];

    function getState() {
        return {...state}
    }

    function dispatcher(action) {
        state = dispatch(state,action)
        subScripArr.forEach((value)=>value())
    }

    function subScrip(func) {
        subScripArr.push(func)
    }

    return { getState,dispatcher,subScrip }
}

const initialState = {
    companyX: null,
    companyY: null,
}

const dispatch = (state = initialState, action) => {
    switch (action.type) {
        case 'setCompnyXY':
            return { ...state, companyX: action.param.companyX, companyY: action.param.companyY, }
        default:
            break;
    }
}

export default store()