import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom/client';

// Route
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouteError from './components/route-error/RouteError.js';

// Pages
import App from './App.js';

// Dynamic Loading | Code Spliting
const Home = lazy(() => import('./pages/home/Home.js'));
const About = lazy(() => import('./pages/about/About.js'));
const Services = lazy(() => import('./pages/services/Services.js'));
const SuccessStory = lazy(() =>
  import('./pages/success-story/SuccessStory.js')
);

const root = ReactDom.createRoot(document.getElementById('root'));

// Route configurations
const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RouteError />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <RouteError />,
      },
      {
        path: '/about-us',
        element: (
          <Suspense fallback={'Loading...'}>
            <About />
          </Suspense>
        ),
        errorElement: <RouteError />,
      },
      {
        path: '/services',
        element: (
          <Suspense fallback={'Loading...'}>
            <Services />
          </Suspense>
        ),
        errorElement: <RouteError />,
      },

      {
        path: '/success-story',
        element: (
          <Suspense fallback={'Loading...'}>
            <SuccessStory />
          </Suspense>
        ),
        errorElement: <RouteError />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRoutes} />);
