import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './configureStore';
const { store, persistor } = configureStore();

test('renders fruits home is open', () => {
  const { getByText } = render(<Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>);
  const linkElement = getByText(/fruits home/i);
  expect(linkElement).toBeInTheDocument();
});
