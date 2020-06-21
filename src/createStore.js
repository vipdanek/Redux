export function createStore(rootReducer, initialState) {
  let state = rootReducer(initialState, { type: "__INIT__" });
  let subscribers = [];

  return {
    //action === {type:"increment"}
    dispatch(action) {
      state = rootReducer(state, action);
      subscribers.forEach((sub) => sub());
    },
    subscribe(callback) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  };
}
