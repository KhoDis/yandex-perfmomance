import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './fonts.css'
import './reset.css'
import './styles.css'
import { Main } from './Main.jsx'
import {Header} from "./Header.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header />
      <Main />
  </StrictMode>,
)
