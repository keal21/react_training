import { useMemo } from 'react';
import { createStore } from 'redux';
import rootReducer from './reducers';

let globalStore;

function initStore() {
  return createStore(rootReducer);
}

export const initializeStore = (preloadedState) => {
  let store = globalStore || initStore(preloadedState);

  if (preloadedState && globalStore) {
    store = initStore({
      ...globalStore.getState(),
      ...preloadedState,
    });

    globalStore = undefined;
  }

  if (typeof window === 'undefined') return store;

  if (!globalStore) globalStore = store;

  return store;
};

export function useStore(initialState) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
