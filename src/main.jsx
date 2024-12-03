import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddCoffee from './components/AddCoffee/AddCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx'
import Default from './components/Default/Default.jsx'
import Register from './components/Register/Register.jsx'
import AuthProviders from './Providers/AuthProviders/AuthProviders.jsx'
import Users from './components/Users/Users.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Default></Default>,
    children: [
      {
        path: '/',
        element: <App></App>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: '/addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('http://localhost:5000/users')
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProviders>
  </StrictMode>,
)
