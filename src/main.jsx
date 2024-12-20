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
import SignIn from './components/SignIn/SignIn.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Default></Default>,
    children: [
      {
        path: '/',
        element: <App></App>,
        loader: () => fetch('https://coffee-store-server-87ppp4pp1-hasib1510s-projects.vercel.app/coffee')
      },
      {
        path: '/addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffee-store-server-87ppp4pp1-hasib1510s-projects.vercel.app/coffee/${params.id}`)
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/signIn',
        element:<SignIn></SignIn>
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('https://coffee-store-server-87ppp4pp1-hasib1510s-projects.vercel.app/users')
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
