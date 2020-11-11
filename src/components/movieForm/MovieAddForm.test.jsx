import React from 'react';
import { act, render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import MovieAddForm from './MovieAddForm';
import { callAddMovie } from '../../server/serverCalls';

jest.mock('../../server/serverCalls');
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('MovieAddForm', () => {
  const mockStore = configureStore();

  test('snapshot', () => {
    const store = mockStore();

    const { asFragment } = render(<Provider store={store}><MovieAddForm /></Provider>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('validate', async () => {
    const store = mockStore();

    render(<Provider store={store}><MovieAddForm /></Provider>);

    await act(async () => {
      userEvent.click(screen.getByText('Submit'));
    });

    expect(screen.getAllByText('Field is required').length).toBe(6);

    expect(callAddMovie).not.toHaveBeenCalled();
  });

  test('call after submit', async () => {
    const store = mockStore();

    render(<Provider store={store}><MovieAddForm /></Provider>);

    await act(async () => {
      await userEvent.type(screen.getByLabelText('Title'), 'test');
      await userEvent.type(screen.getByLabelText('Release Date'), 'test');
      await userEvent.type(screen.getByLabelText('Url'), 'test');
      await userEvent.type(screen.getByLabelText('Genre'), 'test');
      await userEvent.type(screen.getByLabelText('Overview'), 'test');
      await userEvent.type(screen.getByLabelText('Runtime'), 'test');

      userEvent.click(screen.getByText('Submit'));
    });

    expect(callAddMovie).toHaveBeenCalled();
  });

  test('reset', async () => {
    const store = mockStore();

    render(<Provider store={store}><MovieAddForm /></Provider>);

    await act(async () => {
      await userEvent.type(screen.getByLabelText('Title'), 'test');

      userEvent.click(screen.getByText('Reset'));
    });

    expect(screen.getByLabelText('Title').value).toBe('');
  });
});
