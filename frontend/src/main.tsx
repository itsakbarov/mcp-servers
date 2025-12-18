import React from 'react';
import { createRoot } from 'react-dom/client';

// Simple App component bundled for bootstrap
const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 16 }}>
      <h1>MCP Frontend</h1>
      <p>Bootstrapped by main.tsx</p>
    </div>
  );
};

const mount = document.getElementById('root');
let rootContainer: HTMLElement;
if (mount) {
  rootContainer = mount;
} else {
  rootContainer = document.createElement('div');
  rootContainer.id = 'root';
  document.body.appendChild(rootContainer);
}

const root = createRoot(rootContainer);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
