import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux'
import { store } from './Redux/store.js'
createRoot(document.getElementById('root')).render(


<Provider store={store}>


<StrictMode>
    <App />
    <ToastContainer />
  </StrictMode>,
</Provider>



)
