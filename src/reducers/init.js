const initReducer = (state = true, action) => {
    switch (action.type) {
      case "INITIAL":
        return true;
      case "FINAL":
        return false;
      default:
        return state;
    }
  };
  
  export default initReducer;