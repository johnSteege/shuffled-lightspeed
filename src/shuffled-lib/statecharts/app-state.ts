import { createMachine, createActor, assign } from 'xstate';

// State machine
const toggleMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2UoBswDoB2qyAhgMbICWAbmAMQAqA8gOJMAyAogNoAMAuoqAAOqWOQqo8AkAA9EAZgCccnAHYVAVm7qVCgGwAWBQv3ddAGhABPRAEY5ADhz6bu3SrmutmmwF8fFtAxsfEJSCmoaAHciMR5+JBBhUXFJBNkEG3ccVwAmTXtTT3sbewtrBHtdHByXNxc1bTy-APQsXDCqWkYWDjipJLFyCSl0xWUGrR0DIxNzK0R7RxVa5bcNFTyc5pBAtpxyCGwoogBrMD6EgZSR21dq7gfue3UFQpqy2zl1HAUVj10vNxfNsCBA4FJdth+iJBsM0ogALRzcpI7aQ3AEYhkTrQ5JDVKgdI5O65dQ2PIAlT6HQfBDGJyPLQ2dT6HJfJRo1rBDrUXGwgkyRBklTVewaVxk7g1BS04o4OSMuQ2LQKKkbTlBXAHKGXGHXeEIVm034-Rlkllsl7AvxAA */
  id: 'toggle',
  initial: "idle",
  context: {
    count: 0
  },
  states: {
    notactive: {
      on: {
        TOGGLE: { target: 'active' },
        wait: "idle"
      }
    },

    active: {
      entry: assign({ count: ({ context }) => context.count + 1 }),
      on: {
        TOGGLE: { target: "notactive" }
      }
    },

    idle: {
      on: {
        wake: "notactive"
      }
    }
  }
});

// Actor (instance of the machine logic, like a store)
const toggleActor = createActor(toggleMachine);
toggleActor.subscribe((state) => console.log(state.value, state.context));
toggleActor.start();
// => logs 'inactive', { count: 0 }

toggleActor.send({ type: 'TOGGLE' });
// => logs 'active', { count: 1 }

toggleActor.send({ type: 'TOGGLE' });
// => logs 'inactive', { count: 1 }