import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createHashRouter([
	{
		path: '/*',
		element: <App />,
	}
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
