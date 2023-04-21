const initialstate = 0


export  const ChangeNumber = (state=initialstate,action) => {
    switch (action.type) {
        case ("INCREMENT"):
            return state + 1;
        case ("DECREMENT"):
            return state - 1;
        default:
            return state;
    }
}


export const ALU = (state = 20, action) => {
    switch (action.type) {
      case "MULTIPLICATION":
        return state * 2;
      case "Division":
        return state / 2;
      default:
        return state;
    }
}
