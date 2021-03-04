export const receiveSteps = (steps) => { //will be an array of step objs ex: id: 1, title: "wash car", body: "with no soap", done: false
  return {
    type: RECEIVE_STEPS,
    steps,
  };
};

export const receiveStep = (step) => { //will be a step objs ex: id: 1, title: "wash car", body: "with no soap", done: false
  return {
    type: RECEIVE_STEP,
    step,
  };
};

export const removeStep = (step) => { //will be a step objs ex: id: 1, title: "wash car", body: "with no soap", done: false
  return {
    type: REMOVE_STEP,
    step,
  };
};

export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";