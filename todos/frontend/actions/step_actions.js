export const receiveSteps = (todos) => { //will be an array of step objs ex: id: 1, title: "wash car", body: "with no soap", done: false
    return {
      type: RECEIVE_STEPS,
      steps,
    };
  };

  export const receiveStep = (todo) => { //will be a step objs ex: id: 1, title: "wash car", body: "with no soap", done: false
    return {
      type: RECEIVE_STEP,
      step,
    };
  };