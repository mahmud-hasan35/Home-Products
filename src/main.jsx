import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root.jsx'
import ProductList from './components/ProductList.jsx';
import CreateProduct from './components/CreateProduct.jsx';
import { allCategoryLoader, categoryLoader } from './loader/blogLoader.js';


const router = createBrowserRouter([
 {
  path: '/',
  element: <Root/>,
  loader: categoryLoader,
  children: [
    {
      path:'/',
      element: <ProductList/>,
      index: true,
      loader: allCategoryLoader
    },
    {
      path:'/create',
      element: <CreateProduct/>
    }
  ]
 }

]);

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  
)
