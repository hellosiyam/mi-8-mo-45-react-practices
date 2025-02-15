import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About.jsx';
import Contract from './components/Contract/Contract.jsx';
import Categories from './components/Categories/Categories.jsx';
import Home from './components/Home/Home.jsx';
import Details from './components/Details/Details.jsx';
import Error from './components/Error/Error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement : <Error></Error>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contract',
        element: <Contract></Contract>
      },
      {
        path: '/categories',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a'),
        element: <Categories></Categories>
      },
      {
        path: '/category/:categoryIdMeal',
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.categoryIdMeal}`),
          element : <Details></Details>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
