import { StoreProvider } from 'easy-peasy';
import { createRoot } from 'react-dom/client';
import App from './App';
import { store } from './store';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<StoreProvider store={store}>
  <App />
</StoreProvider>);