import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToggleNavibarProvider } from './contexts/ToggleNavibarContext';
import { About, Profile, Apps, Skills } from './pages';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Navigate to="/about" replace />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/skills",
        element: <Skills />
      },
      {
        path: "/apps",
        element: <Apps />
      }
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <ToggleNavibarProvider>
          <RouterProvider router={router} />
        </ToggleNavibarProvider>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
