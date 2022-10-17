function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function render() {
  const app = document.querySelector("#app");
  app.textContent = state.count;
}

function dispatch(action) {
  state = changeState(state, action);
  // return state;
  render();
}

let state = { count: 0 };
let action = { type: "counter/increment" };

changeState(state, action);
