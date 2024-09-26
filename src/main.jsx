import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import About from './routes/About.jsx';
import Projects from './routes/Projects.jsx';
import Services from './routes/Services.jsx';
import Contact from './routes/Contact.jsx';

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/about', element: <About />},
  {path: '/projects', element: <Projects />},
  {path: '/services', element: <Services />},
  {path: '/contact', element: <Contact />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
