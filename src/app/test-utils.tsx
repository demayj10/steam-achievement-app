import React, { FC, ReactElement } from 'react';
import {
  queries,
  Queries,
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import { createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rootReducer, RootState, Store } from './store';

// add options initialState and store to the usual
type ExtraOptions = {
    initialState?: RootState;
    store?: Store
};

const render = <
    Q extends Queries = typeof queries,
    C extends Element | DocumentFragment = HTMLElement
    >(
    ui: ReactElement,
    options: ExtraOptions & RenderOptions<Q, C> = {},
  ): RenderResult<Q, C> & { store: Store } => {
  const {
    initialState = undefined,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = options;

  const Wrapper: FC = (
    { children },
  ) => <Provider store={store}>{children}</Provider>;

  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
    store,
  };
};

export * from '@testing-library/react';

export { render };
